# UmamusumeHimitsu

「ウマ娘プリティーダービー」アプリ内で見られる「◯◯のヒミツ」風のカード画像を作れるジェネレーターです。
Blazor WebAssemblyで作られた静的サイトで、GitHub Pagesで公開できます。

## できること

- キャラクター名・ヒミツの番号・本文を入力してカードをリアルタイムプレビュー
- アイコン画像はデフォルトのプレースホルダーのままでも、アップロードして差し替えても使用可能
- 完成したカードをPNG画像としてダウンロード（[html2canvas](https://html2canvas.hertzen.com/)を使用、ローカル同梱）

## 技術構成

- [Blazor WebAssembly](https://learn.microsoft.com/aspnet/core/blazor/) (.NET 10)
- [Tailwind CSS](https://tailwindcss.com/) v4（[Tailwind.Hosting](https://github.com/kallebysantos/tailwind-dotnet) NuGetパッケージでMSBuildに統合、Node.js不要）
- html2canvas（`wwwroot/js/vendor/html2canvas.min.js`にローカル同梱、外部CDNには依存しません）

## ローカルでの開発

.NET 10 SDKが必要です。

```bash
dotnet run
```

`dotnet watch run` でホットリロードしながら開発できます。Tailwind CSSは`wwwroot/styles.css`を入力として、ビルド時に自動で`wwwroot/app.css`へコンパイルされます。

## ディレクトリ構成

```
Pages/Home.razor       カード生成ページ本体
wwwroot/styles.css      Tailwindの入力CSS（フォント・配色の上書きもここ）
wwwroot/app.css         ビルド時に自動生成される出力CSS（コミット対象）
wwwroot/js/interop.js   PNGダウンロード用のJS Interop
wwwroot/js/vendor/      html2canvas本体（ローカル同梱）
wwwroot/font/           カード表示用のフォント
wwwroot/image/          デフォルトアイコン画像
```

## GitHub Pagesへのデプロイ

`main`ブランチにpushすると、[.github/workflows/deploy.yml](.github/workflows/deploy.yml)のGitHub Actionsが自動的にビルドしてGitHub Pagesへデプロイします。

初回のみ、リポジトリの Settings → Pages で **Source: GitHub Actions** を選択してください。

公開URL: `https://kawa0x0A.github.io/UmamusumeHimitsu/`

## ライセンス

[MIT License](LICENSE)
