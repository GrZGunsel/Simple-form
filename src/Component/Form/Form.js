import React from "react";
import "./form.css";
const Form = () => {
  return (
    <div className="form">
      <h3>Student Form</h3>
      <form>
        <div className="form-control">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Confirm Password</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Gender</label>
          <div className="Gender">
            {" "}
            <input type="radio" />
            <label>Male</label>
            <input type="radio" />
            <label>Female</label>
          </div>
        </div>
        <div className="form-control">
          <label>Birth of Date </label>
          <input type="date" />
        </div>
      </form>
      <button className="btn ">Submit</button>
    </div>
  );
};

export default Form;
