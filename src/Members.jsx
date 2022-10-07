import React from 'react';
import { Link } from 'react-router-dom';
const Members= () => {
    return(
<div class="row m-5">
  <div class="col-2 m-2">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col-2 m-2">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
  <div className="col-12 m-3">
    <Link className="btn btn-primary" to="/"> Sign in</Link>
   
  </div>
</div>

    )
    
    

}
export default Members;



