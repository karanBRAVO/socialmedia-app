import Left_Box from "../components/Left_Box";
import Mid_Box from "../components/Mid_Box";
import Right_Box from "../components/right_Box";
import Bottom_Box from "../components/Bottom_Box";

const HOME_PAGE = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Left_Box />
        <Mid_Box />
        <Right_Box />
      </div>
      <div>
        <Bottom_Box />
      </div>
    </div>
  );
};

export default HOME_PAGE;
