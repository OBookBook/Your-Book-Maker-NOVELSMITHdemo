import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 md:p-8 lg:p-12">
      <div className="container mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            ノベルスミス
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400">
            あなたのブックメーカー - 物語を鍛冶屋のように創り出す
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>文章生成</CardTitle>
              <CardDescription>AI技術を使って物語を創作</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                OpenAIのAPIを使用して、物語のプロットやキャラクターの対話を生成します。テーマや登場人物を入力するだけで、あなただけの物語が誕生します。
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/create/story">始める</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>画像生成</CardTitle>
              <CardDescription>物語に合ったイラストを作成</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                DALL-EなどのAI画像生成ツールを使用して、物語に合ったイラストを自動生成。文章の内容に基づいて、シーンやキャラクターの画像を作成します。
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/create/image">始める</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>出版と共有</CardTitle>
              <CardDescription>作品を仕上げて共有</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                完成した絵本をPDF形式でダウンロードしたり、オンラインで共有できます。あなたの創作を世界中の人々と共有しましょう。
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/publish">始める</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" asChild>
            <Link href="/create">新しい物語を作る</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
