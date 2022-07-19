import React from 'react'
import './exam.scss'
import Master from '../../layout/master/Master'
const Exam = () => {
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

export default Exam

const Main = () => {
  function gotg() {
      window.location = '/exams?new=true'
  };
  return (
      <>


          <div className="card p-3">
              <div className='mt-3 mb-3'>
                  <button className='btn btn-outline-info btn-sm' onClick={gotg}><i className="fas fa-plus"></i>Add exam</button>
              </div>

              <div className="ddetail">
                  <h5 className="text-muted">
                      All Exams
                  </h5>
                  <h6>Export as:</h6>
                  <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-outline-primary">Excel</button>
                      <button className="btn btn-sm btn-outline-info">CSV</button>
                      <button className="btn btn-sm btn-outline-danger">PDF</button>
                  </div>
              </div>
              <div className="table-responsive">
                  <table className="table table-striped table-responsive">
                      <thead className='text-center'>
                          <tr className="text-center">
                              <th>#</th>
                              <th>Exam Name</th>
                              <th>Date</th>
                              <th>Note</th>
                              <th>Action</th>
                              
                          </tr>

                      </thead>
                      <tbody className='text-center'>
                          <tr className='text-center'>
                              <td>1</td>
                              <td>First Term</td>
                              <td></td>
                              <td></td>
                              <td className='d-flex justify-around'><button className="btn btn-outline-primary btn-sm">View</button><button className="btn btn-outline-danger btn-sm">Delete</button></td>

                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </>
  )


}


const Dansco = () => {
  const ngame = "Danscotech";
  return (
      <div className="card d-fex justify-center items-center p-3 sm:p-0">
          <div className='form'>
          <div className="mb-3">
              <label htmlFor="">Exam Name</label>
              <input type="text" name="" id="" className="form-control" />
          </div>
          <div className="mb-3">
              <label htmlFor="">Date</label>
              <input type="Date" name="" id="" className="form-control" />
          </div>
         
          <div className="mb-3">
              <label htmlFor="">Next Term Resumes</label>
              <input type="date" name="" id="" className="form-control" />
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
  )


}