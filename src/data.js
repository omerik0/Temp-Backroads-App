import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";
export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.instagram.com", icon: "fab fa-instagram" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-twitter" },
];

export const servicesArticle = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eumquod exercitationem fugit, qui corporis.",
    icon: `fas fa-map`,
    date: `august 26th, 2020`,
    img: img1,
    price: `from $2100`,
    howLong: `6 days`,
    location: "china",
    title: "Tibet Adventure",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eumquod exercitationem fugit, qui corporis.",
    icon: `fas fa-map`,
    date: `October 1th, 2020`,
    img: img2,
    price: `from $1400`,
    howLong: `11 days`,
    location: "indonesia",
    title: "Best Of Java",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eumquod exercitationem fugit, qui corporis.",
    icon: `fas fa-map`,
    date: `September 15th, 2020`,
    img: img3,
    price: `from $5000`,
    howLong: `8 days`,
    location: "Hong Kong",
    title: "Explore Hong Kong",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eumquod exercitationem fugit, qui corporis.",
    date: `December 5th, 2019`,
    img: img4,
    price: `from $3300`,
    howLong: `20 days`,
    location: "Kenya",
    title: "Kenya Highlights",
  },
];
