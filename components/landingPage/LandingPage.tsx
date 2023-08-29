"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import LandingBackground from "../../Images/landingBg.jpg";
import { useSelector } from "react-redux";
import { toggleModal, updateBank, updateName } from "@/redux/slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AlertModal from "../modals/AlertModal";
import useApiGet from "@/hooks/UseApiGet";

const LandingPage = () => {
  const [userName, setUserName] = useState("");
  const [proceed, setProceed] = useState(false);
  // const [filledName, setFilledName] = useState(true);
  const name = useSelector((store: any) => store.appReducer.name);
  const filledName = useSelector((store: any) => store.appReducer.toggleModal);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    name;
  }, [name]);

  return (
    <>
      <div
        id="landingBg"
        className=" h-[100vh] bg-cover shadow-xl shadow-red-300 flex justify-start px-7 mx-auto items-center lg:justify-start lg:px-16"
      >
        <div className="text-center">
          <p className="text-lg capitalize  md:text-xl lg:text-3xl text-[#D8453D] fontShadowInto text-start">
            <span className="font-bold tracking-widest">Hi There!</span>
            <span className="block tracking-wide Vsmall:text-base xl:mt-2">
              Kindly Provide Your Name to Begin Your Journey
            </span>
          </p>
          <div className="mt-5 flex justify-centerlg:justify-start ">
            <div>
              <input
                onClick={() => {
                  setProceed(true);
                }}
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                className="bg-[#270D28] border-2 text-[#f9dad8] font-bold tracking-wide capitalize border-[#d44f0c] rounded-lg px-3 py-2  outline-none Vsmall:w-[70vw]"
              />
            </div>
            <div className=" transition-transform">
              {userName.length >= 1 && (
                <button
                  type="button"
                  className="text-[#fa5301] text-3xl mt-1 ms-2 "
                >
                  <FiArrowRight
                    onClick={() => {
                      if (userName !== "" && userName.length >= 2) {
                        dispatch(updateName(userName));
                        router.push("/application");
                      } else {
                        dispatch(toggleModal(filledName));
                      }
                    }}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {!filledName && (
        <>
          {userName.length <= 1 && (
            <AlertModal
              alertText={"Kindly Provide a Valid Name to Begin Your Journey"}
            />
          )}
        </>
      )}
    </>
  );
};

export default LandingPage;
