import React from 'react'
import './class.scss'
import { Link } from 'react-router-dom'
import Master from '../../../layout/master/Master'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
const Class = () => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Master>
            <div className="top-bar">
                <div className="h-full w-full d-flex font-extrabold">
                    <h5>All Classes</h5>
                </div>
            </div>

            <div className="card p-3">
                <div className='mt-3 mb-3'>
                    <button className='btn btn-outline-info btn-sm' onClick={handleClickOpen}><i className="fas fa-plus"></i>Add new class</button>
                </div>
                <Dialog className="bh" fullWidth="md"  fullScreen={fullScreen} open={open} onClose={handleClose}>
                    <DialogTitle>Add new class</DialogTitle>
                    <hr />
                    <DialogContent >
                     
                        
                                <div className="mb-3">
                                    <label htmlFor="class">
                                        Class
                                    </label>
                                    <input type="text"  name="name" id="class" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="class">
                                        Class Teacher
                                    </label>
                                    <select name="" id="" className="form-control">
                                        <option value="">Select Teacher</option>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="class">
                                        Note
                                    </label>
                                    <input type="text" name="name" id="class" className="form-control" />
                                </div>
                        
                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Save</Button>
                    </DialogActions>
                </Dialog>
                <div className="ddetail">
                    <h5 className="text-muted">
                        All Classes
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
                                <th>Class</th>
                                <th>Class Teacher</th>
                                <th>Note</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody className='text-center'>
                            <tr className='text-center'>
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
        </Master>
    )
}

export default Class