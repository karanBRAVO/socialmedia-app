import Navigation from "./navigation";
import Logo from "../../src/brand/vite.svg";

const Left_Box_Width = 25;
const Left_Box_Heigth = 85;

const Left_Box = ({ tclasses }) => {
  return (
    <div className={tclasses}>
      <div
        style={{
          background: "red",
          width: `${Left_Box_Width}vw`,
          height: `${Left_Box_Heigth}vh`,
        }}
      >
        <div>
          <div>
            <img
              src={Logo}
              alt="Logo Image"
              className="w-[50px] h-auto p-1 m-1"
            />
          </div>
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Left_Box;
