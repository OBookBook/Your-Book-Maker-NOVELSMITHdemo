import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden relative">
      {/* 固定された装飾要素 - 左側 */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">" NOVELSMITH "</h2>
          <h3 className="text-gray-600">ノベルスミス</h3>
          <Separator className="w-40 bg-gray-300 mx-auto my-4" />
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Link href="/create/story" className="group">
                <div className="overflow-hidden rounded-md shadow-md bg-white">
                  <div className="w-[120px] h-[120px] bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-2 text-sm group-hover:text-black transition-colors">
                  物語を作る
                </p>
              </Link>
              <Link href="/create/image" className="group">
                <div className="overflow-hidden rounded-md shadow-md bg-white">
                  <div className="w-[120px] h-[120px] bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-2 text-sm group-hover:text-black transition-colors">
                  イラストを作る
                </p>
              </Link>
              <Link href="/library" className="group">
                <div className="overflow-hidden rounded-md shadow-md bg-white">
                  <div className="w-[120px] h-[120px] bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-2 text-sm group-hover:text-black transition-colors">
                  ライブラリ
                </p>
              </Link>
              <Link href="/publish" className="group">
                <div className="overflow-hidden rounded-md shadow-md bg-white">
                  <div className="w-[120px] h-[120px] bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-2 text-sm group-hover:text-black transition-colors">
                  出版する
                </p>
              </Link>
            </div>
            <Button className="mt-6 w-full bg-black hover:bg-gray-800 text-white rounded-none">
              ALL ITEMS
            </Button>
          </div>
        </div>
      </div>

      {/* 固定された装飾要素 - 装飾要素 */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[
          { color: "text-gray-200", top: "10%", left: "15%" },
          { color: "text-gray-300", top: "15%", right: "10%" },
          { color: "text-gray-400", top: "40%", left: "5%" },
          { color: "text-gray-200", bottom: "20%", right: "15%" },
          { color: "text-gray-300", bottom: "30%", left: "20%" },
          { color: "text-gray-400", top: "35%", right: "5%" },
        ].map((dot, index) => (
          <div
            key={index}
            className={`absolute ${dot.color}`}
            style={{
              top: dot.top,
              left: dot.left,
              right: dot.right,
              bottom: dot.bottom,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
        ))}
      </div>

      {/* 中央のスクロール可能なコンテナ */}
      <div className="relative mx-auto max-w-3xl px-4 py-12 lg:py-24 z-20">
        {/* メイン画像とタイトルのコンテナ */}
        <Card className="border-0 shadow-xl mb-16 overflow-hidden">
          <CardHeader className="pt-8 pb-4 px-8 text-center">
            <CardTitle className="text-4xl font-bold text-gray-900">
              NOVELSMITH
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              あなたのブックメーカー
            </CardDescription>
          </CardHeader>

          <Tabs defaultValue="story" className="w-full">
            <div className="px-8">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="story">物語を作る</TabsTrigger>
                <TabsTrigger value="image">イラストを作る</TabsTrigger>
                <TabsTrigger value="library">ライブラリ</TabsTrigger>
                <TabsTrigger value="publish">出版する</TabsTrigger>
              </TabsList>
            </div>

            <div className="relative w-full h-[500px] bg-gray-200 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent py-10">
                <h2 className="text-6xl font-bold text-white text-center">
                  NOVELSMITH
                </h2>
              </div>
            </div>
          </Tabs>
        </Card>

        {/* カード セクション */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-none">
            <CardHeader className="pb-2">
              <Badge variant="outline" className="w-fit mb-3">
                機能
              </Badge>
              <CardTitle className="text-xl text-gray-900">
                物語を作る
              </CardTitle>
              <CardDescription className="text-gray-600">
                AIの力で物語を創作
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="w-full h-[160px] bg-gray-200 mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-700">
                OpenAIのAPIを活用して、物語のプロットやキャラクターの対話を生成。アイデアを物語に変換します。
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-black hover:bg-gray-800 text-white rounded-none"
                asChild
              >
                <Link href="/create/story">始める</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-none">
            <CardHeader className="pb-2">
              <Badge variant="outline" className="w-fit mb-3">
                機能
              </Badge>
              <CardTitle className="text-xl text-gray-900">
                イラストを作る
              </CardTitle>
              <CardDescription className="text-gray-600">
                物語に命を吹き込む
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="w-full h-[160px] bg-gray-200 mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-700">
                DALL-Eの技術を使って、あなたの物語を視覚化します。文章からイメージが生まれる瞬間を体験しましょう。
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-black hover:bg-gray-800 text-white rounded-none"
                asChild
              >
                <Link href="/create/image">始める</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-none">
            <CardHeader className="pb-2">
              <Badge variant="outline" className="w-fit mb-3">
                機能
              </Badge>
              <CardTitle className="text-xl text-gray-900">出版する</CardTitle>
              <CardDescription className="text-gray-600">
                世界と共有する
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="w-full h-[160px] bg-gray-200 mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-700">
                創作した物語をPDF化したり、オンラインで共有したりできます。あなたの作品を世界に届けましょう。
              </p>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-black hover:bg-gray-800 text-white rounded-none"
                asChild
              >
                <Link href="/publish">始める</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* 装飾要素とボタン */}
        <div className="mt-16 flex justify-between items-end">
          <Avatar className="w-32 h-32 border-4 border-gray-200">
            <AvatarImage src="/avatar.png" alt="N" />
            <AvatarFallback className="bg-gray-800 text-white text-4xl">
              N
            </AvatarFallback>
          </Avatar>
          <Button
            variant="default"
            size="lg"
            className="bg-black hover:bg-gray-800 text-white py-6 px-10 rounded-none text-lg shadow-lg"
            asChild
          >
            <Link href="/create">創作を始める</Link>
          </Button>
        </div>

        {/* フッター */}
        <footer className="mt-20 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-6">
              <Link
                href="#"
                className="hover:text-black transition-colors text-gray-500"
              >
                ONLINE SHOP
              </Link>
              <Link
                href="#"
                className="hover:text-black transition-colors text-gray-500"
              >
                ABOUT
              </Link>
              <Link
                href="#"
                className="hover:text-black transition-colors text-gray-500"
              >
                CONTACT
              </Link>
            </div>
            <p className="text-gray-500 text-sm">© NOVELSMITH 2023</p>
          </div>
          <Separator className="bg-gray-100" />
          <div className="pt-4 text-xs text-gray-400 text-center">
            文章生成、イラスト作成から出版まで、あなたのクリエイティブな作品作りをサポートします。
          </div>
        </footer>
      </div>

      {/* 固定された装飾要素 - 右側 */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <div className="text-center space-y-6">
          <Link
            href="/about"
            className="text-gray-700 hover:text-black transition-colors"
          >
            ABOUT
          </Link>
          <Separator className="w-40 bg-gray-300 mx-auto my-4" />
          <div className="relative">
            <Avatar className="w-[200px] h-[250px] rounded-none mx-auto mb-4">
              <AvatarImage
                src="/profile.png"
                alt="ノベルスミス"
                className="object-cover"
              />
              <AvatarFallback className="bg-gray-200 rounded-none flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl text-gray-800 mb-2">ノベルスミス</h3>
            <p className="text-xs text-gray-600 max-w-xs">
              AIを活用した物語創作プラットフォーム。
              文章生成、イラスト作成から出版まで、
              あなたのクリエイティブな作品作りをサポートします。
            </p>
            <Badge variant="outline" className="mt-4 mx-auto">
              © NOVELSMITH
            </Badge>
          </div>
        </div>
      </div>
    </main>
  );
}
