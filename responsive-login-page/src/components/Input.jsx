function Input(props) {
  return (
    <>
      <label className="mb-1 text-[14px]">{props.label}</label>
      <input
        className="border border-[#D4D7E3] rounded-[12px] mb-5 p-2 placeholder-[#8897AD] bg-[#f7fbff]"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default Input;
