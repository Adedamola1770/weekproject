import React from "react";
import component from "../src/assets/Component 1.svg";
import "./styles/Body.css";

const Body = () => {
  return (
    <div className="container ">
      <div className="row justify-content-between align-items-center mt-5">
        <div className="at col-7 w-50 lh-5">
          <h2 className="mt-5">Manage Your Tasks On</h2>
          <h2 className="header-2">Tasks Duty</h2>

          <p className="w-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            dolorem consectetur dignissimos iure iusto omnis assumenda saepe
            amet expedita,repellat fuga id beatae nulla eligendi dolor error
            molestiae culpa obcaecati, accusamus porro. Dignissimos
            exercitationem nobis quam!
          </p>

          <button className="btn btn1 w-50">Go To My Task</button>
        </div>
        <div className="col-4">
          <img src={component} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
