import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="maindiv block">
      <div className="subdiv1">
        <div className="subdiv">
          <h3>make an appointment</h3>
          <hr style={{ width: "100px", height: "2px", background: "#fff" }} />
        </div>
        <div className="font">
          <p>a specialist will contact you shortly</p>
        </div>
      </div>
      <div className="form1">
        <form className="form" action="#">
          <input
            required
            type="text"
            name="fname"
            id="fname"
            placeholder="your name*"
          />
          <input required type="text" placeholder="your email*" />

          <select name="service" id="service">
            <option value="select service">select service</option>
          </select>
          <input required type="date" name="date" id="date" />

          <div></div>
          <div className="button">
            <input type="button" value="book appointment" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;