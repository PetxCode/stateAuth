import userHook from "../hook/userHook";

const HomeScreen = () => {
  const { data }: any = userHook();

  return <div>HomeScreen {data?.userName}</div>;
};

export default HomeScreen;
