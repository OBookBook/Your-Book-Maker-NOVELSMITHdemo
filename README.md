# ノベルスミス

- 「あなたのブックメーカー」(Your Book Maker-NOVELSMITH)demo
- 「NOVELSMITH」(ノベルスミス) - 物語を鍛冶屋のように創り出す

# オリジナルの本作成アプリ

- 文章生成 機能

  - OpenAI の API や他の自然言語処理モデルを使用して、物語のプロットやキャラクターの対話を生成します。
  - ユーザーからの入力（テーマやキャラクターの名前など）を基に、カスタマイズされたストーリーを作成できます。

- 画像生成 機能

  - DALL-E や Midjourney などの AI 画像生成ツールを使用して、物語に合ったイラストを生成します。
  - 文章の内容に基づいて、特定のシーンやキャラクターの画像を作成することができます。

- Web アプリの構築

  - フロントエンドには Next.js、TypeScript、Tailwind CSS、shadcn/ui を使用し、ユーザーインターフェースを作成します。
  - バックエンドは、 Next.js、TypeScript、PrismaORM を使用して、AI モデルとの通信やデータの保存を行います。
  - DB は Supsbse を使用してください

- ユーザーインターフェース

  - ユーザーがストーリーのテーマやキャラクターを選択できるインターフェースを提供します。
  - 生成された文章と画像を表示し、ユーザーが絵本をプレビューできる機能を追加します。

- 出版と共有
  - 完成した絵本を PDF 形式でダウンロードできる機能
  - オンラインで共有できる機能

# flow

- npx create-next-app@latest
- npx shadcn@latest init
- npx shadcn@latest add button
- npx shadcn@latest add card
- npx shadcn@latest add form
- npx shadcn@latest add input
