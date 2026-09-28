import "../css/app.css"

import * as React from "react"

interface AppProps {
  lastUpdated: string
  gitHash: string
}

function App({lastUpdated, gitHash}: AppProps) {
  return (
    <div>
      Hello world, {lastUpdated} {gitHash}
    </div>
  )
}

export default App
