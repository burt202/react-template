import "../css/app.css"

import * as React from "react"
import {createRoot} from "react-dom/client"

import App from "./app"

declare let VERSION: string

const container = document.body.querySelector(".container") as Element
const root = createRoot(container)

root.render(<App version={VERSION} />)
