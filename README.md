# hugukumi_official

## Development environment
### 言語
[TypeScript](https://www.typescriptlang.org/)

### FrameWork
[React Native](https://facebook.github.io/react-native)

### Architecture
Flux, Flux実装は[Redux](https://github.com/reduxjs/redux)です。Redux周りの設計は[Ducks](https://github.com/erikras/ducks-modular-redux)を採用しようかと思っています。また、Actionの生成には[typescript-fsa](https://github.com/aikoven/typescript-fsa)を採用します。非同期Actionの扱いには[redux-saga](https://github.com/redux-saga/redux-saga/)を使います。ReduxStateを変更に関係ない処理はReducer内に書かずに、sagaでやるようにしてください。

### Design system
[AtomicDesign](https://postd.cc/the-unicorn-workflow-design-to-code-with-atomic-design-principles-and-sketch/)を採用しています。厳密にAtomicDesignを少し拡張してReact,Reduxの設計に合うように考えています。具体的にはTemplateがContainerに変わり、Pageで最終的にページを組み上げる感じです。

### Test
テストは[Jest](https://jestjs.io/ja/)でコンポーネントのテストには[Storybook](https://storybook.js.org/)を使っています。e2eテストには[detox](https://github.com/wix/detox)を使う…かもしれないです。

### CI
[Bitrise](https://www.bitrise.io/)上でテストを実行します。現状はmasterにPushされたタイミングでpackage.jsonのtestタスクが走ります。簡単なタスクはpackage.jsonにscriptとして登録しますが、テスト配信や本番デプロイの自動化には[Fastlane](https://docs.fastlane.tools/)を使う予定です。

### CodeFormatter, Linter
CodeFormatterは[Prettier](https://prettier.io/)を使っていますので、エディタのプラグイン等で保存時に走るようにするのが良いと思います。プラグインが無い場合はPush前にローカルで実行するようにしてください。Linterは入れていません、TypeScriptとPrettierで十分な気がします。

## TODOs
- [x] TypeScript settings
- [x] Jest
- Slack integration
  - [x] notifications
- Bitrise integration
  - [x] integration
  - [x] build trigger
  - [ ] run fastlane
- Storybook
  - [x] iOS
  - [x] Android
- Fastlane
  - [ ] iOS
  - [ ] Android
- TestDelivery
  - [ ] iOS(TestFlight)
  - [ ] Android(GooglePlayInternalTest)

## Get started

React Nativeの動作環境設定が必要です。公式のチュートリアルに沿って設定してください(https://facebook.github.io/react-native/docs/getting-started.html)

### Build
```
// iOS
react-native run-ios

// Android
react-native run-andorid
```
