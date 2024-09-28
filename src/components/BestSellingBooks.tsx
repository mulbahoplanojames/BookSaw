import productImg from "/src/assets/single-image.jpg";

const BestSellingBooks = () => {
  return (
    <>
      <section className="md:px-20 px-4 md:py-28 py-16 bg-s1 grid md:grid-cols-2 grid-cols-1 gap-8 gap-y-16">
        <div className="w-full h-[400px]">
          <img
            src={productImg}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <div className=" w-full h-fit">
          <h2 className="md:text-5xl text-4xl  md:pb-16 pb-10">
            Best Selling <br /> Books
          </h2>
          <p className="text-base text-slate-400 md:pb-10 pb-6">
            By Timbur Hood
          </p>
          <h3 className="text-3xl pb-7">Birds gonna be happy</h3>
          <p className="text-lg pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac.
          </p>
          <p className="text-2xl text-[#88846a] pb-10">$ 45.00</p>
          <button className="border border-[#88846a] px-6 py-2 text-[#88846a] cursor-pointer hover:border-black hover:text-black transition-all duration-300 text-lg capitalize">
            Shop it now
          </button>
        </div>
      </section>
    </>
  );
};

export default BestSellingBooks;
