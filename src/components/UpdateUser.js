import React, { useState } from 'react';
import Swal from 'sweetalert2';

const UpdateUser = ({ setShow , employees, setEmployees, selectedEmployee }) => {

  const id = selectedEmployee.id;

  const[ fname, setFname ] = useState(selectedEmployee.fname);
  const [age, setAge] = useState(selectedEmployee.age);
  const [gender, setGender ] = useState(selectedEmployee.gender);
  const [designation, setDesignation] = useState(selectedEmployee.designation);
  const [department, setDepartment] = useState(selectedEmployee.department);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleClose = () => setShow(false);

  const handleUpdate = e => {
    e.preventDefault();

    if (!fname || !age || !designation || !department || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }


    const employee = {
      id,
      fname,
      age,
      designation,
      department,
      date,
    };

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees[i].fname = fname;
            employees[i].age = age;
            employees[i].designation = designation;
            employees[i].department = department;
            employees[i].date = date;
            break;
        }
    }
    setEmployees(employees);
    handleClose();

    Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: `${employee.fname}'s data has been updated.`,
        showConfirmButton: false,
        timer: 1500
    });
};





  return (
    <>
      <form onSubmit={handleUpdate}>
        <label htmlFor="fname">Name</label>
        <input
          id="fname"
          type="text"
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <label htmlFor="gender">Gender</label>
        <select name="gender" 
        value={ gender } 
        onChange={(e) => setGender(e.target.value)}
        >
          <option value= ""  disabled selected>Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="designation">Designation</label>
        <input
          id="designation"
          type="text"
          name="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <label htmlFor="department">Department</label>
        <input
          id="department"
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div className="text-right" style={{ marginTop: "30px" }}>
          <input type="submit" className="accent-button" value="Save" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={handleClose}
          />
        </div>
      </form>
    </>
  )
}

export default UpdateUser;


