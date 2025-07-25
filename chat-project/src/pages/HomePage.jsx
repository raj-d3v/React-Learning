function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2199f2] mb-4">
          Welcome to Chat App
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl">
          Effortless, real-time messaging to connect and collaborate.
        </p>

        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712106.png"
          alt="Chat Illustration"
          className="w-64 sm:w-80 mb-6"
        />

        <button className="bg-[#2199f2] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#5b8fb6fd] transition cursor-pointer">
          Let’s Start
        </button>
      </div>
    </>
  );
}

export default HomePage;
