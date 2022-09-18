import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { config } from "../lib/config";

const Home: NextPage = () => (
  <div className="flex justify-center items-center h-screen w-screen">
    <Head>
      <title>{config.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="w-[90%] max-w-3xl text-center">
      <Image
        src={config.hero.src}
        height={2136}
        width={3923}
        layout="responsive"
        alt={config.hero.alt}
        priority
      />
      <div className="border-[3px] sm:border-4 border-gray-600 rounded-3xl backdrop-sepia-0 bg-white/80 mt-12 sm:mt-20 md:mt-28 p-4 sm:p-6">
        <h1 className="text-lg sm:text-2xl md:text-3xl tracking-wider leading-7 sm:leading-9 text-primary">
          <span className="inline-block">{config.displayName}は</span>
          <span className="inline-block">終了しました</span>
        </h1>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-xl tracking-wider text-gray-500">
          <span className="inline-block">たくさんのご来場</span>
          <span className="inline-block">ありがとうございました</span>
        </p>
      </div>
    </div>
  </div>
);

export default Home;
