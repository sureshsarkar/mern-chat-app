import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from "../sidebar/LogoutButton";
import { useAuthContext } from "../../context/AuthContext";
const SideMenu = () => {
  const { authUser } = useAuthContext();
  return (
    <div>
     <div className="container-fluid">
    <div className="row">
        <div className="col-sm-auto bg-blue sticky-top min-vh-100 ">
            <div className="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top">
                <Link to="/" className="d-block link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <i className="bi-chatd fs-2 text-light">H</i>
                </Link>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                  {!authUser?
                <li className="nav-item">
                        <Link to="signup" className="nav-link " title="Signup" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                        <i className="bi bi-plus-square fs-2 text-light"></i>
                        </Link>
                    </li>
                    :''}
                    {!authUser ? 
                    <li className="nav-item">
                        <Link to="login" className="nav-link " title="Login" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i className="bi bi-box-arrow-in-right fs-2 text-light"></i>
                        </Link>
                    </li>
                    :''}
                </ul>
                {/* <div className="dropdown">
                    <a to="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi-person-circle h2 text-light"></i>
                    </a>
                    <ul className="dropdown-menu text-small shadow text-light" aria-labelledby="dropdownUser3">
                        <li><a className="dropdown-item" to="#">New project...</a></li>
                        <li><a className="dropdown-item" to="#">Settings</a></li>
                        <li><a className="dropdown-item" to="#">Profile</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default SideMenu
