import React from 'react'
import Master from '../../layout/master/Master'
import './exam.scss'
const ExamSchedule = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const foo = params.get('new');
  return (
    <Master>
 <div className="top-bar">
          <div className="h-full w-full d-flex font-extrabold">
            <h5>{foo ? 'Add New Exam Schedule' : "All Exam's Schedule"}</h5>
          </div>
        </div>
        {foo ? <Dansco /> : <Main />}
    </Master>
  )
}

export default ExamSchedule

function Main (){
  return(
    <>
    <div className="card px-4 py-3">
<div className="d-flex justify-between">
  <a href='/examschedule?new=true' className="btn btn-outline-info btn-sm">Add new exam schedule</a>
  <div>
  <select name="" id="" className="form-contro p-2">
            <option value="">Select Exam</option>
            <option value=""></option>
            <option value=""></option>
          </select>
  </div>

</div>
<h5 className="text-muted mt-3 mb-3">All Exam Schedule</h5>
      <div className="table-responsive">
        <tablee className="table text-center table-responsive table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Exam Name</th>
              <th>Class</th>
              <th>Section</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Time</th>
              <th>Room</th>
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
              <label htmlFor="">Exam Name</label>
             <select name="" id="" className="form-control">
              <option value="">Select exam</option>
              <option value=""></option>
              <option value=""></option>
             </select>
          </div>
          <div className="mb-3">
              <label htmlFor="">Section</label>
             <select name="" id="" className="form-control">
              <option value="">Select section</option>
              <option value=""></option>
              <option value=""></option>
             </select>
          </div>
          <div className="mb-3">
              <label htmlFor="">Class</label>
             <select name="" id="" className="form-control">
              <option value="">Select class</option>
              <option value=""></option>
              <option value=""></option>
             </select>
          </div>
          <div className="mb-3">
              <label htmlFor="">Subject</label>
             <select name="" id="" className="form-control">
              <option value="">Select subject</option>
              <option value=""></option>
              <option value=""></option>
             </select>
          </div>
          <div className="mb-3">
              <label htmlFor="">Date</label>
              <input type="Date" name="" id="" className="form-control" />
          </div>
         
          <div className="mb-3">
              <label htmlFor="">Time from</label>
              <input type="time" name="" id="" className="form-control" />
          </div>
          <div className="mb-3">
              <label htmlFor="">Time to</label>
              <input type="time" name="" id="" className="form-control" />
          </div>
          <div className="mb-3">
              <label htmlFor="">Room</label>
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