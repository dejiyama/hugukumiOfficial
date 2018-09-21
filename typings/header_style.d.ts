declare module '*/header_style.json' {
  const header: RootObject
  export default header
}

interface RootObject {
  container: Container
  title_view: Title_view
  header_btn_goback: Header_btn_goback
  header_btn_cart: Header_btn_cart
  header_logo: Header_logo
  etc_header_btn: Etc_header_btn
  etc_header_logo: Etc_header_logo
}

interface Container {
  flex: number
  backgroundColor: string
}

interface Header_btn_goback {
  width: number
  height: number
}

interface Header_btn_cart {
  width: number
  height: number
}

interface Header_btn {
  width: number
  height: number
}

interface Header_logo {
  width: number
  height: number
}
interface Title_view {
  height: number
  paddingLeft: number
  paddingRight: number
  flexDirection: undefined
  alignItems: undefined
  backgroundColor: string
}

interface Etc_header_btn {
  width: number
  height: number
}
interface Etc_header_logo {
  width: number
  height: number
  alignItems: string
  justfyContent: string
  flexDirection: string
}
