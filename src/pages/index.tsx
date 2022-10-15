import classNames from "classnames";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "../hooks/useLocale";

const Home: NextPage = () => {
  const { locale, linkLocale, t } = useLocale();
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
          "movie overflow-hidden h-screen w-screen relative duration-700",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      >
        <video
          className="h-screen w-screen object-cover"
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
        <div className="grow px-8 w-full max-w-[1400px] mx-auto flex items-center relative">
          <div className="absolute top-8 right-6 w-9 sm:w-10">
            <Link href="/" locale={linkLocale}>
              <a className="cursor-pointer">
                <Image
                  src="/svg/language.svg"
                  height={51.2}
                  width={64}
                  layout="responsive"
                  className="opacity-50"
                  alt={t.TRANSLATION_ALT}
                />
              </a>
            </Link>
          </div>
          <div className="w-full pt-10">
            <h1
              className="text-white/90 tracking-wider text-[40px] sm:text-[50px] md:text-[60px] font-bold whitespace-pre-wrap duration-500"
              style={{ textShadow: "0 0 15px black" }}
            >
              {t.TITLE}
            </h1>

            <div
              className={classNames(
                "flex justify-end items-center",
                locale === "jp" ? "mt-24" : "mt-10 md:mt-24"
              )}
            >
              <div className="bg-white/90 w-1/3 sm:w-1/2 md:w-[320px] h-[2px] drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] md:drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] mr-2" />
              <p
                className="text-white/90 tracking-wider whitespace-pre-wrap sm:text-2xl md:text-[28px] text-right font-bold !leading-7 sm:!leading-10 md:!leading-[3rem]"
                style={{ textShadow: "0 0 15px black" }}
              >
                {t.SUB_TITLE}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-none h-28 sm:h-40 bg-white">
          <div className="w-full px-8 max-w-[1400px] mx-auto flex items-center justify-between h-full">
            <div className="hidden lg:block space-y-2">
              <p className="text-text text-lg font-bold">{t.PLANNER}</p>
              <p className="text-text text-lg font-bold">{t.PRODUCER}</p>
            </div>

            <a
              href="https://www.okayama-u.ac.jp/tp/event/event_id2979.html"
              className="bg-primary flex items-center justify-between h-14 sm:h-[77px] w-full lg:w-[422px] pl-6 sm:pl-10 pr-4 sm:pr-8 drop-shadow-[4px_4px_0_black] md:drop-shadow-[5px_5px_0_black]"
            >
              <span className="text-white font-bold sm:text-2xl md:text-[26px] tracking-wider">
                {t.BUTTON_LABEL}
              </span>
              <div className="relative w-7 sm:w-[45px] pt-1">
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
