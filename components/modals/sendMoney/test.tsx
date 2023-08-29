"use client";

import { useSelector } from "react-redux/es/exports";
import {
  createAccountNumber,
  toggleModal,
  updateBank,
  updateName,
} from "@/redux/slice";
import { useDispatch } from "react-redux/es/exports";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import "animate.css";
import FundAccount from "./FundAccount";
import Transfer from "./Transfers";
import { userAgent } from "next/server";
import useApiGet from "@/hooks/UseApiGet";

interface Props {}

const SendMoneyy = () => {
  const [clickedGenerate, setClickedGenerate] = useState(false); //remember to change to false
  const [fundAccount, setFundAccount] = useState(false);
  const CloseModal = useSelector((store: any) => store.appReducer.toggleModal);
  const UserName = useSelector((store: any) => store.appReducer.name);
  const Balance = useSelector((store: any) => store.appReducer.balance);
  const BankList = useSelector((store: any) => store.appReducer.bank);

  const AccountNumber = useSelector(
    (store: any) => store.appReducer.accountNumber
  );
  const dispatch = useDispatch();

  BankList;

  return (
    <div className="h-screen w-screen fixed top-0 flex justify-center items-start pt-10 bg-gray-900 bg-opacity-60 z-50 ">
      <div className="flex justify-center mx-auto">
        <div className="w-[90vw] bg-orange-200 p-5 rounded-lg shadow-xl lg:w-[70vw]">
          <div className="flex justify-between cursor-pointer">
            <div>
              <p className="mt-1 text-sm text-[#541f56]">
                <span className="animate__animated animate__zoomIn lg:text-lg">
                  Acc No:{" "}
                  <span className="font-semibold"> {AccountNumber}</span>
                </span>
              </p>
              <p className="mt-1 text-sm text-[#541f56]">
                <span className="animate__animated animate__zoomIn lg:text-lg">
                  Balance:{" "}
                  <span className="font-semibold">
                    {" "}
                    ₦ {new Intl.NumberFormat().format(Balance)}
                  </span>
                </span>
              </p>
              <p className="mt-1 text-sm text-[#541f56]">
                <span className="animate__animated animate__zoomIn lg:text-lg ">
                  <span
                    onClick={() => {
                      setFundAccount(!fundAccount);
                    }}
                    className="underline"
                  >
                    Fund Account
                  </span>
                </span>
              </p>
            </div>
            <div>
              <IoMdClose
                onClick={() => {
                  dispatch(toggleModal(CloseModal));
                }}
                className="text-[#541f56] text-xl font-bold"
              />
            </div>
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
              <p className="lg:text-lg">
                {" "}
                Hi <span className="font-bold">{UserName}</span>
              </p>
              {Balance <= 0 && (
                <>
                  <p className="mt-2 text-sm font-semibold md:text-base lg:text-lg">
                    {" "}
                    You need to fund your account
                  </p>
                  <div className="mt-2">
                    <span className="cursor-pointer bg-[#541f56] text-white px-4 py-1 rounded-lg  text-sm hover:underline lg:text-base ">
                      <span
                        onClick={() => {
                          setFundAccount(!fundAccount);
                        }}
                        className=""
                      >
                        Click to Fund
                      </span>
                    </span>
                  </div>
                </>
              )}
            </div>
            {fundAccount && (
              <div>
                <FundAccount />
              </div>
            )}

            {Balance === 0 && (
              <>
                <Transfer />
              </>
            )}
          </div>

          {/* close section */}
          <div className="mt-5 text-center text-[#541f56]">
            <hr />
            <button
              onClick={() => {
                dispatch(toggleModal(CloseModal));
              }}
              className="text-center  font-semibold mt-3 text-sm lg:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SendMoneyy;
