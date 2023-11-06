import React from "react";
import "../styles/Alltask.css";
import plus from "../assets/fluent_add-24-filled.svg";
import charity from "../assets/clarity_note-edit-line.svg";
import deletess from "../assets/fluent_delete-24-regular.svg";
const Alltask = () => {
  return (
    <div className="">
      <div className="container">
        <div className="d-flex justify-content-between  mt-5">
          <h2>My Tasks</h2>
          <div className="d-flex align-items-center  gap-3 ">
            <img src={plus} alt="plus" />
            <h3>Add New Task</h3>
          </div>
        </div>
      </div>

      <div className="container border section-div mt-5 pb-4">
        <div className="d-flex justify-content-between ">
          <h3 className="text-danger  ">Urgent</h3>
          <div className="d-flex align-items-center  gap-3">
            <button className="Edit-btn">
              <img src={charity} alt="" />
              Edit
            </button>
            <button className="Delete-btn">
              <img src={deletess} alt="" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <div className="container">
          <h2>Fintech Website Update</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            recusandae facere, maxime ullam doloremque dolore nostrum autem
            exercitationem blanditiis est atque, quisquam pariatur a aut
            veritatis numquam, fugit at officiis temporibus. Saepe voluptas
            doloremque dicta fugit consectetur laudantium quisquam sequi commodi
            ea provident, a, minima, placeat neque. Perspiciatis, id hic.
          </p>
        </div>

        
      </div>
    
      <div className="container border section-div mt-5 pb-4">
        <div className="d-flex justify-content-between ">
          <h3 className="impo">Important</h3>
          <div className="d-flex align-items-center  gap-3">
            <button className="Edit-btn">
              <img src={charity} alt="" />
              Edit
            </button>
            <button className="Delete-btn">
              <img src={deletess} alt="" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <div className="container">
          <h2>Agro Website Update</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            recusandae facere, maxime ullam doloremque dolore nostrum autem
            exercitationem blanditiis est atque, quisquam pariatur a aut
            veritatis numquam, fugit at officiis temporibus. Saepe voluptas
            doloremque dicta fugit consectetur laudantium quisquam sequi commodi
            ea provident, a, minima, placeat neque. Perspiciatis, id hic.
          </p>
        </div>

        
      </div>
      
      
      <div className="container border section-div mt-5 pb-4">
        <div className="d-flex justify-content-between ">
          <h3 className="text-danger  ">Urgent</h3>
          <div className="d-flex align-items-center  gap-3">
            <button className="Edit-btn">
              <img src={charity} alt="" />
              Edit
            </button>
            <button className="Delete-btn">
              <img src={deletess} alt="" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <div className="container">
          <h2>Fintech Website Update</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            recusandae facere, maxime ullam doloremque dolore nostrum autem
            exercitationem blanditiis est atque, quisquam pariatur a aut
            veritatis numquam, fugit at officiis temporibus. Saepe voluptas
            doloremque dicta fugit consectetur laudantium quisquam sequi commodi
            ea provident, a, minima, placeat neque. Perspiciatis, id hic.
          </p>
        </div>

        
      </div>

      
      <div className="container border section-div mt-5 pb-4">
        <div className="d-flex justify-content-between ">
          <h3 className="impo">Important</h3>
          <div className="d-flex align-items-center  gap-3">
            <button className="Edit-btn">
              <img src={charity} alt="" />
              Edit
            </button>
            <button className="Delete-btn">
              <img src={deletess} alt="" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <div className="container">
          <h2>Agro Website Update</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            recusandae facere, maxime ullam doloremque dolore nostrum autem
            exercitationem blanditiis est atque, quisquam pariatur a aut
            veritatis numquam, fugit at officiis temporibus. Saepe voluptas
            doloremque dicta fugit consectetur laudantium quisquam sequi commodi
            ea provident, a, minima, placeat neque. Perspiciatis, id hic.
          </p>
        </div>

        
      </div>

      <div className="text-center mt-5">
          <a href="#" className="link">
            Back To Top
          </a>
        </div>
    </div>
  );
};

export default Alltask;
