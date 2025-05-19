"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function StoryCreator() {
  const router = useRouter();
  const [theme, setTheme] = useState("");
  const [mainCharacter, setMainCharacter] = useState("");
  const [setting, setSetting] = useState("");
  const [friendName, setFriendName] = useState("");
  const [familyMember, setFamilyMember] = useState("");
  const [pet, setPet] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedStory, setGeneratedStory] = useState("");

  const handleGenerateStory = async () => {
    if (!theme || !mainCharacter) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          theme,
          mainCharacter,
          setting,
          friendName,
          familyMember,
          pet,
          ageGroup: "1-4歳",
        }),
      });

      const data = await response.json();
      if (data.story) {
        setGeneratedStory(data.story);

        // セッションストレージに保存
        sessionStorage.setItem(
          "storyData",
          JSON.stringify({
            theme,
            mainCharacter,
            setting,
            friendName,
            familyMember,
            pet,
            story: data.story,
          })
        );
      } else {
        console.error("物語生成エラー:", data.error);
        alert("物語の生成に失敗しました。もう一度お試しください。");
      }
    } catch (error) {
      console.error("エラー:", error);
      alert("エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    router.push("/create/image");
  };

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="container mx-auto max-w-4xl">
        <Card className="w-full mb-6">
          <CardHeader>
            <CardTitle>物語を生成</CardTitle>
            <CardDescription>
              テーマやキャラクターを入力して、AIにストーリーを作成してもらいましょう
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">物語のテーマ</label>
              <Input
                placeholder="例: おやすみ、友情、冒険、おいしいごはん"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                子供の名前（主人公）
              </label>
              <Input
                placeholder="子供の名前を入力してください"
                value={mainCharacter}
                onChange={(e) => setMainCharacter(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">友達の名前（任意）</label>
              <Input
                placeholder="例: お友達の名前"
                value={friendName}
                onChange={(e) => setFriendName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">家族の名前（任意）</label>
              <Input
                placeholder="例: ママ、パパ、おじいちゃんなど"
                value={familyMember}
                onChange={(e) => setFamilyMember(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                ペットの名前と種類（任意）
              </label>
              <Input
                placeholder="例: ポチ（犬）、タマ（猫）"
                value={pet}
                onChange={(e) => setPet(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">物語の舞台</label>
              <Textarea
                placeholder="例: お家、公園、どうぶつの森"
                value={setting}
                onChange={(e) => setSetting(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/">戻る</Link>
            </Button>
            <Button
              onClick={handleGenerateStory}
              disabled={isLoading || !theme || !mainCharacter}
            >
              {isLoading ? "生成中..." : "物語を生成"}
            </Button>
          </CardFooter>
        </Card>

        {generatedStory && (
          <Card className="w-full">
            <CardHeader>
              <CardTitle>生成された物語</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert">
                {generatedStory.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleNext}>イラストを作成する</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  );
}
