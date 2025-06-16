function InlineStyleButton() {
  const styles = {
    fontFamily: "monospace",
    fontSize: "20px",
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    margin: "15px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  };
  return (
    <div>
      <button style={styles}>Click</button>
    </div>
  );
}

export default InlineStyleButton;
