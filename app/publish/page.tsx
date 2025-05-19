"use client";

import { useState } from "react";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export default function PublishPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [includeCover, setIncludeCover] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDownloadPdf = () => {
    // ここにPDF生成と出版処理のロジックを実装
    console.log("Publishing PDF:", {
      title,
      author,
      description,
      includeCover,
    });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-4 md:p-8 lg:p-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            ← ホームに戻る
          </Link>
        </div>

        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            出版と共有
          </h1>
          <p className="text-muted-foreground mt-2">
            あなたの物語をPDFでダウンロード
          </p>
        </header>

        {showSuccess && (
          <Alert className="mb-6 bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
            <AlertTitle>成功！</AlertTitle>
            <AlertDescription>PDFがダウンロードされました。</AlertDescription>
          </Alert>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>プレビュー</CardTitle>
            <CardDescription>あなたの作品をプレビューできます</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            {/* プレビュー表示エリア - ここには実際のプレビューUIが入ります */}
            <div className="border border-dashed border-muted-foreground rounded-md p-8 w-full h-64 flex items-center justify-center">
              <p className="text-muted-foreground">
                プレビューはここに表示されます
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>PDF形式で出版</CardTitle>
            <CardDescription>
              完成した作品をPDF形式でダウンロードできます
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">タイトル</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="物語のタイトルを入力"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">著者名</Label>
              <Input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="著者名を入力"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">説明文</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="物語の説明文を入力"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="cover-page"
                checked={includeCover}
                onCheckedChange={(checked) => setIncludeCover(!!checked)}
              />
              <Label htmlFor="cover-page">表紙ページを含める</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleDownloadPdf}>PDFをダウンロード</Button>
          </CardFooter>
        </Card>

        <div className="flex justify-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/">編集に戻る</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
