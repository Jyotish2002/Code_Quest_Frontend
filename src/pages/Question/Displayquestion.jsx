import React from "react";
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import Rightsidebar from "../../Components/Rightside/Rightside";
import Questiondetails from "./Questiondetails";
export const Displayquestion = (slidein) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein} />
      <div className="home-container-2">
      <Questiondetails/>
        <Rightsidebar />
      </div>
    </div>
  );
};
