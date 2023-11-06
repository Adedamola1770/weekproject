import React from "react";
import back from "../assets/eva_arrow-ios-back-fill.svg";
import "../styles/Newtask.css";

const Newtask = () => {
  return (
    <div>
      <div className="container col-sm-12">
        <div className="d-flex align-items-center mt-5">
          <img src={back} alt="" className="" />
          <h2>New Task</h2>
        </div>

        <div className="container">
          <div className="textarea-container m-5 h-25">
            <h5 className="textarea-title fs-4 task"> Task Title</h5>
            <input
              type="text"
              className="w-100 p-4 border-1"
              placeholder="E.g Project Defense, Assignment ..."
            />
          </div>

          <div className="textarea-container m-5 h-75">
            <h5 className="textarea-title fs-4"> Description</h5>
            <input
              type="text"
              className="w-100 p-4 border-1 desc"
              placeholder="Briefly describe your task ..."
            />
          </div>
          <div className="textarea-container m-5 h-25">
            <h5 className="textarea-title fs-4"> Tags</h5>
            <div className="di">
              <select id="cars" name="cars" className="w-100 select p-3">
                <option value="volvo">Urgent</option>
                <option value="saab">Important</option>
              </select>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <button className='btn-1 "btn btn1 w-75'>Done</button>
        </div>

        <div className="text-center mt-5">
          <a href="#" className="link">
            Back To Top
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newtask;
