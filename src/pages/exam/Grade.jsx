import React from 'react'
import Master from '../../layout/master/Master'
import './exam.scss'
const Grade = () => {
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
        {foo ? <Dansco /> : <Main />}
    </Master>
  )
}

export default Grade

function Main (){
  return(
    <>
    <div className="card px-4 py-3">
<div className="d-flex justify-between">
  <a href='/grade?new=true' className="btn btn-outline-info btn-sm">Add new grade</a>
  {/* <div>
  <select name="" id="" className="form-contro p-2">
            <option value="">Select Exam</option>
            <option value=""></option>
            <option value=""></option>
          </select>
  </div> */}

</div>
<h5 className="text-muted mt-3 mb-3">All Grades</h5>
      <div className="table-responsive">
        <tablee className="table text-center table-responsive table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Grade Name</th>
              <th>Grade Point</th>
              <th>Mark From</th>
              <th>Mark Upto</th>
              <th>Note</th>
              
              <th>Action</th>
            </tr>
          </thead>
        </tablee>
      </div>
    </div>
    </>
  )
}
function Dansco (){
  return(
    <>
  <div className="card d-fex justify-center items-center p-3 sm:p-0">
          <div className='form'>
          <div className="mb-3">
              <label htmlFor="">Grade Name</label>
             <input type="text" name="" id="" className="form-control" />
          </div>
          <div className="mb-3">
              <label htmlFor="">Grade Point</label>
              <input type="text" name="" id="" className="form-control" />
          </div>
          <div className="mb-3">
              <label htmlFor="">Grade From</label>
              <input type="text" name="" id="" className="form-control" />
          </div>
          <div className="mb-3">
              <label htmlFor="">Grade Upto</label>
              <input type="text" name="" id="" className="form-control" />
          </div>
          <div className="mb-3">
              <label htmlFor="">Note</label>
              <input type="text" name="" id="" className="form-control" />
          </div>
          <div className="mb-3">
              <input type="button" value='Save' className="btn btn-success form-control" />
          </div>
      </div>
        
      </div >
    </>
  )
}
