import React,{ useState, useRef, useEffect } from 'react';
import Swal from "sweetalert2";

const AddUser = ({ employees , setShow ,setEmployees }) => {


  const [fname, setFname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState("");

  const handleClose = () => setShow(false);


  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!fname || !age || !designation || !department || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    const id = employees.length + 1;
    const newEmployee = {
      id,
      fname,
      age,
      designation,
      department,
      date,
    };
    // employees.push(newEmployee);
    setEmployees([newEmployee,...employees]);
    handleClose();
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${fname}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <>
      <form onSubmit={handleAdd} >
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="fname">Name</label>
            <input
              id="fname"
              type="text"
              placeholder="Enter"
              ref={textInput}
              name="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              placeholder="Enter"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <label htmlFor="designation">Designation</label>
            <input
              id="designation"
              type="text"
              placeholder="Enter"
              name="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="department">Department</label>
            <input
              id="department"
              type="text"
              placeholder="Enter"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="text-right mt-4" >
          <input
            style={{ marginRight: "12px", backgroundColor: "red", }}
            className="btn btn-outline-danger"
            type="button"
            value="Cancel"
            onClick={handleClose}
          />
          <input type="submit" className="accent-button" value="Save" />
        </div>
      </form>
    </>
  )
}

export default AddUser;
