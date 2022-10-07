import React from 'react';
const Navbar = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pega Share</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          sign up
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/members">Members</a></li>
            <li><a class="dropdown-item" href="/leaderlogin">Leaders</a></li>
            <li><a class="dropdown-item" href="/contributors">Contributors</a></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/leaderboard">Leaderboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Charts
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/chart">Members</a></li>
            <li><a class="dropdown-item" href="/chart2">Contributors</a></li>
            
          </ul>
        </li>
        </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;


