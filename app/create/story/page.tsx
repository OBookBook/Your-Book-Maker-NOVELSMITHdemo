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
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="container mx-auto max-w-4xl">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>物語を生成</CardTitle>
            <CardDescription>
              テーマやキャラクターを入力して、AIにストーリーを作成してもらいましょう
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">物語のテーマ</label>
              <Input placeholder="例: 冒険、ファンタジー、SF、恋愛など" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">主人公の名前</label>
              <Input placeholder="主人公の名前を入力してください" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">物語の設定</label>
              <Textarea placeholder="例: 遠い未来の宇宙船、魔法の国、現代の都市など" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                その他の登場人物（オプション）
              </label>
              <Textarea placeholder="他の登場人物について説明してください" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                希望するストーリー展開（オプション）
              </label>
              <Textarea placeholder="特に含めたいストーリー要素があれば入力してください" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/">戻る</Link>
            </Button>
            <Button>物語を生成</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
