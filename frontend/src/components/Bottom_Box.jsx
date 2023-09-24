import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Bottom_Box_Heigth = 15;

const Bottom_Box = () => {
  const navigate = useNavigate();
  
  function moveToSnapPage() {
    navigate("/snap");
  }

  return (
    <>
      <div
        style={{
          background: "yellow",
          width: "100vw",
          height: `${Bottom_Box_Heigth}vh`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="search"
          name="search"
          id="Search"
          placeholder="Search to connect with more people..."
          autoComplete="off"
          style={{
            padding: "5px",
            border: "2px solid black",
            borderRadius: "3px",
            margin: "0 5px",
          }}
        />
        <Button imgSrc="" text="Snap" handleClick={moveToSnapPage} />
        <Button imgSrc="" text="Call" />
        <Button imgSrc="" text="Stream" />
      </div>
    </>
  );
};

export default Bottom_Box;
