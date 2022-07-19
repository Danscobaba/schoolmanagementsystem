import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './master.scss'

const Master = ({ children }) => {

    


    return (
        <div className='master'>
              
                <div className="header" id='header'>
                    <Navbar />
                    
                   
                </div>

            <div className="tocontainer">
             
                <Sidebar />
              
                <div className="content" id='content'>
                    {children}

                    <footer className='mt-3'>
                        <h6>&copy;</h6>
                    </footer>
                </div>
            </div>

        </div>
    )
}

export default Master