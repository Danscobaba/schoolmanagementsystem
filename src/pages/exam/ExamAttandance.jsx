import React from 'react'
import './exam.scss'
import Master from '../../layout/master/Master'
const ExamAttandance = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const foo = params.get('new');
  return (
    <>
      <Master>
        <div className="top-bar">
          <div className="h-full w-full d-flex font-extrabold">
            <h5>{foo ? 'Add New Exam' : 'All Exams'}</h5>
          </div>
        </div>
        {foo ? <Dansco /> : <Main />}
      </Master>
    </>
  )
}

export default ExamAttandance


const Main = () => {
  return (
    <div className="card p-3">
      <div>
        <a href="/exam-attendance?new=true" className="btn btn-outline-info btn-sm">Add exam attendance</a>
      </div>
      <div className="row cgh mb-3 mt-3">
        <div className="col-sm-12 col-md-4 col-12">
          <select name="" id="" className="form-control">
            <option value="">Select Exam</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="col-sm-12 col-md-4 col">
          <select name="" id="" className="form-control">
            <option value="">Select Class</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="col-sm-12 col-md-4 col-12">
          <select name="" id="" className="form-control">
            <option value="">Select Subject</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="col-sm-12 col-md-4 col-12">
          <button className="btn btn-success btn-sm">View Attendance</button>
        </div>
      </div>
      <h5 className="text-muted">All Students</h5>
      <div className="tabe-responsive">
        <tablee className="table text-center table-responsive table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
        </tablee>
      </div>
    </div>
  )
}



const Dansco = () => {
  return (
    <div className="card px-3 py-3">
      <div className="row cgh mb-3  ">
      <div className="col-sm-12 col-md-3 col-12">
          <select name="" id="" className="form-control">
            <option value="">Select Section</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="col-sm-12 col-md-3 col-12">
          <select name="" id="" className="form-control">
            <option value="">Select Exam</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="col-sm-12 col-md-3 col">
          <select name="" id="" className="form-control">
            <option value="">Select Class</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        
        <div className="col-sm-12 col-md-3 col-12">
          <select name="" id="" className="form-control">
            <option value="">Select Subject</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="col-sm-12 col-md-3 col-12">
          <button className="btn btn-success btn-sm">Attendance</button>
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
      <table className="table table-responsive text-center table-striped">
        <thead>
          <tr>
          <th><input type="checkbox" name="" id="" /></th>
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Section</th>
            <th>Email</th>
            <th>Roll</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" name="" id="" /></td>
            <td>1</td>
            <td></td>
            <td>John Doe</td>
            <td>A</td>
            <td>exxample@gmail.com</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-3">
        <button className="btn btn-outline-primary form-control btn-sm">Save</button>
      </div>
    </div>
    </div>
  )
}
