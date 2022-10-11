import classNames from "classnames";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { config } from "../lib/config";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>{config.title}</title>
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
          <source src="/video.webm" type="video/webm" />
          <source src="/video.mp4" type="video/mp4" />
          <p>Your browser does not support HTML5 video.</p>
        </video>
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col">
        <div className="grow px-8 w-full max-w-[1400px] mx-auto flex items-center">
          <div className="w-full pt-10">
            <h1 className="text-white/90 tracking-wider text-[40px] sm:text-[50px] md:text-[60px] font-bold drop-shadow-[3px_3px_0_rgba(0,0,0,0.75)] md:drop-shadow-[5px_5px_0_rgba(0,0,0,0.75)]">
              岡山大学祭2021は
              <br />
              終了しました
            </h1>

            <div className="mt-24 flex justify-end items-center">
              <div className="bg-white/90 w-1/3 sm:w-1/2 md:w-[320px] h-[2px] drop-shadow-[2px_2px_0_rgba(0,0,0,0.75)] md:drop-shadow-[3.5px_3.5px_0_rgba(0,0,0,0.75)] mr-2" />
              <p className="text-white/90 tracking-wider sm:text-2xl md:text-[28px] text-right font-bold !leading-7 sm:!leading-10 md:!leading-[3rem] drop-shadow-[2px_2px_0_rgba(0,0,0,0.75)] md:drop-shadow-[3.5px_3.5px_0_rgba(0,0,0,0.75)]">
                たくさんのご来場
                <br />
                ありがとうございました
              </p>
            </div>
          </div>
        </div>

        <div className="flex-none h-28 sm:h-40 bg-white">
          <div className="w-full px-8 max-w-[1400px] mx-auto flex items-center justify-between h-full">
            <div className="hidden lg:block space-y-2">
              <p className="text-text text-lg font-bold">
                企画: 岡山大学校友会・学祭実行委員会
              </p>
              <p className="text-text text-lg font-bold">
                制作: 岡山大学電子計算機研究会
              </p>
            </div>

            <a
              href="https://www.okayama-u.ac.jp/tp/event/event_id2979.html"
              className="bg-primary flex items-center justify-between h-14 sm:h-[77px] w-full lg:w-[422px] pl-6 sm:pl-10 pr-4 sm:pr-8 drop-shadow-[4px_4px_0_black] md:drop-shadow-[5px_5px_0_black]"
            >
              <span className="text-white font-bold sm:text-2xl md:text-[26px] tracking-wider drop-shadow-[2px_2px_0_rgba(255,255,255,0.1)] md:drop-shadow-[4px_4px_0_rgba(255,255,255,0.1)]">
                学祭2022はこちら
              </span>
              <div className="relative w-7 sm:w-[45px] pt-1 drop-shadow-[2px_2px_0_rgba(255,255,255,0.25)] md:drop-shadow-[3px_3px_0_rgba(255,255,255,0.25)]">
                <Image
                  src="/arrow-light.svg"
                  height={29}
                  width={45}
                  layout="responsive"
                  alt="右矢印"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-1/4 text-center duration-700 absolute bottom-0 left-0 right-0 bg-white">
        <div className="w-1/6 relative">
          <Image
            src={config.hero.src}
            height={2136}
            width={3923}
            layout="responsive"
            alt={config.hero.alt}
          />
        </div>
      </div> */}

      {/* <div
        className={classNames(
          "w-[90%] max-w-md text-center duration-700",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      >
        <Image
          src={config.hero.src}
          height={2136}
          width={3923}
          layout="responsive"
          alt={config.hero.alt}
        />
        <h1 className="relative text-lg text-[#3A3A3A] tracking-wider leading-7 text-primary my-6">
          <span className="inline-block">{config.displayName}は</span>
          <span className="inline-block">終了しました</span>
        </h1>
        {config.displayName === "岡山大学祭2021" && (
          <a
            href="https://www.okayama-u.ac.jp/tp/event/event_id2979.html"
            className="bg-[#007DC7] px-8 py-2.5 rounded-xl tracking-wide text-white text-sm inline-block shadow-lg"
          >
            学祭2022はこちら
          </a>
        )}
      </div> */}

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
            <source src="/loading.webm" type="video/webm" />
            <source src="/loading.mp4" type="video/mp4" />
            <p>Your browser does not support HTML5 video.</p>
          </video>
          {/* <Image
            src="/loading.gif"
            height={540}
            width={462}
            layout="responsive"
            alt="loading..."
            priority
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
