"use client";

import { Suspense, type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { fontNames } from "@/styles/fonts";
import { StyledComponentsRegistry } from "@/lib/registry";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/global";
import { GSAPInitializer } from "@/components/atoms/gsap-initializer";
import Script from "next/script";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import Nav from "@/shared/nav";
import { Footer } from "@/shared/footer";
import { Loading } from "@/components/atoms/loading";

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode => {
  return (
    <html lang="en">
      <body className={fontNames}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GSAPInitializer />
            <Loading />
            <main>
              <Nav />
              <Suspense>{children}</Suspense>
              <Footer />
            </main>
          </ThemeProvider>
        </StyledComponentsRegistry>
        <Script
          id="chatbot-config"
          dangerouslySetInnerHTML={{
            __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "-szYnVtSbo_g6B8EMGBGv",
                domain: "www.chatbase.co"
              }
            `,
          }}
        />
        <Script src="https://www.chatbase.co/embed.min.js" strategy="afterInteractive" defer />
      </body>
    </html>
  );
};

export default RootLayout;
