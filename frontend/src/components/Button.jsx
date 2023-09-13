function Button ({ imgSrc, text }) {
  return (
    <>
      <button
        style={{
          background: "black",
          margin: "0 5px",
          border: "2px solid black",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <div style={{ padding: "0 1px" }}>
          <img src={imgSrc} alt="Btn-Image" />
        </div>
        <div style={{ padding: "0 1px" }}>
          <span style={{ color: "white" }}>{text}</span>
        </div>
      </button>
    </>
  );
};

export default Button;
