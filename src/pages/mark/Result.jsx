import React from 'react'
import Master from '../../layout/master/Master'
import './mark.scss'

const Result = () => {
  return (
    <Master>
      <Main />
    </Master>
  )
}

export default Result

const Main = () => {
  return (
   <>
   <div className="wrapper">
<div className="table-responsive">
  <table className="table table-responsive">
    <thead>
      <tr>
        <th>
          <img src="/im" alt="" srcset="" />
        </th>
      </tr>
    </thead>
</div>

   </div>
   
   </>
  )
}