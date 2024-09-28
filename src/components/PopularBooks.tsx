import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { popularBooksData } from "@/Data/Data";
import { useState } from "react";
// import { featuredBooks } from "@/Data/Data";

const PopularBooks = () => {
  const [selectedCategory, setSelectedCategory] = useState("all Genre");

  // Create a list of unique categories from popularBooksData
  const categories = [
    "all Genre",
    ...new Set(popularBooksData.map((project) => project.category)),
  ];

  // Function to filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all Genre"
      ? popularBooksData
      : popularBooksData.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <>
      <section className="bg-p1 md:px-20 px-4 md:py-16 py-12" id="/popular">
        <p className="text-lg text-slate-400 uppercase text-center pb-5">
          Some quality items
        </p>
        <h2 className="md:text-5xl text-4xl  text-center">Popular Books</h2>

        <div className="md:mt-10 mt-8 mb-14 text-center">
          {/* Category Buttons */}
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => category && setSelectedCategory(category)}
              variant="outline"
              className="md:mx-2 mx-4 my-2"
            >
              {category && category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 gap-y-10 place-items-center mt-6">
          {filteredProjects.map((book) => (
            <Card
              className="px-4 py-5 bg-transparent w-full text-center group transition-all duration-300"
              key={book.id}
            >
              <CardContent>
                <img src={book.image} alt="" className="w-full" />
              </CardContent>
              <CardTitle className="text-lg pb-2 text-[#88846a]">
                {book.title}
              </CardTitle>
              <CardDescription>
                <p className="text-base pb-2 text-[#88846a]">{book.author}</p>
                <p className="text-base pb-2 text-[#88846a]">${book.price}</p>
              </CardDescription>
              <Button className="w-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Add to cart
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center pt-28 md:px-20 px-4">
          <h1 className="capitalize md:text-5xl text-3xl pb-8">
            Quote of the Day
          </h1>
          <p className="md:text-2xl text-xl lg:px-[17rem] pr-0 pb-6 md:leading-loose leading-10">
            “The more that you read, the more things you will know. The more
            that you learn, the more places you’ll go.”
          </p>
          <p className="md:text-2xl text-xl text-[#88846a]">Dr. Seuss</p>
        </div>
      </section>
    </>
  );
};

export default PopularBooks;
