import { Link } from "react-router-dom";

import { storeHooks } from "../hook/storeHooks";
import data from "../data.json";
import { useDispatch } from "react-redux";
import { addCart } from "../global/reduxState";
const HomeScreen = () => {
  const { product } = storeHooks();
  const dispatch = useDispatch();
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-2">
      {data.map((props: any, i: number) => (
        <div className="min-w-[200px]  min-h-[300px] rounded-md flex flex-col border">
          <Link to={`/detail/${props.id}`}>
            <img
              src={props.image}
              className="object-cover w-full h-[300px] rounded-md shadow-md "
            />
          </Link>

          <div className="mt-8 px-3">
            <div className="flex justify-between items-center mb-4">
              <div className="font-bold text-[20px]">{props.title}</div>
              <div>
                <div className="flex items-center relative w-[120px] ">
                  <div className=" absolute">{"🌑".repeat(5)}</div>
                  <div className=" absolute">
                    {"☀️".repeat(Math.round(props.rating.rate))}
                  </div>
                  <div />
                </div>
                {/* <div className="">2</div> */}
              </div>
            </div>
            <div>{props.description}</div>
            <div className="flex justify-between mt-8  mb-3 items-center">
              <div className="font-bold text-[28px] ">
                ₦{(props.price * 700).toLocaleString("en-US")}.00
              </div>
              <div
                className="bg-purple-500 text-white px-4 py-2 rounded-sm cursor-pointer "
                onClick={() => {
                  dispatch(addCart(props));
                }}
              >
                Add to Cart
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
