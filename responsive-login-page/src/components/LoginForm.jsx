import google from "../assets/svg/google.svg";
import facebook from "../assets/svg/facebook.svg";
import Input from "./Input";
import SocialButton from "./SocialButton";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
    navigate("/dashboard");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5 flex flex-col">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Example@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter a password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <a
          href="#"
          className=" text-[12px] text-end mt-2 text-[#1E4AE9] font-[400px]"
        >
          Forget Password?
        </a>

        <button className="bg-[#162D3A] text-white p-[10px] rounded-[12px] mt-5 cursor-pointer">
          Sign in
        </button>

        <div className="flex items-center justify-center my-5">
          <div className="flex-grow border-t border-[#CFDFE2]"></div>
          <span className="mx-4 font-medium text-[#294957] ">Or</span>
          <div className="flex-grow border-t border-[#CFDFE2] "></div>
        </div>

        <div className="flex flex-col">
          <SocialButton icon={google} text="Sign in with Google" />
          <SocialButton icon={facebook} text="Sign in with Facebook" />

          <p className="flex gap-2 justify-center mt-2 mb-0">
            Don't you have an account?
            <a href="#" className="text-[#1E4AE9] cursor-pointer">
              Sign up
            </a>
          </p>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
