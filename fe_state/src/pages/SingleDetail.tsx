import { useParams } from "react-router-dom";
import pix from "../assets/pp.jpg";
import { storeHooks } from "../hook/storeHooks";
import data from "../data.json";

const SingleDetail = () => {
  const { productID } = useParams();
  const { product } = storeHooks();

  const singleProduct = data?.find((el: any) => {
    return el.id === parseInt(productID!);
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className=" col-span-1 md:col-span-2  ">
          <img
            className="w-full h-[500px] object-cover shadow-md rounded-md"
            src={singleProduct?.image}
          />
        </div>
        <div className="col-span-1 md:col-span-3  ml-4 flex flex-col">
          <div className="mb-6 text-[30px] font-bold ">
            {singleProduct?.title}
          </div>
          <div>{singleProduct?.description}</div>

          <div className="mt-5 text-[12px] flex">
            <div className="mr-5">
              <strong className="font-[600]">
                {singleProduct?.rating.count}
              </strong>{" "}
              Likes
            </div>
            <div className="mr-5">
              <strong className="font-[600]">3</strong> Review
            </div>
            <div className="flex-1" />
            <div className="mr-5">
              <strong className="font-[600]">
                {singleProduct?.rating.rate}
              </strong>{" "}
              star rating
            </div>
          </div>
          <div className="flex-1" />
          <div className="mt-10 flex justify-between">
            <div className="flex ">
              <div className="py-2 px-8 rounded-sm bg-purple-600 text-white ">
                Like
              </div>
              <div className=" ml-4 py-2 px-8 rounded-sm bg-black text-white ">
                Add to Cart
              </div>
            </div>

            <div className="text-[30px] font-bold ">
              ₦{singleProduct?.price! * 700}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-8  font-bold ">Review</div>
      <div>
        <div className="w-[250px] rounded-md border m-2 p-2 ">
          <div className="flex">
            <img className="w-10 h-10 rounded-full border-red-400 border mr-2 " />

            <div className="text-[12px] font-bold">name</div>
          </div>

          <div className="mt-2 text-[13px] text-[gray] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nobis perferendis repellat autem, atque provident eos exercitationem
          </div>
          <div className="text-[12px] mt-5">date</div>
        </div>
      </div>
    </div>
  );
};

export default SingleDetail;
