import "../css/app.css"

import * as React from "react"
import {createRoot} from "react-dom/client"

import App from "./app"

const container = document.body.querySelector(".container") as Element
const root = createRoot(container)

root.render(
  <App
    lastUpdated={process.env.LAST_UPDATED ?? ""}
    gitHash={process.env.GIT_HASH ?? ""}
  />,
)
