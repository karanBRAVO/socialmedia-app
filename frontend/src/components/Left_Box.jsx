import Navigation from "./navigation";
import Logo from "../../public/vite.svg";

const Left_Box_Width = 25;
const Left_Box_Heigth = 85;

const Left_Box = () => {
  return (
    <>
      <div
        style={{
          background: "red",
          width: `${Left_Box_Width}vw`,
          height: `${Left_Box_Heigth}vh`,
        }}
      >
        <div>
          <div>
            <img src={Logo} alt="Logo Image" style={{width: "50px", height: "auto", padding: "5px", margin: "5px"}} />
          </div>
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default Left_Box;
