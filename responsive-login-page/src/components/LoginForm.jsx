import google from "../assets/svg/google.svg";
import facebook from "../assets/svg/facebook.svg";

function LoginForm() {
  return (
    <>
      <form className="mt-5 flex flex-col">
        <label className="mb-1 text-[14px]">Email</label>
        <input
          className="border border-[#D4D7E3] rounded-[12px] mb-5 p-2 placeholder-[#8897AD] bg-[#f7fbff]"
          type="email"
          name="email"
          placeholder="Example@email.com"
        />
        <label className="mb-1 text-[14px]">Password</label>
        <input
          className="border border-[#D4D7E3] rounded-[12px]  p-2 placeholder-[#8897AD] bg-[#f7fbff]"
          type="password"
          name="password"
          placeholder="At least 8 characters"
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

        <div class="flex items-center justify-center my-5">
          <div class="flex-grow border-t border-[#CFDFE2]"></div>
          <span class="mx-4 font-medium text-[#294957] ">Or</span>
          <div class="flex-grow border-t border-[#CFDFE2] "></div>
        </div>
        <div className="flex flex-col">
          <button className="flex justify-center gap-2 p-4 mb-4 rounded-[12px] text-[#313957] bg-[#F3F9FA] cursor-pointer">
            <img className="w-5 h-5" src={google} alt="google" />
            Sign in with Google
          </button>
          <button className="flex justify-center gap-2 p-4 mb-5 rounded-[12px] text-[#313957] bg-[#F3F9FA] cursor-pointer">
            <img className="w-5 h-5" src={facebook} alt="google" />
            Sign in with Facebook
          </button>

          <p className="flex gap-2 justify-center m-5">
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
