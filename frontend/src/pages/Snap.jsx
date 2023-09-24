import Video from "../components/Video";
import Left_Box from "../components/Left_Box";
import { useState } from "react";

const Snap = () => {
  const [hideStatus, setHideStatus] = useState("hidden");

  const changeNavigationShowStatus = () => {
    if (hideStatus == "hidden") {
      setHideStatus("block");
    } else {
      setHideStatus("hidden");
    }
  };

  return (
    <>
      <div
        className="absolute top-1 left-1 bg-black text-white p-3 rounded-xl cursor-pointer z-30"
        onClick={changeNavigationShowStatus}
      >
        {hideStatus == "hidden" ? <span>Show</span> : <span>Hide</span>}
      </div>
      <Left_Box
        tclasses={`absolute left-[10px] top-[50px] z-20 ${hideStatus}`}
      />
      <Video width={"100%"} height={"100vh"} />
    </>
  );
};

export default Snap;
