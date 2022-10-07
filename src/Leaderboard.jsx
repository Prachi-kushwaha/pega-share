import React from 'react';

const Leaderboard = () =>{
    return(
   <div className='col'>
    <div>
        <h2>Leaders</h2>
    </div>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Top 3</th>
           
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>Hangout</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Social Zone</td>
          
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Happy people</td>
          
          </tr>
        </tbody>
      </table>
      <div>
        <h2>Contributors</h2>
    </div>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Top 3</th>
           
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>jannfier</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>jackson</td>
          
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">mark</td>
          
          </tr>
        </tbody>
      </table>
      </div>
    )
}

export default Leaderboard;