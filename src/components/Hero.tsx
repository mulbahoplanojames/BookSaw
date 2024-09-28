const Hero = () => {
  return (
    <>
      <section className=" w-full bg-p1 md:mt-[8.3rem] mt-[11.8rem] md:px-20 px-4 md:py-20 py-10 grid md:grid-cols-2 grid-cols-1 gap-y-14 place-items-center">
        <div className="w-full">
          <h1 className="md:text-6xl capitalize text-5xl pb-6">
            Life of the <br /> wild
          </h1>
          <p className="text-lg">
            In "Life of the Wild," embark on an exhilarating journey through the
            untamed realms of nature. This captivating narrative weaves together
            vivid storytelling and breathtaking descriptions, showcasing the
            intricate balance of ecosystems and the fascinating behaviors of
            wildlife.{" "}
          </p>
          <button className="mt-6 border border-[#88846a] px-6 py-2 text-[#88846a] cursor-pointer hover:border-black hover:text-black transition-all duration-300 text-lg">
            Read More
          </button>
        </div>
        <div className="md:h-[35rem] h-[30rem] w-full overflow-hidden md:w-[80%]">
          <img src="src/assets/main-banner1.jpg" alt="" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default Hero;
