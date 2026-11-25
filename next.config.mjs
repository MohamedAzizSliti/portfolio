import path from "path"
import { fileURLToPath } from "url"

const root = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: root,
  images: {
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
