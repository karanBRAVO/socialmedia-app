import { NavLink } from "react-router-dom";

const Navigation_Links = ({ ICON_NAME, END_POINT, TEXT }) => {
  return (
    <>
      <NavLink to={END_POINT}>
        <span
          style={{
            background: "orange",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            padding: "5px",
            margin: "3px"
          }}
        >
          <ICON_NAME size={"50px"} />
          <h1 style={{margin: "5px", fontSize: "1.6rem", textTransform: "capitalize", padding: "3px"}}>{TEXT}</h1>
        </span>
      </NavLink>
    </>
  );
};

export default Navigation_Links;
