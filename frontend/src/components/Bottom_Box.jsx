import Button from "./Button";

const Bottom_Box_Heigth = 15;

const Bottom_Box = () => {
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
          style={{padding: "5px", border: "2px solid black", borderRadius: "3px", margin: "0 5px"}}
        />
        <Button imgSrc="" text="Snap" />
        <Button imgSrc="" text="Call" />
        <Button imgSrc="" text="Stream" />
      </div>
    </>
  );
};

export default Bottom_Box;
