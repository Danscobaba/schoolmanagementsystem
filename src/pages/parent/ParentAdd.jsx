import React from 'react'
import Master from '../../layout/master/Master'
import './parent.scss'
const ParentAdd = () => {
  return (
    <Master>
    <div className='head'><h5><i className="fas fa-user-friends"></i> Parent</h5></div>
    <div className="form-container" >
      <div className="form-grt" >
        <form>
          <div className="mb-3">
            <label htmlFor="name">Guardian Name <span className='text-red-700'>*</span></label>
            <input type="text" name="fname" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Email<span className='text-red-700'>*</span></label>
            <input type="text" name="fname" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Phone <span className='text-red-700'>*</span></label>
            <input type="text" name="fname" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Date of Birth<span className='text-red-700'>*</span></label>
            <input type="date" name="begin"
              placeholder="dd-mm-yyyy" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Father's Name <span className='text-red-700'>*</span></label>
            <input type="text" name="fname" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Mother's Name <span className='text-red-700'>*</span></label>
            <input type="text" name="fname" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Father's Profession <span className='text-red-700'>*</span></label>
            <input type="text" name="fname" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Father's Profession <span className='text-red-700'>*</span></label>
            <input type="text" name="fname" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Gender<span className='text-red-700'>*</span></label>
            <select name="" id="" className="form-control">
              <option value="">Choose one</option>
              <option value="">Male</option>
              <option value="">Female</option>

            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="name">Religion<span className='text-red-700'>*</span></label>
            <input type="text" name="fname" id="name" className="form-control" />
          </div>
         
          <div className="mb-3">
            <label htmlFor="name">Address<span className='text-red-700'>*</span></label>
            <input type="text" name="address" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">State<span className='text-red-700'>*</span></label>
            <input type="text" name="address" id="name" className="form-control" />
          </div>          
          <div className="mb-3">
            <label htmlFor="name">Photo<span className='text-red-700'>*</span></label>
            <input type="file" name="address" id="name" className="form-control" />
          </div>
         
          <div className="mb-3">
            <label htmlFor="name">Username<span className='text-red-700'>*</span></label>
            <input type="text" name="address" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Password<span className='text-red-700'>*</span></label>
            <input type="text" name="address" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Birthday SMS?<span className='text-red-700'>*</span></label>
            <div className="d-flex gap-1">
              <input type="radio" id="age1" name="age" value="1" />
              <label className='mr-3'  htmlFor="age1">Yes</label>&nbsp;&nbsp;
              <input type="radio" id="age2" name="age" value="0" />
              <label  htmlFor="age2">No</label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="name">Birthday Email?<span className='text-red-700'>*</span></label>
            <div className=" d-flex gap-1">
            <input type="radio" id="bemail1" name="bemail" value="30" />
              <label className='mr-3'  htmlFor="bemail1">Yes</label>&nbsp;&nbsp;
              <input type="radio" id="bemail2" name="bemail" value="60" />
              <label  htmlFor="bemail2">No</label>
            </div>

          </div>
          <div className="mb-3">
            <input type="button" value="Add Parent" className="form-control btn btn-outline-success" />
          </div>
        </form>
      </div>

    </div>
  </Master>
  )
}

export default ParentAdd