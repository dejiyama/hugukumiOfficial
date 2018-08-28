declare module '*/header_style.json' {
  const header: RootObject
  export default header
}

interface RootObject {
  container: Container
  title_view: Title_view
  header_btn: Header_btn
  header_logo: Header_logo
}

interface Container {
  flex: number
  backgroundColor: string
}

interface Title_view {
  height: number
  paddingLeft: number
  paddingRight: number
  flexDirection: undefined
  alignItems: undefined
  backgroundColor: string
}

interface Header_btn {
  width: number
  height: number
  top: number
}

interface Header_logo {
  width: number
  height: number
  top: number
  left: number
}
