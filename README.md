# YouTube タイムメモアプリ

YouTubeの動画にタイムスタンプ付きメモを作成・管理できるWebアプリケーション

## 技術スタック

- **パッケージマネージャー**: pnpm
- **モノレポ管理**: Turborepo
- **言語**: TypeScript
- **フロントエンド**: Next.js 14 (App Router)
- **バックエンド**: Express.js
- **CSS**: Tailwind CSS
- **データベース**: Supabase (PostgreSQL)
- **認証**: Supabase Auth (Google OAuth)
- **動画プレイヤー**: YouTube Iframe API

## プロジェクト構成

```
packages/
├── web/                  # Next.js フロントエンド
├── api/                  # Express.js バックエンド
├── shared/               # 共通ライブラリ
└── config/               # 設定ファイル群
    ├── eslint-config/
    ├── typescript-config/
    └── tailwind-config/
```

## 開発環境セットアップ

### 前提条件

- Node.js 18.0.0 以上
- pnpm 9.0.0 以上

### インストール

```bash
# 依存関係のインストール
pnpm install

# 環境変数の設定
cp packages/web/.env.example packages/web/.env.local
cp packages/api/.env.example packages/api/.env

# 開発サーバーの起動
pnpm dev
```

### アクセス

- フロントエンド: http://localhost:3000
- バックエンド: http://localhost:3001

## 利用可能なスクリプト

```bash
# 開発サーバー起動
pnpm dev

# ビルド
pnpm build

# リント
pnpm lint

# 型チェック
pnpm type-check

# テスト
pnpm test

# クリーンアップ
pnpm clean
```

## 環境変数設定

### フロントエンド (.env.local)

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### バックエンド (.env)

```bash
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
YOUTUBE_API_KEY=your_youtube_api_key
PORT=3001
NODE_ENV=development
```

## 主要機能

### 1. 認証機能
- Google OAuth ログイン（Supabase Auth使用）
- ユーザーセッション管理
- ログアウト機能

### 2. 動画管理機能
- YouTube URL入力・検証
- 動画埋め込み表示（YouTube Iframe API）
- 動画リスト表示
- お気に入り動画管理

### 3. タイムメモ機能
- 現在の再生時間でメモ作成
- タイムスタンプクリックで該当時間にジャンプ
- メモの編集・削除
- メモのカテゴリ分け（学習、アイデア、重要等）

### 4. データ管理機能
- メモ付き動画の永続化
- ユーザー別データ管理
- 検索・フィルタリング機能

## 開発フェーズ

### Phase 1: 基盤構築 ✅
- [x] モノレポ環境設定
- [x] 共通ライブラリ作成
- [x] フロントエンド基盤構築
- [x] バックエンド基盤構築

### Phase 2: コア機能実装 (進行中)
- [ ] Supabase プロジェクト作成・設定
- [ ] 認証機能実装（Google OAuth）
- [ ] 基本的なUI コンポーネント作成
- [ ] YouTube動画埋め込み機能
- [ ] 基本的なメモ機能（作成・表示）
- [ ] データベース連携

### Phase 3: 高度な機能
- [ ] タイムスタンプ連動機能
- [ ] メモの編集・削除
- [ ] 検索・フィルタリング機能
- [ ] カテゴリ管理

### Phase 4: UX向上
- [ ] レスポンシブ対応
- [ ] ローディング状態の改善
- [ ] エラーハンドリング強化
- [ ] パフォーマンス最適化

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。#   y o u t u b e M e m o A p p 
 
 