/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import './sidebar.scss';
import $ from 'jquery';
const Sidebar = () => {


  $(document).ready(function () {
    $('ul li a').click(function () {
      $('li a').removeClass("active");
      $(this).addClass("active");
    });
  });
 
  const [open, setOpen] = React.useState(false);
  const [openatt, setOpenatt] = React.useState(false);
  const [openexam, setOpenexam] = React.useState(false);
  const [openmark, setOpenmark] = React.useState(false);


  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickatt = () => {
    setOpenatt(!openatt);
  };
  const handleClickexam = () => {
    setOpenexam(!openexam);
  };
  const handleClickmark = () => {
    setOpenmark(!openmark);
    console.log(openmark)
  };

  return (
    <div className="sidebar" id='togle'  >
      <div className="top">
        <h5>LOGO</h5>
      </div>
      <hr />
      <div className="side-item">
        <ul id='ul'>
          <li id='li'><a href="/"><i className="fas fa-desktop"></i><span>Dashboard</span></a></li>
          <li id='li'><a href="/student"><i className='fas fa-user-graduate'></i><span>Students</span></a></li>
          <li id='li'><a href="/parent"><i className="fas fa-users"></i><span>Parents</span></a></li>
          <li id='li'><a href="/teacher"><i className="fas fa-chalkboard-teacher"></i><span>Teachers</span></a></li>
          <li id='li'><a href="/user"><i className="fas fa-user"></i><span>User</span></a></li>
          <li id='li' onClick={handleClick}><a><i className="fas fa-award"></i><span>Academic</span></a> <span className='float-end'><i className={open ? 'fas fa-angle-up' : 'fas fa-angle-down'} ></i></span></li>
          <div className={open ? 'myco' : 'hidemyco'}>
            <ul>
              <li><a href="/classes"><i className="fas fa-school mr-2"></i>Class</a></li>
              <li><a href="/subjects"><i className="fas fa-shapes mr-2"></i>Subject</a></li>
              <li><a href="/sections"><i className="	fas fa-campground mr-2"></i>Section</a></li>
              <li><a href="/syllabus"><i className="fas fa-map mr-2"></i>Syllabus/Note</a></li>
              <li><a href="/assignment"><i className="	fas fa-book mr-2"></i>Assignment</a></li>
              <li><a href="/rountine"><i className="fas fa-atom mr-2"></i>Routine</a></li>
            </ul>
          </div>
          <li id='li' onClick={handleClickatt}><a><i className="fas fa-calendar-check"></i><span>Attendance</span></a> <span className='float-end'><i className={openatt ? 'fas fa-angle-up' : 'fas fa-angle-down'} ></i></span></li>
          <div className={openatt ? 'myco' : 'hidemyco'}>
            <ul>
              <li><a href=""><i className="fas fa-calendar-alt mr-2 flex-wrap "></i>Student Attendance</a></li>
              <li><a href=""><i className="fas fa-calendar mr-2"></i>Teacher Attendance</a></li>
              <li><a href=""><i className="	fas fa-calendar mr-2"></i>User Attandance</a></li>

            </ul>
          </div>
          <li id='li' onClick={handleClickexam}><a><i className="fas fa-award"></i><span>Exam</span></a> <span className='float-end'><i className={openexam ? 'fas fa-angle-up' : 'fas fa-angle-down'} ></i></span></li>
          <div className={openexam ? 'myco' : 'hidemyco'}>
            <ul>
              <li><a href="/exams"><i className="	fas fa-pen mr-2"></i>Exam</a></li>
              <li><a href="/examschedule"><i className="fas fa-thumbtack mr-2"></i>Exam Schedule</a></li>
              <li><a href="/exam-attendance"><i className="	fas fa-edit mr-2"></i>Exam Attendance</a></li>
              <li><a href="/grade"><i className="	fas fa-archive mr-2"></i>Grade</a></li>

            </ul>
          </div>
          <li id='li' onClick={handleClickmark}><a><i className="fas fa-award"></i><span>Mark</span></a> <span className='float-end'><i className={openmark ? 'fas fa-angle-up' : 'fas fa-angle-down'} ></i></span></li>
          <div className={openmark ? 'myco' : 'hidemyco'}>
            <ul>
              <li><a href="/mark"><i className="fas fa-school mr-2"></i>Mark</a></li>
              <li><a href="/markpercentage"><i className="fas fa-shapes mr-2"></i>Mark Distribution</a></li>
              <li><a href="/promotion"><i className="	fas fa-campground mr-2"></i>Promotion</a></li>
              <li><a href="/markcomment"><i className="fas fa-map mr-2"></i>Mark Comment</a></li>
          
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar