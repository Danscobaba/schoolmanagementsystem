import React from 'react'
import './subject.scss'
import Master from '../../../layout/master/Master'
function Subject() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get('new');
    // console.log(params);
    return (


        <Master>
            <div className="top-bar">
                <div className="h-full w-full d-flex font-extrabold">
                    <h5>{foo ? 'Add New Subject' : 'All Subjects'}</h5>
                </div>
            </div>
            {foo ? <Dansco /> : <Main />}


        </Master>


    )
}

export default Subject


const Main = () => {
    function gotg() {
        window.location = '/subjects?new=true'
    };
    return (
        <>


            <div className="card p-3">
                <div className='mt-3 mb-3'>
                    <button className='btn btn-outline-info btn-sm' onClick={gotg}><i className="fas fa-plus"></i>Add new subject</button>
                </div>

                <div className="ddetail">
                    <h5 className="text-muted">
                        All Subjects
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
                                <th>Subject Name</th>
                                <th>Subject Author</th>
                                <th>Subject Code</th>
                                <th>Subject Teacher</th>
                                <th>Subject Pass Mark</th>
                                <th>Final Mark</th>
                                <th>Type</th>

                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody className='text-center'>
                            <tr className='text-center'>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
                <label htmlFor="">Type</label>
                <select name="" id="" className='form-control'>
                    <option value="">Select Type</option>
                    <option value="">Optional</option>
                    <option value="">Mandatory</option>

                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="">Pass Mark</label>
                <input type="text" name="" id="" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Final Mark</label>
                <input type="text" name="" id="" className="form-control" />
            </div>
           
            <div className="mb-3">
                <label htmlFor="">Subject Name</label>
                <input type="text" name="" id="" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Subject Author</label>
                <input type="text" name="" id="" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="">Subject Code</label>
                <input type="text" name="" id="" className="form-control" />
            </div>
            <div className="mb-3">
                <input type="button" value='Save' className="btn btn-outline-success form-control" />
            </div>
        </div>
          
        </div >
    )

  
}

