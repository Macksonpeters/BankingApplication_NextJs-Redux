"use client";

import useApiGet from "@/hooks/UseApiGet";
import {
  updateBank,
  updateReceiverAccountNumber,
  updateTransferAmount,
} from "@/redux/slice";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "../AlertModal";
import GetBankCode from "./GetBankCode";
import CustomerName from "./CustomerName";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";

const Transfer = () => {
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [finalResponse, setFinalResponse] = useState();
  const [clickSelectBank, setClickSelectBank] = useState(false);
  const bankCode = useSelector((store: any) => store.appReducer.bankCode);
  const accountBalance = useSelector((store: any) => store.appReducer.balance);
  const finalBankName = useSelector((store: any) => store.appReducer.bankName);
  const receiverAccountNumber = useSelector(
    (store: any) => store.appReducer.receiverAccountNumber
  );
  const receiverAccountName = useSelector(
    (store: any) => store.appReducer.receiverAccountName
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (accountNumber.length === 10) {
      dispatch(updateReceiverAccountNumber(accountNumber));
    }
  }, [accountNumber]);

  return (
    <div className="h-[40vh] ">
      {" "}
      <div>
        <p className="mt-2 text-sm md:text-base lg:text-lg">
          {" "}
          Recipient Account
        </p>
        <input
          placeholder="Fill in numbers only!"
          required
          type="number"
          value={accountNumber}
          onChange={(e) => {
            setAccountNumber(e.target.value);
          }}
          className=" px-2 rounded py-1 mt-1 outline-none text-sm lg:text-lg text-[#541f56]"
          name=""
          id=""
        />
      </div>
      <GetBankCode />
      <CustomerName />
      {/* <div>
        <input
          placeholder="Fill in amount!"
          required
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className=" px-2 rounded py-1 mt-1 outline-none text-sm lg:text-lg text-[#541f56]"
          name=""
          id=""
        />
      </div> */}
      {receiverAccountName !== "" && (
        <>
          <div>
            <input
              placeholder="Fill in amount!"
              required
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className=" px-2 rounded py-1 mt-3 outline-none text-sm lg:text-lg text-[#541f56]"
              name=""
              id=""
            />
          </div>

          {receiverAccountNumber !== 0 &&
            finalBankName !== "" &&
            amount !== "" &&
            amount.length > 1 && (
              <p className="flex justify-start">
                <Link
                  href="/application/transferConfirmation"
                  onClick={() => {
                    dispatch(updateTransferAmount(amount));
                  }}
                  className="bg-[#541f56] text-white px-3 py-1 me-3 mt-2 rounded-lg text-sm lg:text-base"
                >
                  Next
                </Link>
              </p>
            )}
        </>
      )}
    </div>
  );
};

export default Transfer;
