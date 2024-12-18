import React from "react";
import "../../style/globals.scss";
// import { unstable_setRequestLocale as unstableSetRequestLocale } from "next-intl/server";
import StoreProvider from "@/redux/StoreProvider";
import { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  metadataBase: new URL("https://kientrucsonganh.vn/"),
  title: "Kiến Trúc Song Anh",
  description: "Kiến Trúc Song Anh",
  applicationName: "Kiến Trúc Song Anh",
  keywords: "Song Anh, Kiến trúc song anh, KT Song Anh, KT SA, ktsa",
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "KT Song Anh",
    startupImage: "/96.png",
  },
  icons: {
    icon: [
      {
        url: "/icons/logo-no-shadow.png",
        sizes: "96x96",
        type: "image/x-icon",
      },
      {
        url: "/icons/logo-no-shadow.png",
        sizes: "120x120",
        type: "icon",
      },
    ],
    apple: "/icons/logo-no-shadow.png",
  },
  // openGraph: {
  //   images: {
  //     url: "/1200.png",
  //   },
  // },
};

const nulshock = localFont({
  src: "../../../public/fonts/nulshock_vi.ttf",
  variable: "--font-nulshock",
  display: "swap",
  preload: true,
});

const sora = localFont({
  src: "../../../public/fonts/sora.ttf",
  variable: "--font-sora",
  display: "swap",
  preload: true,
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // unstableSetRequestLocale(locale);

  // if (!locales.includes(locale as any)) notFound();
  // // let messages: AbstractIntlMessages | undefined;
  // try {
  //   // messages = (await import(`../../../messages/${locale}.json`))?.default;
  // } catch (error: any) {
  //   console.log(error);
  //   notFound();
  // }

  return (
    <html lang={locale} className={`${nulshock.variable} ${sora.variable}`}>
      <StoreProvider>
        <body style={{ fontFamily: "var(--font-sora)" }}>
          <main>{children}</main>
        </body>
      </StoreProvider>
    </html>
  );
}
