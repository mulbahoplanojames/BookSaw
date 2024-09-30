import { ArticlesData } from "@/Data/Data";

const Articles = () => {
  return (
    <>
      <section className="bg-p1 md:px-20 px-4 md:py-20 py-12" id="/articles">
        <p className="text-lg text-slate-400 uppercase text-center pb-5">
          Read our articles
        </p>
        <h2 className="md:text-5xl text-4xl pb-8  text-center">
          Latest Articles
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-10">
          {ArticlesData.map((article) => (
            <div className="group" key={article.id}>
              <div className="w-full h-[300px]   ">
                <img
                  src={article.image}
                  alt=""
                  className="w-full h-full group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="w-full h-fit">
                <p className="text-lg pb-8 pt-6">{article.date}</p>
                <h3 className="text-3xl pb-7">{article.title}</h3>
                <button className="border border-[#88846a] px-6 py-2 text-[#88846a] cursor-pointer hover:border-black hover:text-black transition-all duration-300 text-lg capitalize">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Articles;
