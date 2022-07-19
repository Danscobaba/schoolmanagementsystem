
import './dashboard.scss'

import Master from '../../layout/master/Master'

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const Dashboard = () => {

    return (
        <Master>
            <div className="container">
            <div className="card px-3 py-3" style={{backgroundColor:'white'}}>
                <div className="row">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <div className="student px-3 py-2">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5>12</h5>
                                    <p>Students</p>
                                </div>
                                <p>
                                    <i className='fas fa-user-graduate text-white' style={{ fontSize: 40 }}></i>
                                    {/* <i className="bi bi-bar-chart text-info" style={{ fontSize: 40 }}></i> */}
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <div className="parent px-3 py-2">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5>12</h5>
                                    <p>Parents</p>
                                </div>
                                <p>
                                    <i className="fas fa-user-tie text-white" style={{ fontSize: 40 }}></i>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <div className="teacher px-3 py-2">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5>12</h5>
                                    <p>Teachers</p>
                                </div>
                                <p>
                                    <i className="	fas fa-chalkboard-teacher text-white" style={{ fontSize: 40 }}></i>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <div className="subject px-3 py-2">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5>12</h5>
                                    <p>Subjects</p>
                                </div>
                                <p>
                                    <i className="	fas fa-book-open text-white" style={{ fontSize: 40 }}></i>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <div className="fee px-3 py-2">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5>12</h5>
                                    <p>Fee Types</p>
                                </div>
                                <p>
                                    <i className="fas fa-donate text-white" style={{ fontSize: 40 }}></i>
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <div className="px-3 py-2 invoice">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h5 className=''>12</h5>
                                    <p>Invoices</p>
                                </div>
                                <p>
                                    <i className="fas fa-ribbon text-white" style={{ fontSize: 40 }}></i>
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className=' card px-3 py-3'>
                    <h4 className="text-center">
                        month expense
                    </h4>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>

                </div>
                <div className="row mt-3">
                    <div className="col-md-4 col-sm-12 mb-3">
                        <div className="card " style={{height:'300px'}}>
                            <div className="text-center py-2  text-white"   style={{height:'130px',backgroundColor:'#C24984'}}>
                            <img src="data:image/png;base64,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" className="rounded-circle mx-auto d-block" height={70} width={'70px'} alt="..."/>
                            <h5>Name</h5>
                            <h6>Admin</h6>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="card">
                        <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 10,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="pv"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                        </div>
             

                    </div>

                </div>
                <div className="card mt-3 mb-3 px-3 py-2">
                <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
                </div>
            </div>
            </div>
           



        </Master>
    )
}

export default Dashboard