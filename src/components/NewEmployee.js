import React, { useEffect, useState } from 'react';
import Navbar_header from './Navbar_header';
import { Modal, Button, } from 'react-bootstrap';
import { employeesData } from '../data';
import UserList from './UserList';
import Pagination from './Pagination';
import AddUser from './AddUser'


const NewEmployee = () => {

  const [employees, setEmployees] = useState(employeesData);
  const len = employees.length;
  const [checkCount, setCheckCount] = useState(0);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(()=> {
    setEmployees(JSON.parse(localStorage.getItem('employees')))
},[])

useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
})

  const [currentPage, setCurrentPage ] = useState(1);
  const [ employeesPerPage ] = useState(5);

  const indexOfLastEmployee = currentPage * employeesPerPage ;
  const indexOfFirstEmployee =indexOfLastEmployee -employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPagesNum = Math.ceil(employees.length / employeesPerPage);




  return (
    <>
      <Navbar_header />

      <div className='row'>
      <div className='col-6'>
      <div className="card mx-sm-4 my-sm-4 mx-md-5 my-md-6">
        <div className="card-body">
          <h5 className="card-title text-secondary">
            Available: <span className="text-dark fw-bold fs-3">{ checkCount }</span>
          </h5>
          <h5 className="card-title text-secondary">
            Total: <span className="text-dark fw-bold fs-3">{len}</span>
          </h5>
          <Button onClick={handleShow} className="btn btn-primary" data-toggle="modal"><span className='fw-bold m-1'>+</span>Add Employee</Button>
        </div>
      </div>
      </div>

      <div className='col-6'>
      <div className='mx-sm-4 my-sm-4 mx-md-5 my-md-6'>
      <table className='table table-hover table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Available</th>
            <th colSpan={2} className="text-center">view Details</th>
          </tr>
        </thead>
        <tbody id='myTable'>
          {employees.length > 0 ? (
            currentEmployees.map((employee) => (
              <tr key={employee.id}>
                <UserList 
                setCheckCount={setCheckCount}
                employee={employee}
                employees={employees}
                setEmployees={setEmployees}
                />
              </tr>
            ))
          ):(
            <tr>
              <td colSpan={5}>No Employees</td>
            </tr>
          )}
          
        </tbody>
      </table>
    </div>
    <Pagination 
      pages = {totalPagesNum}
      setCurrentPage={setCurrentPage}
      currentEmployees={currentEmployees}
      employees={employees}/>
      </div>
      </div>

    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddUser 
            employees={employees}
            setEmployees={setEmployees}
            setShow={setShow}
            />
        </Modal.Body>
    </Modal>
    </>
  )
}

export default NewEmployee;
