"use client";

import { useSelector } from "react-redux";
import {
  createAccountNumber,
  toggleModal,
  updateBalance,
  updateBank,
  updateBankCode,
  updateBankName,
  updateName,
  updateReceiverAccountName,
  updateReceiverAccountNumber,
} from "@/redux/slice";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import "animate.css";
import FundAccount from "./FundAccount";
import Transfer from "./Transfers";
import { userAgent } from "next/server";
import useApiGet from "@/hooks/UseApiGet";
import AlertModal from "../AlertModal";
import Link from "next/link";
import "animate.css";
import { useRouter } from "next/navigation";

interface Props {}

const TransferConfirmation = () => {
  const [clickedConfirm, setClickedConfirm] = useState(false); //remember to change to false
  const [Otp, setOtp] = useState<any>(1);
  const [inputOtp, setInputOtp] = useState("");
  const [fundAccount, setFundAccount] = useState(false);
  const [transactionResponse, setTransactionResponse] = useState("");
  const toggleModalValue = useSelector(
    (store: any) => store.appReducer.toggleModal
  );
  const receiverAccountNumber = useSelector(
    (store: any) => store.appReducer.receiverAccountNumber
  );
  const finalBankName = useSelector((store: any) => store.appReducer.bankName);
  const accountBalance = useSelector((store: any) => store.appReducer.balance);
  const receiverAccountName = useSelector(
    (store: any) => store.appReducer.receiverAccountName
  );
  const transferAmount = useSelector(
    (store: any) => store.appReducer.transferAmount
  );
  const router = useRouter();

  console.log(inputOtp);

  const dispatch = useDispatch();

  const createOtp = () => {
    const otp = Math.floor(Math.random() * 10000);
    console.log(otp);
    setOtp(otp);
    setClickedConfirm(!clickedConfirm);

    setTimeout(() => {
      setClickedConfirm(false);
      setOtp(null);
    }, 50000); // 2000 milliseconds (2 seconds) delay
  };

  useEffect(() => {}, [clickedConfirm]);

  const handleOtp = () => {
    if (Otp == inputOtp) {
      console.log("Successful");

      if (accountBalance > transferAmount) {
        console.log(receiverAccountName);
        console.log(finalBankName);
        setTransactionResponse("Transaction Successful");
        let newBalance = accountBalance - transferAmount;
        dispatch(updateBalance(newBalance));
        let resetNumber = "";
        let resetBankCode = "";
        dispatch(updateReceiverAccountNumber(resetNumber));
        dispatch(updateBankCode(resetBankCode));
        dispatch(updateBankName(resetBankCode));
        console.log(receiverAccountName);
        console.log(finalBankName);

        dispatch(toggleModal(toggleModalValue));
      } else if (accountBalance < transferAmount) {
        console.log("Insufficient Funds");
        setTransactionResponse("Insufficient Funds");
        dispatch(toggleModal(toggleModalValue));
      }
    } else {
      console.log("<p>Wrong OTP, Try again</p>;");
      setTransactionResponse("Wrong OTP, Try again");
      dispatch(toggleModal(toggleModalValue));
    }
  };

  return (
    <div className="relative top-10 flex justify-center items-start pt-10 bg-gray-900 bg-opacity-60 ">
      <div className="flex flex-col justify-center mx-auto text-[#541f56]">
        {clickedConfirm && (
          <div className=" flex justify-center rounded">
            <div className="text-orange-100 bg-[#541f56] animate__animated animate__fadeInDown text-center w-[50vw] text-sm py-2  lg:text-base">
              <p className="text-red-400 text-[11px] text-center lg:text-base">
                !Otp expires after 50 seconds
              </p>
              OTP is <span className="font-bold">{Otp}</span>
            </div>
          </div>
        )}
        <div className="w-[90vw] bg-orange-200 p-5 rounded-lg shadow-xl lg:w-[70vw]">
          <p className=" font-semibold text-center lg:text-lg">
            Confirm Details
          </p>
          <p className="text-red-600 text-sm text-center lg:text-base">
            !Please confirm details before you proceed to send funds
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <p className="text-[#541f56] flex justify-between text-sm text-start lg:text-base">
              <span>Beneficiary Name: </span>
              <span className="font-semibold justify-end text-end">
                {receiverAccountName}
              </span>
            </p>
            <p className="text-[#541f56] flex justify-between text-sm text-start lg:text-base">
              <span>Beneficiary Bank: </span>
              <span className="font-semibold justify-end text-end">
                {finalBankName}
              </span>
            </p>
            <p className="text-[#541f56] flex justify-between text-sm text-start lg:text-base">
              <span>Beneficiary Account No: </span>
              <span className="font-semibold justify-end text-end">
                {receiverAccountNumber}
              </span>
            </p>
            <p className="text-[#541f56] flex justify-between text-sm text-start lg:text-base">
              <span>Amount: </span>
              <span className="font-semibold justify-end text-end">
                NGN {new Intl.NumberFormat().format(transferAmount)}
              </span>
            </p>
          </div>
          <p className="flex flex-col justify-center">
            <button
              onClick={() => {
                createOtp();
                setFundAccount(true);
              }}
              className="bg-[#541f56] text-white px-5 py-1 me-3 mt-2 rounded-lg text-sm lg:text-base"
            >
              Generate O.T.P
            </button>
          </p>

          {fundAccount && (
            <div className="flex flex-col justify-center items-center mx-auto">
              <input
                placeholder="Input O.T.P"
                required
                type="number"
                value={inputOtp}
                onChange={(e) => {
                  setInputOtp(e.target.value);
                }}
                className=" px-2 rounded py-1 mt-3 outline-none text-sm lg:text-lg text-[#541f56]"
                name=""
                id=""
              />
              {inputOtp.length >= 4 && (
                <button
                  onClick={handleOtp}
                  className="bg-[#541f56] ms-3 text-white px-5 py-1 me-3 mt-2 rounded-lg text-sm lg:text-base"
                >
                  Transfer
                </button>
              )}
            </div>
          )}
          <p className="flex justify-start">
            <Link
              href="/application/sendmoney"
              className=" text-red-600 underline py-1 me-3 mt-2 rounded-lg text-sm lg:text-base"
            >
              Go back
            </Link>
          </p>
          {/* <button
            onClick={() => {
              dispatch(toggleModal(toggleModalValue));
            }}
            type="button"
          >
            Click me
          </button> */}
        </div>
      </div>

      {!toggleModalValue && <AlertModal alertText={transactionResponse} />}
    </div>
  );
};
export default TransferConfirmation;
