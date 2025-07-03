function SocialButton(props) {
  return (
    <>
      <button className="flex justify-center gap-2 p-4 mb-3 rounded-[12px] text-[#313957] bg-[#F3F9FA] cursor-pointer">
        <img className="w-5 h-5" src={props.icon} alt="google" />
        {props.text}
      </button>
    </>
  );
}

export default SocialButton;
