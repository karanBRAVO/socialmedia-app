import { NavLink } from "react-router-dom";
import Navigation_Links from "./Navigation_Links";
import Button from "./Button";

// Icons
import { AiFillHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsFillChatFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const Navigation = () => {
  return (
    <>
      <div>
        <div style={{ margin: "3px" }}>
          <div className="bg-sky-400 m-1 p-1 flex flex-col items-center justify-center">
            <div>
              <NavLink to="/signup">
                <Button imgSrc={""} text={"Login"} />
              </NavLink>
            </div>
            <div>
              <NavLink to="/login">
                <Button imgSrc={""} text={"Sign Up"} />
              </NavLink>
            </div>
          </div>

          <div>
            <Navigation_Links
              ICON_NAME={AiFillHome}
              END_POINT={"/"}
              TEXT={"Home"}
            />
            <Navigation_Links
              ICON_NAME={BsFillChatFill}
              END_POINT={"/message"}
              TEXT={"Messaging"}
            />
            <Navigation_Links
              ICON_NAME={BiUser}
              END_POINT={"/profile"}
              TEXT={"Profile"}
            />
            <Navigation_Links
              ICON_NAME={FiSettings}
              END_POINT={"/settings"}
              TEXT={"Settings"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
