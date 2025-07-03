import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import mainBanner from "../assets/img/mainBanner.jpg";

const Login = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row h-auto lg:h-screen">
      {/* Left Side – Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 sm:p-10 bg-white">
        <div className="max-w-[400px] mx-auto pt-5">
          <h1 className="text-[30px] font-medium pb-4 text-[#0C1421]">
            Welcome Back 👋
          </h1>
          <p className="text-[#313957] text-[15px] mb-6 leading-snug">
            Today is a new day. It's your day. You shape it. Sign in to start
            managing your projects.
          </p>
          <LoginForm />
        </div>

        <div className="mt-8">
          <Footer />
        </div>
      </div>

      {/* Right Side – Image Section */}
      <div className="sm:w-full lg:w-[700px] lg:ml-[20px] flex justify-center items-center mt-6 lg:mt-0">
        <img
          src={mainBanner}
          alt="main-banner"
          className="w-[90%] max-w-[500px] h-[300px] sm:h-[400px] md:h-[500px] lg:min-w-5/5 lg:h-[650px] object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Login;
