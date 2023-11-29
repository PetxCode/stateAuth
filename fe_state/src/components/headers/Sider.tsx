import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle } from "../../global/reduxState";

const Sider = () => {
  const dispatch = useDispatch();
  const readToggle = useSelector((state: any) => {
    return state.toggle;
  });

  return (
    <div
      className={`transition-all duration-300 fixed z-40 
      border-r h-[100vh]`}
      style={{
        width: `${readToggle ? "200px" : "70px"}`,
      }}
    >
      <div className="m-3">
        {readToggle ? (
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(changeToggle(false));
            }}
          >
            <FaEnvelopeOpenText size={35} />
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(changeToggle(true));
            }}
          >
            <AiOutlineClose size={35} />
          </div>
        )}
      </div>
      <div>
        <div className="text-[45px] font-bold w-full text-center ">Logo</div>
      </div>
    </div>
  );
};

export default Sider;
