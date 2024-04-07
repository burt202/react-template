import * as React from "react"

import "../css/app.css"

interface AppProps {
  version: string
}

function App({version}: AppProps) {
  return <div>Hello world v{version}</div>
}

export default App
