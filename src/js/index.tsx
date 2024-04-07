// eslint-disable-next-line
declare var VERSION: string

import * as React from "react"
import {createRoot} from "react-dom/client"

import App from "./app"

import "../css/app.css"

const container = document.body.querySelector(".container") as Element
const root = createRoot(container)

root.render(<App version={VERSION} />)
