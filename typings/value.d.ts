declare module '*/value.json' {
  const position: RootObject
  export default position
}

interface RootObject {
  position: Position
}

interface Position {
  fontSize: number
  padding: number
  margin: number
}
