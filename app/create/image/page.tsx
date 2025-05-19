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

export default function ImageCreator() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="container mx-auto max-w-4xl">
        <Card className="w-full">
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
                placeholder="イラストにしたいシーンの詳細を記述してください。例：「美しい森の中で、赤い帽子をかぶった少女が小さな白いウサギと会話しています。午後の光が木々の間から差し込んでいます。」"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                スタイルの指定（オプション）
              </label>
              <Textarea placeholder="希望するアートスタイル（水彩画、油絵、アニメ調など）があれば指定してください" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/">戻る</Link>
            </Button>
            <Button>イラストを生成</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
