"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import SocialMediaLinks from "../socialmedia/Socialmedia";
import BankAccountCreation from "../modals/getStarted/AccountCreation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleModal, toggleNavigate } from "@/redux/slice";
import SendMoney from "../modals/sendMoney/SendMoney";

const HomePageBody = () => {
  const userName = useSelector((store: any) => store.appReducer.name);
  const getStartedModal = useSelector(
    (store: any) => store.appReducer.toggleModal
  );
  const sendMoneyNavigate = useSelector(
    (store: any) => store.appReducer.toggleNavigate
  );
  const dispatch = useDispatch();
  const showModal = getStartedModal;
  const sendMoneyModal = sendMoneyNavigate;

  return (
    <>
      <div className="mx-6 w-4/4 lg:mx-10">
        <div className="flex justify-start mx-auto items-center  relative top-[30vh]">
          <div className="text-[#faccc9] ">
            <div className="">
              <p className="text-lg Vsmall:text-base lg:text-4xl">
                {" "}
                Hi <span className="capitalize">{userName}</span>
              </p>
              <p className="text-lg font-semibold Vsmall:text-base lg:text-4xl lg:mt-2">
                Welcome to Lu
                <span className="text-[#dcaede] text-xl font-bold lg:text-4xl">
                  X
                </span>
                Pay –
                <span className="font-bold"> Banking at Lightning Speed!</span>
              </p>
              <p className="text-sm text-[#dcaede] mt-1 Vsmall:text-[13px] lg:text-lg lg:mt-2">
                Revolutionizing banking with lightning bolt transactions.
                <span className="block lg:inline">
                  {" "}
                  Instant. Secure. lu<span className="text-[#faccc9]">X</span>
                  Pay
                </span>
              </p>

              <div className="mt-5 Vsmall:absolute Vsmall:z-50 lg:mt-14">
                <Link
                  href="/application/getStarted"
                  className="text-sm Vsmall:text-[13px] my-2 cursor-pointer w-[50%] text-center hover:text-[#c65f2b] border border-[#c65f2b] hover:ease-in hover:duration-300 hover:bg-[#541f56] px-5 Vsmall:px-2 py-2 rounded-lg text-white xl:px-10 xl:w-auto xl:my-0 xl:py-2 lg:relative lg:top-[-5px] lg:text-lg lg:cursor-pointer lg:z-50 "
                >
                  Get Started
                </Link>

                <Link
                  href="/application/sendmoney"
                  className="text-sm Vsmall:text-[13px] my-2 ms-5 xl:mx-4 cursor-pointer w-[50%] text-center text-[#c65f2b] border border-[#c65f2b] hover:ease-in hover:bg-opacity-0  hover:duration-300 bg-[#541f56] px-5 Vsmall:px-2 py-2 rounded-lg hover:text-white xl:px-10 xl:w-auto xl:my-0 xl:py-2 lg:text-lg lg:relative lg:top-[-5px] lg:z-50"
                >
                  Send Money
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <SocialMediaLinks />
        </div>
      </div>

      {/* <div>{showModal && <SendMoney />}</div> */}
      {/* <div>{!sendMoneyModal && <SendMoney />}</div> */}
    </>
  );
};
export default HomePageBody;
