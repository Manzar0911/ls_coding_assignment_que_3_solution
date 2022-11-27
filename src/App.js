import React from 'react'
import NewEmployee from './components/NewEmployee'

const App = () => {
  return (
    <div>
      <NewEmployee />
    </div>
  )
}

export default App











// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import { BrowserRouter , Link , Route , Switch } from 'react-router-dom';
// import NewEmployee from './components/NewEmployee';
// import Navbar_header from './components/Navbar_header';
// import UserList from './components/UserList';
// import AddUser from './components/AddUser';
// import UpdateUser from './components/UpdateUser';
// import { employeesData } from './data/index';
// import Modal from './components/Modal';


// const App = () => {

//   const [employees, setEmployees] = useState(employeesData);
//   const [selectedEmployee, setSelectedEmployee ] = useState(null);
//   const [isAdding, setIsAdding ] = useState(false);
//   const [isEditing, setIsEditing ] = useState(false);


//   const handleEdit = (id) => {
//     const [employee] = employees.filter(employee => employee.id === id);

//     setSelectedEmployee(employee);
//     setIsEditing(true);
//   }

//   const handleDelete = (id) => {
//     Swal.fire({
//       icon: 'warning',
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, cancel!',
//    }).then(result => {
//       if (result.value) {
//           const [employee] = employees.filter(employee => employee.id === id);

//           Swal.fire({
//               icon: 'success',
//               title: 'Deleted!',
//               text: `${employee.fname}'s data has been deleted.`,
//               showConfirmButton: false,
//               timer: 1500,
//           });

//           setEmployees(employees.filter(employee => employee.id !== id));
//       }
//     });
//   }

//   return (
//     <div className='App'> 
//       {!isAdding && !isEditing && (
//         <>
          
//             <Navbar_header />
//             <NewEmployee 
//               setIsAdding={setIsAdding}
//               employees={employees}
//             />
//             < Modal 
//             setIsAdding={setIsAdding}
//             employees={employees}
//             />
//             <UserList 
//               employees={employees}
//               handleEdit={handleEdit}
//               handleDelete={handleDelete}
//               />
          
//         </>
//       )}

//       {isAdding && (
//         <AddUser 
//           employees={employees}
//           setEmployees={setEmployees}
//           setIsAdding={setIsAdding}
//           />
//       )}

//       {isEditing && (
//         <UpdateUser
//           employees={employees}
//           selectedEmployee={selectedEmployee}
//           setEmployees={setEmployees}
//           setIsEditing={setIsEditing}
//           />
//       )}
//       <Navbar_header />
//       <NewEmployee />
//       <UserList 
//         employees={employees}
//         handleEdit={handleEdit}
//         handleDelete={handleDelete}
//         />
//     </div>
//   )
// }

// export default App;
