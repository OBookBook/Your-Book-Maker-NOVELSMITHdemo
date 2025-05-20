"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";

// ストーリーデータの型定義
interface StoryData {
  theme?: string;
  mainCharacter?: string;
  setting?: string;
  friendName?: string;
  familyMember?: string;
  pet?: string;
  story?: string;
}

export default function ImageCreator() {
  const router = useRouter();
  const [storyData, setStoryData] = useState<StoryData | null>(null);
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("明るく優しいタッチ、子供向け絵本風");
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // セッションストレージからストーリーデータを取得
    const data = sessionStorage.getItem("storyData");
    if (data) {
      const parsedData = JSON.parse(data);
      setStoryData(parsedData);

      // 登場人物を含めた強化プロンプトを生成
      let characterDescription = `${parsedData.mainCharacter}が主人公`;

      if (parsedData.friendName)
        characterDescription += `、友達の${parsedData.friendName}も登場`;

      if (parsedData.familyMember)
        characterDescription += `、${parsedData.familyMember}も登場`;

      if (parsedData.pet)
        characterDescription += `、ペットの${parsedData.pet}も登場`;

      // プロンプトを自動生成
      const suggestedPrompt = `${characterDescription}の、「${
        parsedData.theme
      }」についての子ども向け絵本のイラスト。${
        parsedData.setting ? `場所は${parsedData.setting}。` : ""
      }${
        parsedData.story ? `ストーリー:「${parsedData.story}」` : ""
      }明るく優しい色彩で、1〜4歳の子供向け。`;

      setPrompt(suggestedPrompt);
    }
  }, []);
  const handleGenerateImage = async () => {
    if (!prompt) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, style }),
      });

      const data = await response.json();
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);

        // すべてのデータをセッションストレージに保存
        if (storyData) {
          sessionStorage.setItem(
            "bookData",
            JSON.stringify({
              ...storyData,
              imageUrl: data.imageUrl,
              title:
                storyData.mainCharacter && storyData.theme
                  ? `${storyData.mainCharacter}の${storyData.theme}`
                  : "新しい絵本",
            })
          );
        }
      } else {
        console.error("画像生成エラー:", data.error);
        alert("画像の生成に失敗しました。もう一度お試しください。");
      }
    } catch (error) {
      console.error("エラー:", error);
      alert("エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    router.push("/publish");
  };

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="container mx-auto max-w-4xl">
        <Card className="w-full mb-6">
          <CardHeader>
            <CardTitle>イラストを生成</CardTitle>
            <CardDescription>
              文章の内容からAIがイラストを生成します
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">シーンの説明</label>
              <Textarea
                rows={6}
                placeholder="イラストにしたいシーンの詳細を記述してください"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">スタイルの指定</label>
              <Textarea
                placeholder="希望するアートスタイル"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/create/story">戻る</Link>
            </Button>
            <Button
              onClick={handleGenerateImage}
              disabled={isLoading || !prompt}
            >
              {isLoading ? "生成中..." : "イラストを生成"}
            </Button>
          </CardFooter>
        </Card>

        {imageUrl && (
          <Card className="w-full">
            <CardHeader>
              <CardTitle>生成されたイラスト</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="relative w-full aspect-square max-w-lg rounded-md overflow-hidden">
                <img
                  src={imageUrl}
                  alt="生成されたイラスト"
                  className="object-contain w-full h-full"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleNext}>出版ページへ進む</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  );
}
