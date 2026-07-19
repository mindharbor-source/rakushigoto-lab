# ラクシゴト研究所

Media OSで運営する、非エンジニアの会社員向けの実践メディアです。生成AI、業務効率化サービス、在宅勤務環境について、読者が自分で選ぶための判断基準を届けます。スマートフォンだけでも継続運営できる、簡潔な静的サイトを目指しています。

## 技術構成

- Astro 5
- Markdown / Astro components
- GitHub Pages
- GitHub Actions

## ローカル起動

Node.js 20以降を用意し、リポジトリのルートで実行します。

```sh
npm install
npm run dev
```

表示されたローカルURLをブラウザで開きます。

## ビルド

```sh
npm run build
```

生成物は `dist/` に出力されます。`main` ブランチへのpush後は、GitHub Actionsが同じビルドを行い、GitHub Pagesへ公開します。

## 記事の追加

1. `src/pages/articles/` にURLスラッグをファイル名とした `.md` を追加します。
2. 次のfrontmatterを設定します。日付は `YYYY-MM-DD` 形式を使います。

```yaml
---
layout: ../../layouts/ArticleLayout.astro
title: 記事タイトル
description: 検索結果に表示する記事固有の説明
date: 2026-07-19
updated: 2026-07-19
category: AI仕事術
affiliate: false
---
```

3. `src/pages/articles/index.astro` の一覧に記事を追加します。
4. 必要に応じて `src/pages/index.astro` の新着記事を更新します。
5. GitHubのブラウザ編集で追加する場合も、公開前チェックを行ってからコミットします。

## 公開前チェック

- [ ] `title` と `description` が他ページと重複していない
- [ ] `h1` が1ページに1つだけある
- [ ] 見出しが `h2`、`h3` の順で構成されている
- [ ] 公開日と最終確認日が正しい
- [ ] 記事一覧または関連記事から到達できる
- [ ] 料金・機能・規約を一次情報で確認した
- [ ] 架空の体験談や未確認の数値を含まない
- [ ] アフィリエイトリンクを含む場合は `affiliate: true` を設定した
- [ ] 商品画像・引用・ロゴの利用条件と出典を確認した
- [ ] 新しい外部タグ、埋め込み、フォームを追加していない（追加時はプライバシー確認済み）
- [ ] スマートフォン幅で表や文章が崩れない
- [ ] `npm run build` が成功する
