import userHook from "../../hook/userHook";

const Header = () => {
  const { data }: any = userHook();

  return (
    <div>
      <div>Welcome {data?.userName}</div>
    </div>
  );
};

export default Header;
