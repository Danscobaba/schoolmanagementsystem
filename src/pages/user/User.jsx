import React from 'react'
import Master from '../../layout/master/Master'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'
import './user.scss'
const User = () => {
  return (
    <Master>
      <div className="head">
      <h5 className="text-white">
            
           <i className="fas fa-user"></i> All Users
          </h5>
      </div>
      <div className="container card px-3 py-3">
      <div className="create">
            <div>
                
                <Link to='/user/add'><button  className="btn btn-outline-secondary btn-sm"><i className="fas fa-plus-circle text-blue-600"></i> Add new user</button></Link>


            </div>
            {/* <select className='select' name="" id="">
                <option value="">Select Class</option>
            </select> */}
        </div>
        <div className="ddetail mb-3">
         
          
          <h6>Export as:</h6>
          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-outline-primary">Excel</button>
            <button className="btn btn-sm btn-outline-info">CSV</button>
            <button className="btn btn-sm btn-outline-danger">PDF</button>
          </div>
        </div>
        <div className="table-responsive">
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>ffghhjj</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Master>
  )
}

export default User