import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import UpdateUser from './UpdateUser';


const UserList = ({employee, employees, setEmployees,setCheckCount }) => {

  const [selectedEmployee, setSelectedEmployee ] = useState(null);
  
  const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    

    const handleEdit = (id) => {
      const [employee] = employees.filter(employee => employee.id === id);
      setSelectedEmployee(employee);
      handleShow();
    }

    useEffect(() => {
        handleClose()
    }, [employees])

    const handleDelete = (id) => {
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
     }).then(result => {
        if (result.value) {
            const [employee] = employees.filter(employee => employee.id === id);
  
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: `${employee.fname}'s data has been deleted.`,
                showConfirmButton: false,
                timer: 1500,
            });
  
            setEmployees(employees.filter(employee => employee.id !== id));
        }
      });
    }

    function MyFunc(){
      var count=0;
      var checkbox = document.querySelectorAll(".check");
      for(let i=0;i<checkbox.length;i++){
        if(checkbox[i].checked===true) count++;
      }
      
      setCheckCount(count);
    }


  return (
    <>
      <td>{employee.fname}</td>
      <td>{employee.department}</td>
      <td>
        <input
          style={{ text: "center" }}
          type="checkbox"
          id="available"
          className="check"
          name="available"
          value="1"
          onClick={MyFunc}
        />
      </td>
      <td className="text-right">
        <button
          onClick={() => handleEdit(employee.id)}
          className="btn btn-outline-primary"
          data-toggle="modal"
        >
          <FaEdit /> Edit
        </button>
      </td>
      <td className="text-left">
        <button
          onClick={() => handleDelete(employee.id)}
          className="btn btn-outline-danger"
        >
          <FaTrash /> Delete
        </button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <UpdateUser
              id = {employee.id}
              setShow={setShow}
              selectedEmployee={selectedEmployee}
              setEmployees={setEmployees}
              employees={employees}
             />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
};

export default UserList;
