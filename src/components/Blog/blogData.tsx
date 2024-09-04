import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    url: "https://polarcode.solutions/tjenester/webdesign",
    lenke: "tjenester/webdesign",
    title: "Vi lager nettside for bedriften din",
    paragraph:"Vi tar arbeidet og hjelper med å fremstille en kravspesifikasjon, design og utvikling av nettsiden",
    image: "/images/tjenester/webdesign.webp",
    author: {
      name: "Morten Sandstedt",
      image: "/images/blog/morten.png",
      designation: "Webdesign og utvikler",
    },
    tags: ["Nettsider"],
    publishDate: "2024",
    
  },
  {
    id: 2,
    url: "https://polarcode.solutions/tjenester/programvare",
    lenke: "tjenester/programvare",
    title: "Utvikling av programvareløsninger",
    paragraph:
      "Vi utvikler programvare for bedrifter og privatpersoner.",
    image: "/images/tjenester/programvare.webp",
    author: {
      name: "Asgeir Bjørgen Huskebakk",
      image: "/images/blog/asgeir.jpg",
      designation: "Programvare ingeniør",
    },
    tags: ["Programvaresystemer"],
    publishDate: "2024",
  },
  {
    id: 3,
    url: "https://polarcode.solutions/tjenester/vedlikehold",
    lenke: "tjenester/vedlikehold",
    title: "Support og vedlikehold av nettsider og systemer",
    paragraph:
      "Vi tilbyr support og vedlikehold av nettsider og programvare.",
    image: "/images/tjenester/vedlikehold.webp",
    author: {
      name: "Polar Code Solutions",
      image: "/images/logo/croppedPolarLogo.png",
      designation: "Webdesign, programvare, vedlikehold, support",
    },
    tags: ["Vedlikehold"],
    publishDate: "2024",
  },
  {
    id: 4,
    url: "https://polarcode.solutions/tjenester/webhosting",
    lenke: "tjenester/webhosting",
    title: "Host nettsiden din hos oss",
    paragraph:"Vårt webhotell er raskt og sikkert. Vi har en rekke løsninger for deg som ønsker å ha en nettside.",
    image: "/images/tjenester/webhotell.webp",
    author: {
      name: "Asgeir Bjørgen Huskebakk",
      image: "/images/blog/asgeir.jpg",
      designation: "Programvare ingeniør",
    },
    tags: ["webhosting"],
    publishDate: "2024",
    
  },
  {
    id: 5,
    url: "https://polarcode.solutions/tjenester/seo",
    lenke: "tjenester/seo",
    title: "Bruk oss for å øke synligheten din",
    paragraph:"Vår SEO vil garantert øke søkemotorresultatene og omsetningen din.",
    image: "/images/tjenester/seo.webp",
    author: {
      name: "Morten Sandstedt",
      image: "/images/blog/morten.png",
      designation: "Search Engine Optimization",
    },
    tags: ["Search Engine Optimization"],
    publishDate: "2024",
    
  },
];
export default blogData;
