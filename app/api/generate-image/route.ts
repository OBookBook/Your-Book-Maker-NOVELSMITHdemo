import { NextResponse } from "next/server";
import OpenAI from "openai";
import { writeFile } from "fs/promises";
import path from "path";
import { mkdir } from "fs/promises";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt, style } = await req.json();

    // DALLEにわかりやすいプロンプトに変換
    const enhancedPrompt = `
4パネルグリッドレイアウトで、以下のシーンを描いた子ども向け絵本のイラスト:
${prompt}
各パネルは同じキャラクターと世界観を共有し、ストーリーの流れを示すこと。
2x2のグリッド形式で4つの場面を描いてください。
スタイル: ${style || "明るく優しいタッチ、鮮やかな色彩"}
`;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: enhancedPrompt,
      n: 1,
      size: "1024x1024",
      quality: "standard",
      style: "vivid",
    });

    // response.dataが存在するか確認
    if (!response.data || response.data.length === 0) {
      throw new Error("画像生成に失敗しました。データが返されませんでした。");
    }

    const openaiImageUrl = response.data[0].url;

    // openaiImageUrlがundefinedでないことを確認
    if (!openaiImageUrl) {
      throw new Error("画像URLが生成されませんでした。");
    }

    // 画像をダウンロード
    const imageResponse = await fetch(openaiImageUrl);
    const imageBuffer = await imageResponse.arrayBuffer();

    // 保存用のディレクトリを作成（存在しない場合）
    const imagesDir = path.join(process.cwd(), "public/images");
    try {
      await mkdir(imagesDir, { recursive: true });
    } catch (err) {
      // ディレクトリが既に存在する場合は無視
    }

    // ユニークなファイル名を生成
    const fileName = `image_${Date.now()}.png`;
    const filePath = path.join(imagesDir, fileName);

    // 画像を保存
    await writeFile(filePath, Buffer.from(imageBuffer));

    // クライアントに返す画像のパス
    const imageUrl = `/images/${fileName}`;

    return NextResponse.json({
      imageUrl,
      originalUrl: openaiImageUrl,
    });
  } catch (error) {
    console.error("Image generation failed:", error);
    return NextResponse.json(
      { error: "画像の生成に失敗しました" },
      { status: 500 }
    );
  }
}
