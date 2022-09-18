export const config = (() => {
  switch (process.env.NEXT_PUBLIC_BASE_URL) {
    case "https://oufes2021.com":
      return {
        title: "笑顔満祭岡大祭 〜心機一転しちゃいな祭〜",
        description:
          "岡山大学祭2021の特設サイトです！今年は「笑顔満祭岡大祭 〜心機一転しちゃいな祭〜」をテーマに、11/7（日）〜11/17（水）の期間中開催されます。岡山大学生が準備したコンテンツをふんだんに披露していきますので、是非この1週間お楽しみください！",
        ogp: "https://oufes2021.com/ou-fes-ogp.jpg",
        backgroundColor: "#FFFFFF",
        displayName: "岡山大学祭2021",
        hero: {
          src: "/ou-fes.svg",
          height: 589,
          width: 2460,
          alt: "笑顔満祭 岡大祭 〜心機一転しちゃいな祭〜",
        },
      };
    case "https://clubs.st.okayama-u.ac.jp":
      return {
        title: "部活動フェスティバル2022",
        description:
          "岡山大学校友会が主催する、部活動フェスティバル2022の公式HPです。部活動やサークル選びに迷っている新入生のみなさんや、コロナ禍で部活動に所属できていない2・3回生のみなさんにご覧いただくため、各団体が協力して制作しました。",
        ogp: "https://clubs.st.okayama-u.ac.jp/club-fes-ogp.jpg",
        backgroundColor: "#FFFCF3",
        displayName: "部活動フェスティバル2022",
        hero: {
          src: "/club-fes.svg",
          height: 2136,
          width: 3923,
          alt: "部活動フェスティバル2022 In Okayama University",
        },
      };
    default:
      return {
        title: "",
        description: "",
        ogp: "",
        backgroundColor: "",
        displayName: "",
        hero: {
          src: "",
          height: 0,
          width: 0,
          alt: "",
        },
      };
  }
})();
