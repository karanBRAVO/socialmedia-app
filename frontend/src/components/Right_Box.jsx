import Net_Card from "./NetCard";

const Right_Box_Width = 25;
const Right_Box_Heigth = 85;

const Right_Box = () => {
  return (
    <>
      <div
        style={{
          background: "green",
          width: `${Right_Box_Width}vw`,
          height: `${Right_Box_Heigth}vh`,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <div style={{ background: "lightgreen" }}>
          <h1
            style={{
              fontSize: "1.3rem",
              fontWeight: "900",
              padding: "2px",
              margin: "5px",
            }}
          >
            My Network
          </h1>
        </div>

        <div>
          <Net_Card
            Title={"User 1"}
            Desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit"}
          />
          <Net_Card
            Title={"User 2"}
            Desc={
              "adipisicing elit. Voluptatum quisquam fugit. Lorem ipsum dolor sit amet consectetur"
            }
          />
          <Net_Card
            Title={"User 3"}
            Desc={
              "Voluptatum quisquam fugit asperiores illum in provident maiores, iure nihil amet consequuntur"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Right_Box;
