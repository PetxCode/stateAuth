import { AiOutlineClose } from "react-icons/ai";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { changeToggle, logOut } from "../../global/reduxState";
import { FaCartShopping } from "react-icons/fa6";

const Sider = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const readToggle = useSelector((state: any) => {
    return state.toggle;
  });

  console.log(cart);
  return (
    <div
      className={`transition-all duration-300 fixed z-40 
      border-r h-[100vh] flex flex-col`}
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
        <div className="text-[45px] font-bold w-full text-center ">
          <FaCartShopping />
          {cart.length}
        </div>
      </div>
      <div className="flex-1" />
      <div
        className="mb-4 px-2 border-y transition-all duration-300 py-3 hover:bg-purple-700 hover:text-white hover:cursor-pointer  "
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </div>
    </div>
  );
};

export default Sider;
