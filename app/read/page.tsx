"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BookData {
  title?: string;
  mainCharacter?: string;
  theme?: string;
  setting?: string;
  imageUrl?: string;
  images?: string[]; // 複数の画像URL配列
  story?: string;
}

// 画像の位置を定義
const IMAGE_POSITIONS = [
  "0% 0%", // 左上
  "100% 0%", // 右上
  "0% 100%", // 左下
  "100% 100%", // 右下
];

export default function ReadPage() {
  const router = useRouter();
  const [bookData, setBookData] = useState<BookData | null>(null);
  const [storyText, setStoryText] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // セッションストレージからブックデータを取得
    const data = sessionStorage.getItem("bookData");
    if (data) {
      const parsedData = JSON.parse(data);
      setBookData(parsedData);

      // ストーリーテキストを段落ごとに分割
      if (parsedData.story) {
        const paragraphs = parsedData.story
          .split("\n")
          .filter((para: string) => para.trim() !== "");
        setStoryText(paragraphs);
      }

      // 画像の設定
      if (parsedData.images && Array.isArray(parsedData.images)) {
        setImages(parsedData.images);
      } else if (parsedData.imageUrl) {
        // 単一画像の場合は配列に変換
        setImages([parsedData.imageUrl]);
      }
    }
  }, []);

  const handleNextPage = () => {
    if (currentPage < storyText.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  // 現在のページに対応する画像を取得
  const getCurrentImage = () => {
    if (images.length === 0) return null;

    // 4ページごとに画像を切り替え
    const imageIndex = Math.min(Math.floor(currentPage / 4), images.length - 1);
    return images[imageIndex];
  };

  // 現在のページに対応する画像のポジションを取得
  const getCurrentPosition = () => {
    return IMAGE_POSITIONS[currentPage % 4];
  };

  // テキストを取得
  const getCurrentText = (): string => {
    return currentPage < storyText.length ? storyText[currentPage] : "";
  };

  if (!bookData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>読み込み中...</p>
      </div>
    );
  }

  const currentImage = getCurrentImage();
  const hasMorePages = currentPage < storyText.length - 1;

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-4 md:p-8 lg:p-12">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            ← ホームに戻る
          </Link>
        </div>

        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-purple-800">
            {bookData.title || `${bookData.mainCharacter}の${bookData.theme}`}
          </h1>
        </header>

        <div className="relative">
          {/* 左矢印 */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className={`absolute left-[-40px] top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-pink-100 hover:bg-pink-200 z-10 ${
              currentPage === 0 ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
            aria-label="前のページ"
          >
            <ChevronLeft className="h-8 w-8 text-pink-500" />
          </button>

          {/* 右矢印 */}
          <button
            onClick={handleNextPage}
            disabled={!hasMorePages}
            className={`absolute right-[-40px] top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-pink-100 hover:bg-pink-200 z-10 ${
              !hasMorePages ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
            aria-label="次のページ"
          >
            <ChevronRight className="h-8 w-8 text-pink-500" />
          </button>

          <div
            className={`book-page ${isFlipping ? "flipping" : ""}`}
            ref={bookRef}
          >
            <div className="book-content">
              {currentImage && (
                <>
                  <div className="page-section">
                    <div className="image-container">
                      <div
                        className="image-section"
                        style={{
                          backgroundImage: `url(${currentImage})`,
                          backgroundPosition: getCurrentPosition(),
                        }}
                      />
                    </div>
                    <div className="text-container">
                      <p>{getCurrentText()}</p>
                    </div>
                  </div>
                </>
              )}

              {/* ページナビゲーション */}
              <div className="page-dots">
                {storyText.map((_, index) => (
                  <span
                    key={index}
                    className={`page-dot ${
                      index === currentPage ? "active" : ""
                    }`}
                  >
                    *
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <Button variant="outline" asChild>
            <Link href="/publish">出版ページへ</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/create/image">イラストを編集</Link>
          </Button>
        </div>
      </div>

      <style jsx global>{`
        .book-page {
          background: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.4s ease, opacity 0.4s ease;
          transform-origin: center;
          background: linear-gradient(to bottom, #fdf2f8, #fff);
          border: 12px solid #fef2f9;
        }

        .flipping {
          transform: scale(0.95);
          opacity: 0.7;
        }

        .book-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .page-section {
          width: 100%;
          max-width: 480px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          border-radius: 8px;
          overflow: hidden;
          background: #fefeff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .image-container {
          width: 100%;
          aspect-ratio: 1.2/1;
          overflow: hidden;
          position: relative;
          border-radius: 8px 8px 0 0;
        }

        .image-section {
          width: 100%;
          height: 100%;
          background-size: 200% 200%;
          background-repeat: no-repeat;
          transition: all 0.3s ease;
        }

        .text-container {
          padding: 16px;
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #6b21a8;
          font-size: 1rem;
          line-height: 1.5;
        }

        .page-dots {
          display: flex;
          justify-content: center;
          margin-top: 15px;
          font-size: 16px;
          letter-spacing: 3px;
          color: #d8b4fe;
          max-width: 100%;
          flex-wrap: wrap;
          gap: 2px;
        }

        .page-dot.active {
          color: #a855f7;
        }

        @media (max-width: 640px) {
          .page-dots {
            font-size: 14px;
            letter-spacing: 2px;
          }
        }
      `}</style>
    </main>
  );
}
