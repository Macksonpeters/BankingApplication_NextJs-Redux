"use client";

import { useSelector } from "react-redux";
import {
  createAccountNumber,
  fundBalance,
  toggleModal,
  updateName,
} from "@/redux/slice";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import AlertModal from "../AlertModal";

const FundAccount = () => {
  const [amount, setAmount] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [triggerSuccessful, setTriggerSuccessful] = useState(false);
  const UserName = useSelector((store: any) => store.appReducer.name);
  const Balance = useSelector((store: any) => store.appReducer.balance);
  const ResultModal = useSelector((store: any) => store.appReducer.toggleModal);
  const dispatch = useDispatch();

  return (
    <>
      <div className="">
        <div className="text-[#541f56]">
          <p className="mt-1 text-sm ">
            {!triggerSuccessful && (
              <span className="Vsmall:text-[13px] lg:text-lg">
                "Top up your account in a snap! Just enter the amount you want
                to fund, and you're good to go."{" "}
                <span className="font-semibold"> </span>
              </span>
            )}
          </p>
          {!successful && (
            <>
              <div className="mt-1 text-sm Vsmall:text-[13px] lg:text-lg">
                <label className="font-semibold" htmlFor="">
                  Amount:
                </label>
                <input
                  placeholder="Fill in numbers only!"
                  required
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className=" px-2 mx-2 rounded py-2 outline-none text-[#541f56] Vsmall:w-[70vw] Vsmall:mx-0"
                  name=""
                  id=""
                />
                {amount.length > 0 && (
                  <button
                    onClick={() => {
                      dispatch(fundBalance(amount));
                      setAmount("");
                      setSuccessful(!successful);
                      setTriggerSuccessful(!triggerSuccessful);
                      dispatch(toggleModal(ResultModal));
                    }}
                    type="button"
                    className="text-white rounded-lg bg-[#541f56] px-4 py-2"
                  >
                    Fund
                  </button>
                )}
              </div>
            </>
          )}
        </div>
        <div className="absolute left-0">
          {!ResultModal && <AlertModal alertText="Successfully Funded" />}
        </div>
      </div>
    </>
  );
};
export default FundAccount;
