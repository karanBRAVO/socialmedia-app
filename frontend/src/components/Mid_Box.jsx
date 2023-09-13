import Card from "./Card";

const Mid_Box_Width = 50;
const Mid_Box_Heigth = 85;

const Mid_Box = () => {
  return (
    <>
      <div
        style={{
          background: "blue",
          width: `${Mid_Box_Width}vw`,
          height: `${Mid_Box_Heigth}vh`,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            background: "violet",
            position: "absolute",
            top: 0,
            width: `${Mid_Box_Width}vw`,
          }}
        >
          <h1 style={{ fontSize: "2rem", padding: "5px" }}>Posts</h1>
        </div>
        <div
          style={{
            background: "pink",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "70px",
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Mid_Box;
