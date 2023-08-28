import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-end text-white items-end w-full relative top-[35vh] xl:top-[15vh]">
      <div className="flex flex-col gap-3 lg:gap-5">
        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/"
            className="text-[#faccc9] text-3xl xl:text-4xl"
          >
            <BsFacebook />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/"
            className="text-[#faccc9] text-3xl xl:text-4xl"
          >
            <BsInstagram />
          </a>
        </div>

        <div>
          <a
            target="_blank"
            href="https://www.twitter.com/"
            className="text-[#faccc9] text-3xl xl:text-4xl"
          >
            <BsTwitter />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://wa.link/ozxr5g"
            className="text-[#faccc9] text-3xl xl:text-4xl"
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
