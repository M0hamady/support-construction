import React from "react";

function Notify(props) {
  function handleclick() {
    document.getElementById("mas_ma").style.opacity = "0";
    // document.getElementById("container").style.opacity = "0";
    // document.getElementById("container").style.marginBottom = "-10%";
    
    }
  
  return (
    <div style={props.style} className="duration-1" id="mas_ma">
      <div className="message_container" id="container">
        <div className="message" augmented-ui="exe tl-clip br-clip">
          <div className="flex justify-between">
            {" "}
            <div className="title" augmented-ui="exe tl-clip br-clip">
              {props.title}
            </div>
            <button onClick={() => handleclick()}>
              <i className="fas fa-x p-2 text-white"></i>
            </button>
          </div>

          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

Notify.propTypes = {};

export default Notify;
