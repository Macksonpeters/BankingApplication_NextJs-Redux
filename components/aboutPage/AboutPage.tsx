import Link from "next/link";
import AboutImage from "../../Images/aboutt.svg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex mx-auto items-center px-5 py-12 text-justify text-[#faccc9]">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/4 mb-6 md:mb-0">
          <Image
            src={AboutImage}
            alt="LuXPay Logo"
            className="max-w-full h-[50vh] rounded-xl"
          />
        </div>
        <div className="lg:w-2/4 lg:me-10 xl:me-5 2xl:me-6 lg:mt-10">
          <h1 className="text-xl font-bold mb-4 fontShadowInto lg:text-3xl">
            Welcome to LuXPay
          </h1>
          <p className="text-base lg:text-lg  mb-6">
            At LuXPay, we're dedicated to transforming the banking landscape
            with lightning bolt transactions that redefine speed and
            convenience. Our platform offers instant and secure transfers,
            making your financial experience truly seamless.
          </p>
          <p className="text-base lg:text-lg mb-6">
            Our cutting-edge technology ensures that your transactions are
            processed at unprecedented speeds. Whether you're sending money to a
            friend or managing your business finances, LuXPay empowers you to
            take control of your transactions without delays.
          </p>
          <p className="text-base lg:text-lg mb-6">
            Your security is paramount. With state-of-the-art encryption and
            robust security protocols, LuXPay prioritizes the protection of your
            financial data. Rest easy knowing that your transactions are
            shielded from any potential threats.
          </p>
          <h2 className="text-xl font-bold mb-2 fontShadowInto lg:text-2xl">
            Get Started
          </h2>
          <p className="text-base lg:text-lg">
            Join us today and experience the future of banking. Make
            lightning-fast transactions, enjoy enhanced security, and embrace a
            new era of financial empowerment. It's time to bank at the speed of
            light with LuXPay.
          </p>

          <button className="mt-5" type="button">
            <Link
              href="/application/getStarted"
              // onClick={() => {
              //   dispatch(toggleModal(showModal));
              // }}
              className="text-sm my-2 cursor-pointer w-[50%] text-center hover:text-[#c65f2b] border border-[#c65f2b] hover:ease-in hover:duration-300 hover:bg-[#541f56] px-5 py-2 rounded-lg text-white xl:px-10 xl:w-auto xl:my-0 xl:py-2 lg:relative lg:top-[-5px] lg:text-lg lg:cursor-pointer lg:z-50 "
            >
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
