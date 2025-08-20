import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// This file is used to initialize pages in a Next.js application.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
