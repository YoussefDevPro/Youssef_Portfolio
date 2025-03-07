"use client"

import dynamic from "next/dynamic"

// Import the ModelViewer component dynamically with SSR disabled
const ModelViewer = dynamic(
  () => import("./model-viewer"),
  { ssr: false }
)

export default ModelViewer