"use client";

import { useSelector } from "react-redux";
import { toggleModal, updateName } from "@/redux/slice";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";

interface Props {
  alertText?: string;
}

const AlertModal = ({ alertText }: Props) => {
  const CloseModal = useSelector((store: any) => store.appReducer.toggleModal);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen fixed top-0 flex justify-center items-start pt-10 bg-gray-900 bg-opacity-60">
      <div className="flex justify-center mx-auto">
        <div className="w-[70vw] bg-orange-200 p-5 rounded-lg shadow-xl">
          <div className="flex justify-end cursor-pointer">
            <IoMdClose
              onClick={() => {
                dispatch(toggleModal(CloseModal));
              }}
              className="text-[#541f56] text-xl font-bold"
            />
          </div>

          <h1 className="text-center text-[#541f56] font-bold fontShadowInto md:text-lg xl:text-xl">
            Ou
            <span className="text-[#c65f2b] text-lg md:text-xl xl:text-2xl">
              X
            </span>
            Pay
          </h1>
          <p className="text-[#3f1940] tracking-wide mt-3 text-center">
            {alertText}
          </p>

          <div className="mt-5 text-center text-[#541f56]">
            <hr />
            <button
              onClick={() => {
                dispatch(toggleModal(CloseModal));
              }}
              className="text-center  font-semibold mt-3 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AlertModal;
