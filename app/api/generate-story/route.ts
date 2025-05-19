import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const {
      theme,
      mainCharacter,
      setting,
      friendName,
      familyMember,
      pet,
      ageGroup,
    } = await req.json();

    // 追加キャラクターの情報を準備
    const additionalCharacters = [];
    if (friendName) additionalCharacters.push(`友達: ${friendName}`);
    if (familyMember) additionalCharacters.push(`家族: ${familyMember}`);
    if (pet) additionalCharacters.push(`ペット: ${pet}`);

    const additionalCharactersText =
      additionalCharacters.length > 0
        ? `登場人物:\n${additionalCharacters.join("\n")}`
        : "";

    const prompt = `
1〜4歳の子供向けの短い絵本の物語を作成してください。
テーマ: ${theme}
主人公: ${mainCharacter}（子供）
舞台設定: ${setting || "特になし"}
${additionalCharactersText}
対象年齢: ${ageGroup}

以下の条件に従ってください:
- 単純で優しい言葉を使う
- 文章は簡単で短い文で構成
- 5〜8文程度の非常に短いストーリー
- 繰り返しのフレーズを入れる
- ポジティブな結末にする
- 教育的な要素を含める（数、色、感情など）
- 絵本として読み聞かせやすいリズム感
- 主人公の名前（${mainCharacter}）を物語の中で何度か使ってください
${friendName ? `- 友達の${friendName}を物語に登場させてください` : ""}
${familyMember ? `- ${familyMember}を物語に登場させてください` : ""}
${pet ? `- ペットの${pet}を物語に登場させてください` : ""}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [
        { role: "system", content: "あなたは幼児向け絵本の専門家です。" },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const story = completion.choices[0].message.content;

    return NextResponse.json({ story });
  } catch (error) {
    console.error("Story generation failed:", error);
    return NextResponse.json(
      { error: "物語の生成に失敗しました" },
      { status: 500 }
    );
  }
}
