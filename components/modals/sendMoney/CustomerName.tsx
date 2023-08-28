"use client";

import useApiGet from "@/hooks/UseApiGet";
import {
  updateBank,
  updateBankCode,
  updateBankName,
  updateReceiverAccountName,
} from "@/redux/slice";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "../AlertModal";
import { ImSpinner6 } from "react-icons/im";

const CustomerName = () => {
  const [amount, setAmount] = useState("");
  const [bankName, setBankName] = useState("");
  const [clickSelectBank, setClickSelectBank] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState();

  const [closeBankNames, setCloseBankNames] = useState(true);
  const fullBankList = useSelector((store: any) => store.appReducer.bank);
  const bankCode = useSelector((store: any) => store.appReducer.bankCode);
  const receiverAccountNumber = useSelector(
    (store: any) => store.appReducer.receiverAccountNumber
  );
  const finalBankName = useSelector((store: any) => store.appReducer.bankName);
  const receiverAccountName = useSelector(
    (store: any) => store.appReducer.receiverAccountName
  );
  const dispatch = useDispatch();

  const {
    data,
    isLoading,
    isFetching,
    error: errorB,
    refetch,
  } = useApiGet(
    "getCustomerName",
    `https://api.paystack.co/bank/resolve?account_number=${receiverAccountNumber}&bank_code=${bankCode}`
  );

  useEffect(() => {
    if (receiverAccountNumber.length === 10 && bankCode !== 0) {
      refetch();
    }
  }, [receiverAccountNumber, bankCode]);

  useEffect(() => {
    if (data?.data?.data?.account_name) {
      dispatch(updateReceiverAccountName(data.data.data.account_name));
    }
  }, [data]);

  const customerErrorMessage: any = errorB;
  return (
    <div className="">
      <div>
        {receiverAccountNumber.length === 10 && bankCode !== 0 && (
          <div>
            {isLoading || isFetching ? (
              <p className="animate-spin inline justify-center text-2xl">
                <ImSpinner6 />
              </p>
            ) : (
              <p className="mt-2 text-sm md:text-base lg:text-lg">
                <span>
                  {customerErrorMessage
                    ? customerErrorMessage.response.data.message
                    : receiverAccountName}
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default CustomerName;
