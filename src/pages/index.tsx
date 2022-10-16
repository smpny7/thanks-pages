import classNames from "classnames";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale } from "../hooks/useLocale";

const Home: NextPage = () => {
  const { locale, t } = useLocale();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>笑顔満祭岡大祭 〜心機一転しちゃいな祭〜</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div
        className={classNames(
          "relative h-screen w-screen overflow-hidden duration-700 after:absolute after:top-0 after:right-0 after:block after:h-screen after:w-full after:bg-[rgba(0,_0,_0,_0.3)] after:bg-[radial-gradient(#111_30%,_transparent_31%),_radial-gradient(#111_30%,_transparent_31%)] after:bg-[length:4px_4px] after:bg-[position:0_0,_2px_2px] after:content-['']",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      >
        <video
          className="h-screen w-screen object-cover"
          poster="/video/background-poster.webp"
          loop
          muted
          autoPlay
          playsInline
        >
          <source src="/video/background.webm" type="video/webm" />
          <source src="/video/background.mp4" type="video/mp4" />
          <p>Your browser does not support HTML5 video.</p>
        </video>
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col">
        <div className="relative mx-auto flex w-full max-w-[1400px] grow items-center px-8">
          <div className="w-full pt-10">
            <h1
              className="whitespace-pre-wrap text-[40px] font-bold tracking-wider text-white/90 duration-500 sm:text-[50px] md:text-[60px]"
              style={{ textShadow: "0 0 15px black" }}
            >
              {t.TITLE}
            </h1>

            <div
              className={classNames(
                "flex items-center justify-end",
                locale === "jp" ? "mt-24" : "mt-10 md:mt-24"
              )}
            >
              <div className="mr-2 h-[2px] w-1/3 bg-white/90 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] sm:w-1/2 md:w-[320px] md:drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)]" />
              <p
                className="whitespace-pre-wrap text-right font-bold !leading-7 tracking-wider text-white/90 sm:text-2xl sm:!leading-10 md:text-[28px] md:!leading-[3rem]"
                style={{ textShadow: "0 0 15px black" }}
              >
                {t.SUB_TITLE}
              </p>
            </div>
          </div>
        </div>

        <div className="h-28 flex-none bg-white sm:h-40">
          <div className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between px-8">
            <div className="hidden space-y-2 lg:block">
              <p className="text-lg font-bold text-text">{t.PLANNER}</p>
              <p className="text-lg font-bold text-text">{t.PRODUCER}</p>
            </div>

            <a
              href="https://www.okayama-u.ac.jp/tp/event/event_id2979.html"
              className="flex h-14 w-full items-center justify-between bg-primary pl-6 pr-4 drop-shadow-[4px_4px_0_black] sm:h-[77px] sm:pl-10 sm:pr-8 md:drop-shadow-[5px_5px_0_black] lg:w-[422px]"
            >
              <span className="font-bold tracking-wider text-white sm:text-2xl md:text-[26px]">
                {t.BUTTON_LABEL}
              </span>
              <div className="relative w-7 pt-1 sm:w-[45px]">
                <Image
                  src="/svg/arrow-right.svg"
                  height={29}
                  width={45}
                  layout="responsive"
                  alt={t.ARROW_RIGHT_ALT}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          "absolute top-0 left-0 flex h-full w-full items-center justify-center bg-loading",
          { hidden: !isLoading }
        )}
      >
        <div className="w-40">
          <video
            className="h-full w-full object-cover"
            poster="/video/loading-poster.webp"
            muted
            autoPlay
            playsInline
          >
            <source src="/video/loading.webm" type="video/webm" />
            <source src="/video/loading.mp4" type="video/mp4" />
            <p>Your browser does not support HTML5 video.</p>
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
