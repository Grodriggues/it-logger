import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.js";

function EditLogModal() {
  const [msg, setMsg] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (msg === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="msg"
              value={msg}
              onChange={e => setMsg(e.target.value)}
            />
            <label htmlFor="msg" className="active">
              Log message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technichian
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Jane DOw">Jane doe</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="waves-effect waves-blue btn-small"
        >
          Enter
        </a>
      </div>
    </div>
  );
}

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default EditLogModal;
