import React from 'react'
import Master from '../../layout/master/Master'
import './mark.scss'
import Table from 'react-bootstrap/Table';
const Mark = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const foo = params.get('new');
  return (
    <Master>
       <div className="top-bar">
          <div className="h-full w-full d-flex font-extrabold">
            <h5>{foo ? 'Add New Grade' : "All Grade"}</h5>
          </div>
        </div>
        {foo ? <Addmark /> : <Main />}
      
    </Master>
  )
}

export default Mark

function Main() {
  return (

    <>
      <div className="card px-4 py-3">
        <div className="flex justify-between mb-3 gap-1">
          <a href="/mark?new=true" className="btn btn-outline-info btn-sm"><i className="fas fa-plus"></i> Add a mark</a>
          <select name="" id="" className="w-46 border rounded-md p-2">
            <option value="">Select Class</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </div>
        <div className="container">
          <select name="" id="" className="w-48 mb-3 border rounded-md p-2">
            <option value="">Select Section</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
          <div className="table-responsive">
            <Table striped bordered responsive="md" hover size="md">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Roll</th>
                  <th>Email</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>1</td>
                  <td>Jacob@gmail.com</td>
                  <td className=''><a href="/mark/view" className="mr-1 flex-nowrap mb-1 btn btn-outline-info btn-sm">First Term</a>
                    <a href="/mark/view" className="mr-1 mb-1 btn btn-outline-info btn-sm">Second Term</a>
                  </td>

                </tr>
                <tr>
                  <td>2</td>
                  <td>John</td>
                  <td>Otto</td>
                  <td>1</td>
                  <td>John@gmail.com</td>
                  <td className=''><a href="/mark/view" className="mr-1 mb-1 btn btn-outline-info btn-sm">First Term</a>
                    <a href="/mark/view" className="mr-1 mb-1 btn btn-outline-info btn-sm">Second Term</a>
                  </td>

                </tr>

              </tbody>
            </Table>
          </div>
        </div>

      </div>
    </>
  );
}

function Addmark() {
  return (
    <>
      <div className="card px-4 py-3">
        <div className="row mb-3">
          <div className="col-12 col-md-3 col-sm-12">
            <label htmlFor="">Section</label>
            <select name="" id="" className=" form-control mb-3 border rounded-md p-2">
              <option value="">Select Section</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>
          <div className="col-12 col-md-3 col-sm-12">
            <label htmlFor="">Exam</label>
            <select name="" id="" className="form-control mb-3 border rounded-md p-2">
              <option value="">Select Exam</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>
          <div className="col-12 col-md-3 col-sm-12">
            <label htmlFor="">Class</label>
            <select name="" id="" className="form-control mb-3 border rounded-md p-2">
              <option value="">Select Class</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>
          <div className="col-12 col-md-3 col-sm-12">
            <label htmlFor="">Subject</label>
            <select name="" id="" className="form-control mb-3 border rounded-md p-2">
              <option value="">Select Subject</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>
          <div className="col-12 col-md-3 col-sm-12">
            <a href="" className='btn btn-sm btn-primary form-control'>Proceed</a>
          </div>

        </div>
        <div className='text-center'>
          <h5>Exam Attendance Details</h5>
          <p>Exam : First Term</p>
          <p>Class : Upper Reception</p>
          <p>Section : A</p>
          <p>Subject : Matematics</p>
        </div>
        <div className="table-responsive">
          <table className="table table-responsive table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Roll</th>
                <th>1st C.A 20</th>
                <th>2nd C.A. 20</th>
                <th>Exam 60</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td></td>
                <td>John ken</td>
                <td>1</td>
                <td><input type="number" name="" id="" className='form-control' /></td>
                <td><input type="number" name="" id="" className='form-control' /></td>
                <td><input type="number" name="" id="" className='form-control' /></td>
              </tr>
              <tr>
                <td>1</td>
                <td></td>
                <td>John ken</td>
                <td>1</td>
                <td><input type="number" name="" id="" className='form-control' /></td>
                <td><input type="number" name="" id="" className='form-control' /></td>
                <td><input type="number" name="" id="" className='form-control' /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )

}