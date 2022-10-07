import React from 'react';
import { Link } from 'react-router-dom';


const Home = () =>{
    return(
    <>
       
 <div className="container">
  
  <div className="row">
    <div className="col my-5">
    <div className="card" >
  <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="200px"/>
  
  <div className="card-body">
  <h5 className="card-title"><Link to="/profile">Hangout</Link></h5>
    <Link to="/Chart" className="btn btn-dark">Members</Link>
    <Link to="/Chart2" className="btn btn-primary m-3 p-2">Contributors</Link>
   
  </div>
</div>
    </div>
    <div className="col my-5">
    <div className="card" >
  <img src="https://picsum.photos/200/302" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body">
    <h5 className="card-title"><Link to="/profile">Social Zone</Link></h5>
    <Link to="/Chart" className="btn btn-dark">Members</Link>
    <Link to="/Chart2" className="btn btn-primary m-3 p-2">Contributors</Link>
  </div>
</div>
</div>
   <div className="col my-5">
    <div className="card" >
  <img src="https://picsum.photos/200/303" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body ">
  <h5 className="card-title"><Link to="/profile">Happy people</Link></h5>
  
    <Link to="/Chart" className="btn btn-dark">Members</Link>
    <Link to="/Chart2" className="btn btn-primary m-3 p-2">Contributors</Link>
   
  </div>
</div>
    </div>
  </div>
</div>
<div className="container">
  
  <div className="row">
    <div className="col my-5">
    <div className="card" >
  <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body">
  <h5 className="card-title"><Link to="/profile">Hangout</Link></h5>
    <Link to="/Chart" className="btn btn-dark">Members</Link>
    <Link to="/Chart2" className="btn btn-primary m-3 p-2">Contributors</Link>
   
  </div>
</div>
    </div>
    <div className="col my-5">
    <div className="card" >
  <img src="https://picsum.photos/200/302" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body">
  <h5 className="card-title"><Link to="/profile">Social Zone</Link></h5>
    <Link to="/Chart" className="btn btn-dark">Members</Link>
    <Link to="/Chart2" className="btn btn-primary m-3 p-2">Contributors</Link>
  </div>
</div>
</div>
   <div className="col my-5">
    <div className="card" >
  <img src="https://picsum.photos/200/303" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body ">
  <h5 className="card-title"><Link to="/profile">Happy People</Link></h5>
  
    <Link to="/Chart" className="btn btn-dark">Members</Link>
    <Link to="/Chart2" className="btn btn-primary m-3 p-2">Contributors</Link>
   
  </div>
</div>
    </div>
  </div>
</div>

    </>
    );
}
export default Home;