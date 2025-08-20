import { Html, Head, Main, NextScript } from "next/document";
import { Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8"></meta>
      </Head>
      <title>US_SHAREHOLDER</title>
      <body
        // style={{
        //   background:
        //     "linear-gradient(109.6deg, rgb(129, 154, 145) 11.2%, rgb(167, 193, 168) 91.1%)",
        // }}
        // className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
        // bg-gradient-to-br min-h-screen from-gray-800 to-slate-950
        className={`text-slate-100 w-view box-border bg-fixed`}
        style={{ backgroundImage: `url("/us_shareholder_bg.jpg")`, width: "100%" }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
