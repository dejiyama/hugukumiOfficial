# hugukumi_official

## Development environment
### 言語
[TypeScript](https://www.typescriptlang.org/)

### FrameWork
[React Native](https://facebook.github.io/react-native)

### CI
[Bitrise](https://www.bitrise.io/)上でテストを実行します。現状はmasterにPushされたタイミングでpackage.jsonのtestタスクが走ります。簡単なタスクはpackage.jsonにscriptとして登録しますが、テスト配信や本番デプロイの自動化には[Fastlane](https://docs.fastlane.tools/)を使う予定です。

### CodeFormatter, Linter
CodeFormatterは[Prettier](https://prettier.io/)を使っていますので、エディタのプラグイン等で保存時に走るようにするのが良いと思います。プラグインが無い場合はPush前にローカルで実行するようにしてください。Linterは入れていません、TypeScriptとPrettierで十分な気がします。

## Get started

React Nativeの動作環境設定が必要です。公式のチュートリアルに沿って設定してください(https://facebook.github.io/react-native/docs/getting-started.html)

### Build
```
// iOS
react-native run-ios

// Android
react-native run-andorid
```
