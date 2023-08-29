"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import { createAccountNumber, toggleModal, updateName } from "@/redux/slice";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import "animate.css";
import SendMoney from "../sendMoney/SendMoney";
import { useRouter } from "next/navigation";

const BankAccountCreation = () => {
  const [clickedGenerate, setClickedGenerate] = useState(false); //remember to change to false
  const [navigate, setNavigate] = useState(1);
  const CloseModal = useSelector((store: any) => store.appReducer.toggleModal);
  const UserName = useSelector((store: any) => store.appReducer.name);
  const AccountNumber = useSelector(
    (store: any) => store.appReducer.accountNumber
  );

  console.log(UserName);

  const dispatch = useDispatch();
  if (AccountNumber.length > 1) {
    console.log(AccountNumber);
  }

  console.log(AccountNumber);

  return (
    <div className="relative top-10 flex justify-center items-start pt-10 bg-opacity-60 ">
      {navigate === 1 && (
        <div className="flex justify-center mx-auto">
          <div className="w-[90vw] bg-orange-200 p-5 rounded-lg shadow-xl lg:w-[80vw]">
            <div className="flex justify-end cursor-pointer">
              {/* <IoMdClose
                onClick={() => {
                  dispatch(toggleModal(CloseModal));
                }}
                className="text-[#541f56] text-xl font-bold"
              /> */}
            </div>

            {/* Logo */}
            <h1 className="text-center text-[#541f56] font-bold fontShadowInto md:text-lg xl:text-xl">
              Ou
              <span className="text-[#c65f2b] text-lg md:text-xl xl:text-2xl">
                X
              </span>
              Pay
            </h1>

            {/* Body */}

            <div className="body text-[#541f56]">
              <div>
                <p className="Vsmall:text-base lg:text-lg">
                  {" "}
                  Hi <span className="font-bold capitalize">{UserName}</span>
                </p>

                <div>
                  {AccountNumber.length < 1 && (
                    <>
                      <p className="mt-2 text-sm Vsmall:text-[13px] Vsmall:text-justify md:text-base lg:text-lg">
                        {" "}
                        To begin your journey with us, simply create an account
                        number. It's a breeze – just a single click and you're
                        set to go
                      </p>
                      {!clickedGenerate && (
                        <button
                          onClick={() => {
                            dispatch(createAccountNumber());
                            setClickedGenerate(true);
                          }}
                          className="bg-[#541f56] text-white px-3 py-1 rounded-lg mt-2 text-sm Vsmall:text-[13px] lg:text-base"
                          type="button"
                        >
                          Click to generate
                        </button>
                      )}
                    </>
                  )}

                  <div>
                    {clickedGenerate && (
                      <div>
                        <p className="mt-1 text-sm Vsmall:text-[13px]">
                          <span className="block text-green-900 font-semibold animate__animated animate__fadeInDown lg:text-lg">
                            Successful
                          </span>
                        </p>
                      </div>
                    )}

                    {AccountNumber.length > 1 && (
                      <>
                        <div>
                          <span className="animate__animated animate__zoomIn animate__delay-1s Vsmall:text-[13px] lg:text-lg">
                            Account Number is{" "}
                            <span className="font-semibold">
                              {" "}
                              {AccountNumber}
                            </span>
                          </span>
                        </div>
                        <p className="flex justify-end">
                          <Link
                            href="/application/sendmoney"
                            // onClick={() => {
                            //   setNavigate(2);
                            // }}
                            className="bg-[#541f56] text-white px-3 py-1 rounded-lg mt-2 text-sm Vsmall:text-[13px] lg:text-base"
                          >
                            Proceed To Transact
                          </Link>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* close section */}
            <div className="mt-5 text-center text-[#541f56]">
              <hr />
              {/* <button
                onClick={() => {
                  dispatch(toggleModal(CloseModal));
                }}
                className="text-center  font-semibold mt-3 text-sm lg:text-base"
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      )}
      {navigate === 2 && <SendMoney />}
    </div>
  );
};
export default BankAccountCreation;
