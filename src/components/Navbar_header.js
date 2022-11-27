import React from "react";

import Logo from "../images/ls-logo.png";

const Navbar_header = () => {
  const tableSearch = () => {
    let filter = document.getElementById("myInput").value.toUpperCase();

    let myTable = document.getElementById("myTable");

    let tr = myTable.getElementsByTagName("tr");
    console.log(tr);
    for (var i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        let textValue = td.textContent || td.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light mt-2">
        <div className="container-fluid justify-content-between">
          <div>
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "40px", height: "40px", margin: "1px 10px" }}
            />
          </a>
          </div>
          <div>
          <button
            className="navbar-toggler bg-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                id="myInput"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={tableSearch}
              />
            </form>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar_header;
