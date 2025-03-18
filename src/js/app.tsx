import "../css/app.css"

import * as React from "react"

interface AppProps {
  version: string
}

function App({version}: AppProps) {
  return <div>Hello world v{version}</div>
}

export default App
