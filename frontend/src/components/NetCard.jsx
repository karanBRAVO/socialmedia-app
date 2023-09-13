const Net_Card = ({ Pic, Title, Desc }) => {
  return (
    <>
      <div
        style={{
          margin: "5px",
          padding: "5px",
          background: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            border: "2px solid black",
          }}
        >
          <img
            src={Pic}
            alt="user"
            style={{ width: "100px", height: "100px" }}
          />
        </div>

        <div
          style={{
            background: "crimson",
            padding: "1px",
            margin: "1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <h2 style={{fontSize: "1.2em", fontWeight: "800"}}>{Title}</h2>
          <h4 style={{fontSize: "0.9em", fontWeight: "400"}}>{String(Desc).slice(0, 50)} ...</h4>
        </div>
      </div>
    </>
  );
};

export default Net_Card;
