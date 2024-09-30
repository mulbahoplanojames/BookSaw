interface NavLinksTypes {
  label: string;
  path: string;
}

export default NavLinksTypes;

export interface FeatureBooksTypes {
  id: number;
  title: string;
  author: string;
  image: string;
  price: number;
}

export interface PopularBooksTypes {
  id: number;
  title: string;
  author: string;
  image: string;
  price: number;
  category: string;
}

export interface ArticleTypes {
  id: number;
  date: string;
  title: string;
  image: string;
}
