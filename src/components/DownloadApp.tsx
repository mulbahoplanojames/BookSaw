import AppImg from "/src/assets/device.png";
import gooplePlay from "/src/assets/google-play.jpg";
import appStore from "/src/assets/app-store.jpg";

const DownloadApp = () => {
  return (
    <>
      <section
        className="bg-s1 md:px-20 px-4 md:py-20 py-12 grid md:grid-cols-2 grid-cols-1 place-items-center gap-y-14 "
        id="/download"
      >
        <div className="w-full h-[600px] overflow-hidden">
          <img
            src={AppImg}
            alt="App Image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full md:order-last order-first">
          <h1 className="md:text-5xl text-4xl md:pb-16 pb-10">
            Download our <br /> app now !
          </h1>
          <p className="text-lg pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit
            iaculis amet, ac urna. Adipiscing fames semper erat ac in
            suspendisse iaculis.
          </p>
          <div className="flex gap-4">
            <div className="md:w-1/3 w-44 bg-[#88846a] rounded-md overflow-hidden">
              <img
                src={gooplePlay}
                alt="Google play"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/3 w-44 h-14 bg-[#88846a] rounded-md overflow-hidden">
              <img
                src={appStore}
                alt="apple Store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* made with love  */}
        <a href="https://techspace-one.vercel.app/" target="_blank">
          <div
            className="fixed bottom-10 right-4 p-2 rounded-md bg-white text-base cursor-pointer"
            title="Visit our website"
          >
            made ❤️<span className="text-blue-800"> Techspace</span>
            <p>Build your website today</p>
          </div>
        </a>
      </section>
    </>
  );
};

export default DownloadApp;
