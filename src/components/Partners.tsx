const clients = [
  {
    id: 1,
    image: "/src/assets/client-image1.png",
  },
  {
    id: 2,
    image: "/src/assets/client-image2.png",
  },
  {
    id: 3,
    image: "/src/assets/client-image3.png",
  },
  {
    id: 4,
    image: "/src/assets/client-image4.png",
  },
  {
    id: 5,
    image: "/src/assets/client-image5.png",
  },
];

const Partners = () => {
  return (
    <>
      <section className="md:py-20 py-16 md:px-20 px-4 bg-s1 grid grid-cols-2 md:grid-cols-5  gap-6 place-items-center">
        {clients.map((client) => (
          <img
            src={client.image}
            alt=""
            className="w-56 h-40 m-3 object-contain "
            key={client.id}
          />
        ))}
      </section>
    </>
  );
};

export default Partners;
