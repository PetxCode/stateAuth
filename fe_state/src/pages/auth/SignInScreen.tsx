import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { signInAccount } from "../../api/authAPI";
import { useDispatch } from "react-redux";
import { loginUser } from "../../global/reduxState";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = yup.object({
    email: yup.string().email().required("Must be filled"),
    password: yup.string().required("Must be filled"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmiteNow = handleSubmit((data: any) => {
    console.log(data);
    signInAccount(data).then((res) => {
      dispatch(loginUser(res.data));
      navigate("/");
    });
  });

  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <div className=" border rounded-md w-[500px] min-h-[200px]">
        <div className="m-4 font-[400] mb-16 text-purple-950">Login</div>
        <form className="m-3" onSubmit={handleSubmiteNow}>
          <div className="my-2">
            <input
              className="placeholder:text-purple-200 w-full h-[45px] rounded-sm border pl-2 border-purple-200"
              placeholder="email"
              {...register("email")}
            />
            {errors.email?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.email?.message}
              </div>
            )}
          </div>
          <div className="my-2">
            <input
              className="placeholder:text-purple-200 w-full h-[45px] rounded-sm border border-purple-200 pl-2"
              placeholder="password"
              {...register("password")}
            />
            {errors.password?.message && (
              <div className="text-red-700 text-[12px] text-right ">
                {errors.password?.message}
              </div>
            )}
          </div>

          <button
            className="w-full bg-purple-700 mt-8 h-[49px] rounded-sm text-white"
            type="submit"
          >
            Login
          </button>
          <div className=" text-purple-950 w-full flex justify-center text-[12px] mt-8 ">
            Don't have an Account,{" "}
            <Link to="/register">
              <span className="ml-1 font-bold ">Register here</span>
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
