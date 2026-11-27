# suyasuyaTY portfolio

Astro で作っているポートフォリオ兼ブログです。

## 開発環境

- Node.js 24 (`.nvmrc` 参照。Astro 7 は Node.js 22.23.4 以上が必要)
- npm

```sh
nvm use        # または fnm use など
npm install
npm run dev    # http://localhost:4321
```

## コマンド

| Command           | Action                           |
| :---------------- | :------------------------------- |
| `npm run dev`     | 開発サーバーを起動               |
| `npm run build`   | `./dist/` に本番ビルド           |
| `npm run preview` | ビルド結果をローカルで確認       |
| `npm run check`   | 型チェック (`astro check`)       |
| `npm run deploy`  | ビルドして Cloudflare にデプロイ |

## デプロイ

Cloudflare Workers (静的アセット) で https://suyasuyaty.com に公開しています。
`main` に push すると Workers Builds が `npm run build` → `npx wrangler deploy` を実行してデプロイします。設定は `wrangler.jsonc` を参照。

手元から直接デプロイする場合は `npm run deploy` (要 `npx wrangler login`)。
