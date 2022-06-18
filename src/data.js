// remix icons
import { RiInstagramFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
// services icons
import Service1Icon from "./assets/img/services/uiux_design.svg";
import Service2Icon from "./assets/img/services/web_design.svg";
import Service3Icon from "./assets/img/services/development.svg";

// brands images
import Brand1Image from "./assets/img/brands/Tailwind_CSS_logo.svg";
import Brand2Image from "./assets/img/brands/react-logo.png";
import Brand3Image from "./assets/img/brands/github-logo.png";
import Brand4Image from "./assets/img/brands/Node_js.png";
import Brand5Image from "./assets/img/brands/Sass.png";

// portfolio images
import PortfolioImage1 from "./assets/img/portfolio/AsgardFestival.png";
import PortfolioImage2 from "./assets/img/portfolio/TajniaPorftolio.png";
import PortfolioImage3 from "./assets/img/portfolio/CarbonFree.png";
import PortfolioImage4 from "./assets/img/portfolio/HogwardsList.png";
import PortfolioImage5 from "./assets/img/portfolio/GameWithChikens.png";

// projects images
import Project1 from "./assets/img/portfolio/AsgardFestival.png";
import Project2 from "./assets/img/portfolio/TajniaPorftolio.png";
import Project3 from "./assets/img/portfolio/CarbonFree.png";
import Project4 from "./assets/img/portfolio/HogwardsList.png";
import Project5 from "./assets/img/portfolio/GameWithChikens.png";
import Project6 from "./assets/img/portfolio/LouisianaMuseum.png";

// projects images
import GP1 from "./assets/img/portfolio/Nr_1.jpg";
import GP2 from "./assets/img/portfolio/Nr_2.png";
import GP3 from "./assets/img/portfolio/Nr_3.jpg";
import GP4 from "./assets/img/portfolio/Nr_4.jpg";
import GP5 from "./assets/img/portfolio/Nr_5.jpg";
import GP6 from "./assets/img/portfolio/Nr_6.jpg";
import GP7 from "./assets/img/portfolio/Nr_7.jpg";
import GP8 from "./assets/img/portfolio/Nr_8.jpg";
import GP9 from "./assets/img/portfolio/Nr_9.jpg";
import GP10 from "./assets/img/portfolio/Nr_10.jpg";
import GP11 from "./assets/img/portfolio/Nr_11.jpg";
import GP12 from "./assets/img/portfolio/Nr_12.jpg";
import GP13 from "./assets/img/portfolio/Nr_13.jpg";
import GP14 from "./assets/img/portfolio/Nr_14.jpg";
import GP15 from "./assets/img/portfolio/Nr_15.jpg";
import GP16 from "./assets/img/portfolio/Nr_16.jpg";
import GP17 from "./assets/img/portfolio/Nr_17.jpg";
import GP18 from "./assets/img/portfolio/Nr_18.jpg";

// projects images
import P1 from "./assets/img/portfolio/T-Hemp.png";

// nav
export const nav = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "areas",
  },
  {
    name: "technologies",
  },
  {
    name: "portfolio",
  },
  {
    name: "contact",
  },
];

// social
export const social = [
  {
    icon: <RiLinkedinFill />,
    href: "https://www.linkedin.com/in/paul-balta-937110206/",
  },
  {
    icon: <RiGithubFill />,
    href: "https://github.com/PaulB1123",
  },
  {
    icon: <MdEmail />,
    href: "baltapaul2@gmail.com?>Click",
  },
  {
    icon: <RiInstagramFill />,
    href: "https://www.instagram.com/paul.balta99/",
  },
];

// about
export const about = {
  title: "About me",
  subtitle:
    "I am a multimedia designer passionate about building websites and solutions that can help others around me. I love to create all kinds of UI elements, from little tasks such as making a button work, displaying data from a database or a dropdown menu, to developing an entire project from scratch. For me, nothing is more interesting than seeing your ideas come to life.",
  image: "",
};

// services
export const services = {
  title: "Areas of expertise",
  subtitle: "These are some of the areas that I have learned during my multimedia and design education and I would like to continue in my internship.",
  skills: [
    {
      icon: Service3Icon,
      name: "Web Developing",
      description: "I have learned how to implement the designs that I had created by investigating how to solve the problems that were occurring and by googling as much as possible.",
    },
    {
      icon: Service2Icon,
      name: "Web Design",
      description: "I have learned how to implement the designs that I had created by investigating how to solve the problems that were occurring and by googling as much as possible.",
    },
    {
      icon: Service1Icon,
      name: "UI/UX Design",
      description: "Designing webpages that speaks for themself and are reconizible it was not an easy task but with the help of prototyping and testing design ideas it helped a lot. ",
    },
  ],
};

// experience
export const contributors = {
  title: "Technologies",
  subtitle: "These are some of the technologies I have worked with",
  brands: [
    {
      image: Brand1Image,
    },
    {
      image: Brand2Image,
    },
    {
      image: Brand3Image,
    },
    {
      image: Brand4Image,
    },
    {
      image: Brand5Image,
    },
  ],
};

// portfolio
export const portfolio = {
  // preTitle: "My latest work",
  title: "Portfolio.",
  paragraph: "This are some projets that I have made in the last semesters.",
  image1: PortfolioImage1,
  image2: PortfolioImage2,
  image3: PortfolioImage3,
  image4: PortfolioImage4,
  image5: PortfolioImage5,
};

// contact
export const contact = {
  title: "Contact.",
  subtitle: "If you liked my projects and whould like to colaborate, I would love to hear from you.  ",
};

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Asgaard Festival",
    category: "web development",
    href: "https://asgaard-fest.netlify.app/",
  },
  {
    id: "2",
    image: Project2,
    name: "Tasja Portfolio",
    category: "web development",
    href: "https://tajiaportfolio.netlify.app/",
  },
  {
    id: "4",
    image: Project4,
    name: "Hogwards Assigment",
    category: "web development",
    href: "https://hogwardsassigment.netlify.app/",
  },
  {
    id: "3",
    image: Project3,
    name: "Green Click Movement",
    category: "web development",
    href: "https://carbonfreeprojectforuni.netlify.app/",
  },
  {
    id: "6",
    image: Project6,
    name: "Louisiana Museum",
    category: "web development",
    href: "https://louisianamuseum.netlify.app/",
  },
  {
    id: "5",
    image: Project5,
    name: "Help the farmer - Game",
    category: "web development",
    href: "https://gamewithchickens.netlify.app/",
  },
  {
    id: "7",
    image: GP1,
    name: "Number1",
    category: "graphic design",
  },
  {
    id: "8",
    image: GP2,
    name: "Number2",
    category: "graphic design",
  },
  {
    id: "9",
    image: GP3,
    name: "Number3",
    category: "graphic design",
  },
  {
    id: "10",
    image: GP4,
    name: "Number4",
    category: "graphic design",
  },
  {
    id: "11",
    image: GP5,
    name: "Number5",
    category: "graphic design",
  },
  {
    id: "12",
    image: GP6,
    name: "Number6",
    category: "graphic design",
  },
  {
    id: "13",
    image: GP7,
    name: "Number7",
    category: "graphic design",
  },
  {
    id: "14",
    image: GP8,
    name: "Number8",
    category: "graphic design",
  },
  {
    id: "15",
    image: GP9,
    name: "Number9",
    category: "graphic design",
  },
  {
    id: "16",
    image: GP10,
    name: "Number10",
    category: "graphic design",
  },
  {
    id: "17",
    image: GP11,
    name: "Number11",
    category: "graphic design",
  },
  {
    id: "18",
    image: GP12,
    name: "Number12",
    category: "graphic design",
  },
  {
    id: "19",
    image: GP13,
    name: "Number13",
    category: "graphic design",
  },
  {
    id: "20",
    image: GP14,
    name: "Number14",
    category: "graphic design",
  },
  {
    id: "21",
    image: GP15,
    name: "Number15",
    category: "graphic design",
  },
  {
    id: "22",
    image: GP16,
    name: "Number16",
    category: "graphic design",
  },
  {
    id: "23",
    image: GP17,
    name: "Number17",
    category: "graphic design",
  },
  {
    id: "24",
    image: GP18,
    name: "Number18",
    category: "graphic design",
  },
  {
    id: "25",
    image: P1,
    name: "T-hemp",
    category: "UI/UX Design",
    href: "https://xd.adobe.com/view/0c1102c2-e18e-4446-9574-3d12bbb5636c-5942/?fullscreen",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web development",
  },
  {
    name: "graphic design",
  },
  {
    name: "UI/UX Design",
  },
];
