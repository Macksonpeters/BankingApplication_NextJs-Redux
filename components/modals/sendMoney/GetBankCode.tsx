"use client";

import useApiGet from "@/hooks/UseApiGet";
import { updateBank, updateBankCode, updateBankName } from "@/redux/slice";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "../AlertModal";
import CustomerName from "./CustomerName";

const GetBankCode = () => {
  const [amount, setAmount] = useState("");
  const [bankName, setBankName] = useState("");
  const [clickSelectBank, setClickSelectBank] = useState(false);

  const [closeBankNames, setCloseBankNames] = useState(true);
  const fullBankList = useSelector((store: any) => store.appReducer.bank);
  const bankCode = useSelector((store: any) => store.appReducer.bankCode);
  const finalBankName = useSelector((store: any) => store.appReducer.bankName);
  const receiverAccountNumber = useSelector(
    (store: any) => store.appReducer.receiverAccountNumber
  );
  const dispatch = useDispatch();

  const { data, isLoading, isFetching, error } = useApiGet(
    "getBanksList",
    "https://api.paystack.co/bank"
  );

  let BankList = data?.data?.data;

  useEffect(() => {
    dispatch(updateBank(BankList));
  }, [BankList]);

  const searchBankName = () => {
    if (BankList !== undefined) {
      let FilteredBankList = BankList.filter((item: any) => {
        return item.name.toLowerCase().includes(bankName.toLowerCase());
      });

      dispatch(updateBank(FilteredBankList));
    }
  };

  useEffect(() => {
    searchBankName();
  }, [bankName]);

  const errorMessage: any = error;

  return (
    <div className="">
      <div>
        {errorMessage && (
          <div className="text-sm lg:text-base">
            Failed to load banks, {errorMessage?.message}
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            setClickSelectBank(!clickSelectBank);
          }}
          type="button"
        >
          <p className="mt-2 text-sm md:text-base text-[#541f56] lg:text-lg">
            {" "}
            Select Bank {"->"}
          </p>
        </button>
      </div>
      <div>
        {clickSelectBank && (
          <div className="bg-orange-100 px-3 py-3 me-2">
            <input
              placeholder="Search Bank"
              required
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className=" px-2 rounded py-1 mt-1  outline-none mb-2 text-sm Vsmall:w-[60vw] lg:text-lg text-[#541f56]"
              name=""
              id=""
            />
            <div className="h-[30vh] overflow-y-scroll">
              <div>
                {fullBankList !== undefined && (
                  <div className="text-sm px-1 md:text-base text-[#541f56] lg:text-lg">
                    {fullBankList.map((bank: any) => {
                      return (
                        <div
                          className="mt-1 underline pb-1 cursor-pointer"
                          onClick={() => {
                            setAmount(bank?.code);
                            dispatch(updateBankCode(bank?.code));
                            setClickSelectBank(!clickSelectBank);
                            dispatch(updateBankName(bank?.name));
                          }}
                          key={bank?.id}
                        >
                          {bank?.name}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div>
          {finalBankName.length > 2 && (
            <input
              required
              type="text"
              value={finalBankName}
              readOnly
              className=" px-2 rounded py-1 mt-1  outline-none mb-2 text-sm lg:text-lg text-[#541f56]"
            />
          )}
        </div>

        {/* <div>
          {finalBankName.length > 2 && bankCode.length > 1 && <CustomerName />}
        </div> */}
      </div>
    </div>
  );
};
export default GetBankCode;
