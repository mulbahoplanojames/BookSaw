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

// --------------------------------------------------------------------------------------------
// Popular Books Data

import popularbokImg_1 from "/src/assets/tab-item1.jpg";
import popularbokImg_2 from "/src/assets/tab-item2.jpg";
import popularbokImg_3 from "/src/assets/tab-item3.jpg";
import popularbokImg_4 from "/src/assets/tab-item4.jpg";
import popularbokImg_5 from "/src/assets/tab-item5.jpg";
import popularbokImg_6 from "/src/assets/tab-item6.jpg";
import popularbokImg_7 from "/src/assets/tab-item7.jpg";
import popularbokImg_8 from "/src/assets/tab-item8.jpg";

export const popularBooks: FeatureBooksTypes[] = [
  {
    id: 1,
    title: "Portrait photography",
    author: "Adam Silber",
    image: productImg_1,
    price: 10.99,
  },
  {
    id: 2,
    title: "Once upon a time",
    author: "Klien Marry",
    image: productImg_2,
    price: 34.9,
  },
  {
    id: 3,
    title: "Tips of simple lifestyle",
    author: "Bratt Smith",
    image: productImg_3,
    price: 10.99,
  },
  {
    id: 4,
    title: "Just felt from outside",
    author: "Nicole Wilson",
    image: productImg_4,
    price: 10.99,
  },
  {
    id: 5,
    title: "SPeaceful Enlightment",
    author: "Marmik Lama",
    image: productImg_1,
    price: 10.99,
  },
  {
    id: 6,
    title: "Great travel at desert",
    author: "Sanchit Howdy",
    image: productImg_2,
    price: 34.9,
  },
  {
    id: 7,
    title: "Life among the pirates",
    author: "Arthur Doyle",
    image: productImg_3,
    price: 10.99,
  },
  {
    id: 8,
    title: "Simple way of piece life",
    author: "Arthur Doyle",
    image: productImg_4,
    price: 10.99,
  },
];
