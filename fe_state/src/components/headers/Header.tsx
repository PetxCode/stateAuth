import userHook from "../../hook/userHook";

const Header = () => {
  const { data }: any = userHook();

  return (
    <div className="w-[90%] my-6 flex justify-end">
      <div className="">Welcome back {data?.userName}</div>
    </div>
  );
};

export default Header;
