import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    lenke: "tjenester/webdesign",
    title: "Vi lager nettside for bedriften din",
    paragraph:"Vi tar arbeidet og hjelper med å fremstille en kravspesifikasjon, design og utvikling av nettsiden",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Morten Sandstedt",
      image: "/images/blog/author-01.png",
      designation: "Frontend designer & utvikler",
    },
    tags: ["webdesign"],
    publishDate: "2024",
  },
  {
    id: 2,
    lenke: "tjenester/programvare",
    title: "Utvikling av programvare",
    paragraph:
      "Vi utvikler programvare for bedrifter og privatpersoner.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Asgeir Bjørgen Huskebakk",
      image: "/images/blog/author-02.png",
      designation: "Programvare ingniør",
    },
    tags: ["software"],
    publishDate: "2024",
  },
  {
    id: 3,
    lenke: "tjenester/vedlikehold",
    title: "Support og vedlikehold av nettsider og programvare",
    paragraph:
      "Vi tilbyr support og vedlikehold av nettsider og programvare.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Polar Code Solutions",
      image: "/images/logo/croppedPolarLogo.png",
      designation: "Bedrift",
    },
    tags: ["Support"],
    publishDate: "2024",
  },
];
export default blogData;
