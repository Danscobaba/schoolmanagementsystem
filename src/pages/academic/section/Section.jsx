import React from 'react'
import './section.scss'
import Master from '../../../layout/master/Master'
// import $ from 'jquery'
export const Section = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get('new');
   
    
   

  return (
    <Master>
          <div className="top-bar">
          
                <div className="h-full w-full d-flex font-extrabold">
                    <h5>{foo ? 'Add New Section' : 'All Section'}</h5>
                </div>
            </div>
     
            {foo ? <Add/> : <Main/>}
    </Master>
  )
}

const Main = () => {
    function gotg() {
        window.location = '/sections?new=true'
    };
  return (
   <div className="card">
    <div className="row px-3">
        <div className="col-12 col-sm-6">
        <div className='mt-3 mb-3'>
                    <button className='btn btn-outline-info btn-sm' onClick={gotg}><i className="fas fa-plus"></i>Add new section</button>
                </div>

        </div>
        <div className="col-12 col-sm-6">

            <div className='mt-3 mb-3'>
            <select name="" id="" className='select float-right'>
                <option value="">Select Class</option>
            </select>
            </div>
        
        </div>
    </div>
    <h6 className="px-3">Export as:</h6>
                    <div className="d-flex gap-2 p-3">
                        <button className="btn btn-sm btn-outline-primary">Excel</button>
                        <button className="btn btn-sm btn-outline-info">CSV</button>
                        <button className="btn btn-sm btn-outline-danger">PDF</button>
                    </div>
    <div className="table-responsive">
        <table className='table  table-striped table-responsive text-center'>
            <thead className='text-blue-400'>
                <tr>
                    <th>#</th>
                    <th>Section</th>
                    <th>Category</th>
                    <th>Capacity</th>
                    <th>Teacher's Name</th>
                    <th>Note</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className='d-flex gap-2'><button className="btn btn-primary btn-sm">View</button>
                    <button className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className='d-flex gap-2'><button className="btn btn-primary btn-sm">View</button>
                    <button className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
   </div>
  )
}

// export default Section
const Add = () => {
    return (
        <div className="card d-fex justify-center items-center p-3 sm:p-0">
        <div className='form'>
        <div className="mb-3">
            <label htmlFor="">Section</label>
            <input type="text" name="" id="" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="">Category</label>
            <input type="text" name="" id="" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="">Capacity</label>
            <input type="text" name="" id="" className="form-control" />
        </div>
            <div className="mb-3">
                <label htmlFor="">Class Name</label>
                <select name="" id="" className='form-control'>
                    <option value="">Select class</option>
                    <option value=""></option>
                    <option value=""></option>

                </select>
            </div>
            <div className="mb-3">
                <label>Teacher's Name</label>
            <select name="" id="" className='form-control'>
                <option value="">Select Teacher</option>
                <option value=""></option>
                <option value=""></option>

            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="">Note</label>
            <textarea name="" className="form-control" id="" cols="5" rows="3"></textarea>
           
        </div>
      
        <div className="mb-3">
            <input type="button" value='Save' className="btn btn-outline-success form-control" />
        </div>
    </div>
      
    </div >
    )
  }
  