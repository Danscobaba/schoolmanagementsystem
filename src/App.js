import {  BrowserRouter, Routes, Route} from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import Parent from "./pages/parent/Parent";
import User from "./pages/user/User";
import UserAdd from "./pages/user/UserAdd";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Student from "./pages/student/Student";
import StudentAdd from "./pages/student/StudentAdd";
import Pending from "./pages/student/Pending";
import ParentAdd from "./pages/parent/ParentAdd";
import Teacher from "./pages/teacher/Teacher";
import TeacherAdd from "./pages/teacher/TeacherAdd";
import PendingTea from "./pages/teacher/PendingTea";
import Class from "./pages/academic/class/Class";
import Subject from "./pages/academic/subject/Subject";
import { Section } from "./pages/academic/section/Section";
import Exam from "./pages/exam/Exam";
import ExamSchedule from "./pages/exam/ExamSchedule";
import ExamAttandance from "./pages/exam/ExamAttandance";
import Grade from "./pages/exam/Grade";
import Mark from './pages/mark/Mark';
import Result from './pages/mark/Result';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
       <Routes>
     
        <Route path="/" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/add" element={<UserAdd />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/parent/add" element={<ParentAdd />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/add" element={<StudentAdd/>}/>
        <Route path="/student/pend" element={<Pending/>}/>
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/sections" element={<Section />} />
        <Route path="/teacher/add" element={<TeacherAdd/>}/>
        <Route path="/teacher/pend" element={<PendingTea/>}/>
        <Route path="/classes" element={<Class/>}/>
        <Route path="/subjects" element={<Subject/>}/>
        <Route path="/exams" element={<Exam/>}/>
        <Route path="/examschedule" element={<ExamSchedule/>}/>
        <Route path="/exam-attendance" element={<ExamAttandance/>}/>
        <Route path="/grade" element={<Grade/>}/>
        <Route path="/mark" element={<Mark/>}/>
        <Route path="/mark/view" element={<Result/>}/>
      </Routes>
       </BrowserRouter>
        
    </div>
  );
}

export default App;
