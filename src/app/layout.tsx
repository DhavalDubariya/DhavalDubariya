import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Head } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhaval",
  description: "Copyright @DH-Dubariya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Home</title>
            <link rel="shortcut icon" href="assets/headshot-square.png" />
            <link rel="preload" as="style" href="build/assets/site.9e68131f.css" />
            <link rel="modulepreload" href="build/assets/site.cb69fa51.js" />
            <link rel="stylesheet" href="build/assets/site.9e68131f.css" />
            <script type="module" src="/build/assets/site.cb69fa51.js"></script>
          </meta>
        </meta>
      </Head> */}
      {/* <Head>
      </Head> */}
      <head>
        
  <link rel="shortcut icon" href="assets/20240127_181556-removebg-preview.png"/>
  <link rel="preload" as="style" href="build/assets/site.9e68131f.css" />
  <link rel="modulepreload" href="build/assets/site.cb69fa51.js" />
  <link rel="stylesheet" href="build/assets/site.9e68131f.css" />
  {/* <script type="module" src="build/assets/site.cb69fa51.js"></script> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
