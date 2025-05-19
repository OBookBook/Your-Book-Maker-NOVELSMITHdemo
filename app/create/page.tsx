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

export default function Create() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 text-center">
          新しい物語を作成
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>文章から始める</CardTitle>
              <CardDescription>AIを使って物語のテキストを生成</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                テーマやキャラクター、設定などを入力して、AIに物語を書いてもらいましょう。あなたのアイデアから素晴らしいストーリーが生まれます。
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/create/story">文章生成を開始</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>イラストから始める</CardTitle>
              <CardDescription>AIを使ってイラストを生成</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                シーンの説明を入力すると、AIがそれに合ったイラストを生成します。あなたのイメージを視覚化しましょう。
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/create/image">イラスト生成を開始</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/">トップに戻る</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
