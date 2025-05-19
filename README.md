# ノベルスミス

- 「あなたのブックメーカー」(Your Book Maker-NOVELSMITH)demo
- 「NOVELSMITH」(ノベルスミス) - 物語を鍛冶屋のように創り出す

# オリジナルの本作成アプリ MVP

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
  <!-- - オンラインで共有できる機能 -->

# flow

- npx create-next-app@latest
- npx shadcn@latest init
- npx shadcn@latest add button
- npx shadcn@latest add card
- npx shadcn@latest add form
- npx shadcn@latest add input
- npx shadcn@latest add textarea
- npx shadcn@latest add select
- npx shadcn@latest add dialog
- npx shadcn@latest add tabs
- npx shadcn@latest add avatar
- npx shadcn@latest add badge
- npx shadcn@latest add separator
- npx shadcn@latest add checkbox
- npx shadcn@latest add alert
- npx shadcn@latest add dropdown-menu
- npm install openai

# 技術スタック

- 言語：TypeScript
- フレームワーク：Next.js（App Router）
- スタイリング：Tailwind CSS
- UI コンポーネント：shadcn/ui
- サーバーサイド実装：Server Components、Server Actions
- データベース：Supabase（PostgreSQL）
- ORM：Prisma
- 型検証：Zod
- AI 文章生成：OpenAI API（GPT-4）
- AI 画像生成：DALL-E API
- PDF 生成：react-pdf
- ユニットテスト：Vitest
- E2E テスト：Playwright
- コンポーネント開発：Storybook
- リンター：ESLint
- コードフォーマッター：Prettier
- Git フック：Husky
- CI/CD：GitHub Actions
- ホスティング：Vercel
- モニタリング: Sentry

# デザイン

- https://www.dot-st.com/studioclip/cp/sc2025adomizumori/

# memo

- 物語を作って、イラストを作って最後に本にする
- その最小限の MVP を開発する。
- 対象は 1 歳から 4 歳くらいの子供。

# 他社分析

- AI えほん図書館
  - https://app.ehonlib.com/home
    - 対象年齢、主人公、テーマを選択するだけで絵本を生成
    - 1〜4 歳の子供向けに最適化された絵本作成
    - AI によるストーリーとイラスト自動生成
- AI えほん（電通のプロジェクト）電通「AI うえお Lab」
  - 子供が覚えた言葉をベースに絵本を生成
  - 言葉の世界を広げることが目的
  - 1 歳以降の子供向けの読み聞かせ絵本

# 開発、差別化のポイント

- 声の録音機能（祖父母が読み聞かせを録音など）。後から聞いた時に涙がでるくらい、えもい気持になりそうで、思い出として、残せたらと思います。
- web 版でいいなら、シーンに合わせた音楽をかける。
- 教育的要素の強化
  - 発達段階に合わせた学習要素
  - 保護者向けのガイダンス機能

# 構成

- イラストの MVP 構成

  - 始まり：主人公の紹介と状況設定（1 枚目）
  - 展開：ちょっとした出来事や困難（2 枚目）
  - 結末：幸せな結末やメッセージ（3 枚目）

- 生成した画像の表紙への流用
  - 生成した画像（特に 1 枚目）を表紙として再利用するのはとても良いアイデアです
  - コスト削減になり、ユーザー体験にも大きな影響はありません
- 3 イラストでの物語展開のコツ

  - 簡潔な文章: 各ページ 2〜3 文の短い文章
  - 明確なストーリーライン: シンプルな問題 → 解決のパターン
  - 繰り返しの要素: 同じフレーズを繰り返すリズム感
    - この構成でも 1〜4 歳の子供にとっては十分楽しめる内容になり、API コストも約$0.12/冊に抑えられます。まさに MVP の精神に合致した効率的なアプローチです。

- 見せ方は、スライドがよさそう。web 上で紙芝居みたいにスワイプで見える Ui/UX を実装しようか。
