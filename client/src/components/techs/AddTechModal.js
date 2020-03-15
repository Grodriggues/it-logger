import React, { useState,PropTypes } from "react";
import M from "materialize-css/dist/js/materialize.js";

function AddTechModal() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
 

  const onSubmit = () => {
    if (firstname === '' || lastname === '') {
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      

      M.toast({ html: `${firstname} ${lastname} was added as a tech` });

      // Clear Fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstname}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastname}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  //addTech: PropTypes.func.isRequired
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default AddTechModal;
