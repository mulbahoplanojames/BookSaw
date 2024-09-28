import client_1 from "/src/assets/client-image1.png";
import client_2 from "/src/assets/client-image2.png";
import client_3 from "/src/assets/client-image3.png";
import client_4 from "/src/assets/client-image4.png";
import client_5 from "/src/assets/client-image5.png";

const clients = [
  {
    id: 1,
    image: client_1,
  },
  {
    id: 2,
    image: client_2,
  },
  {
    id: 3,
    image: client_3,
  },
  {
    id: 4,
    image: client_4,
  },
  {
    id: 5,
    image: client_5,
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
