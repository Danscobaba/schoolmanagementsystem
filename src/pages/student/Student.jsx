import React from 'react'
import Master from '../../layout/master/Master'
import './student.scss'
import { Link } from 'react-router-dom'
const Student = () => {
    function gotoPend (){
        window.location = '/student/pend'
    }
    return (
        <Master>
            <div className='head'><h5><i className="fas fa-user-graduate"></i> Student</h5></div>
            <div className="card px-3 py-3">

                <div className="create">
                    <div>
                        <button onClick={gotoPend}  className="btn btn-outline-info btn-sm"><i className="fas fa-pause-circle"></i> Pending Approval</button> &nbsp;
                        <Link to='/student/add'><button  className="btn btn-outline-secondary btn-sm"><i className="fas fa-plus-circle text-blue-600"></i> Add a student</button></Link>


                    </div>
                    <select className='select' name="" id="">
                        <option value="">Select Class</option>
                    </select>
                </div>
                <div className="ddetail">
                    <h5 className="text-muted">
                        All Students
                    </h5>
                    <h6>Export as:</h6>
                    <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary">Excel</button>
                        <button className="btn btn-sm btn-outline-info">CSV</button>
                        <button className="btn btn-sm btn-outline-danger">PDF</button>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-inverse table-responsive">
                        <thead className="thead-inverse">
                            <tr className='text-center'>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Roll</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr className='text-center'>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><a  className="btn btn-sm btn-primary">Active</a></td>
                                    <td>

                                        <div className="row">
                                            <div className="col-sm-4 gap-0 mb-1"><a  className="btn btn-sm btn-outline-primary">View</a></div>
                                            <div className="col-sm-4 gap-0 mb-1"><a  className="btn btn-sm btn-outline-success">Edit</a></div>
                                            <div className="col-sm-4 gap-0 mb-1"><a  className="btn btn-sm btn-outline-danger">Delete</a></div>
                                        </div>
                                    </td>
                                </tr>
                            
                            </tbody>
                    </table>
                </div>
            </div>


        </Master>

    )
}

export default Student