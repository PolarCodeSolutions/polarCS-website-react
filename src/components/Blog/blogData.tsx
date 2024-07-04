import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Vi lager nettside for bedriften din",
    paragraph:"Vi tar arbeidet og hjelper med å fremstille en kravspesifikasjon, design og utvikling av nettsiden",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Morten Sandstedt",
      image: "/images/blog/author-01.png",
      designation: "Front-end Developer",
    },
    tags: ["webdesign"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Utvikling av programvare",
    paragraph:
      "Vi utvikler programvare for bedrifter og privatpersoner.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Asgeir Bjørgen Huskebakk",
      image: "/images/blog/author-02.png",
      designation: "Software Developer",
    },
    tags: ["software"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Support og vedlikehold av nettsider og programvare",
    paragraph:
      "Vi tilbyr support og vedlikehold av nettsider og programvare.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Polar Code Solutions",
      image: "/images/logo/croppedPolarLogo.png",
      designation: "Graphic Designer",
    },
    tags: ["Support"],
    publishDate: "2024",
  },
];
export default blogData;
