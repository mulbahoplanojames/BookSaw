import NavLinksTypes, { FeatureBooksTypes } from "@/Types/types";

const navLinks: NavLinksTypes[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Featured",
    path: "/featured",
  },
  {
    label: "Popular",
    path: "/popular",
  },
  {
    label: "Offer",
    path: "/offer",
  },
  {
    label: "Articles",
    path: "/articles",
  },
  {
    label: "Dowload App",
    path: "/download",
  },
];

export default navLinks;

// feature Books data

import productImg_1 from "/src/assets/product-item1.jpg";
import productImg_2 from "/src/assets/product-item2.jpg";
import productImg_3 from "/src/assets/product-item3.jpg";
import productImg_4 from "/src/assets/product-item4.jpg";

export const featuredBooks: FeatureBooksTypes[] = [
  {
    id: 1,
    title: "Simple way of piece life",
    author: "Armor Ramsey",
    image: productImg_1,
    price: 10.99,
  },
  {
    id: 2,
    title: "Great travel at deserte",
    author: "Sanchit Howdy",
    image: productImg_2,
    price: 34.9,
  },
  {
    id: 3,
    title: "The lady beauty Scarlett",
    author: "Arthur Doyle",
    image: productImg_3,
    price: 10.99,
  },
  {
    id: 4,
    title: "Once upon a time",
    author: "Klien Marry",
    image: productImg_4,
    price: 10.99,
  },
];
