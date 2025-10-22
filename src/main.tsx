import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


import './index.css'
import App from './App.tsx'
import ScreenRenderer from "./components/ScreenRenderer.tsx";


let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/screen/:screenId",
    Component: ScreenRenderer
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
