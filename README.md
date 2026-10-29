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

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `npm run dev`     | 開発サーバーを起動                   |
| `npm run build`   | `./dist/` に本番ビルド               |
| `npm run preview` | ビルド結果をローカルで確認           |
| `npm run check`   | 型チェック (`astro check`)           |

## デプロイ

`main` に push すると GitHub Actions (`.github/workflows/deploy.yml`) で GitHub Pages にデプロイされます。
