import React from 'react';
import Skill from './Skill';

const Resume = () => {
    return (
        <main style={{ height: '800px', marginTop: '50px', marginBottom: '20px' }} className="row d-flex align-items-center text-center">
            <div >
                <h1 >Resume </h1>
                <div className="d-flex justify-content-around">
                    <div className="col-md-5 offset-md-1">
                        <div className="shadow p-3 mb-5 bg-body rounded me-4">
                            <h3>Experience</h3>
                            <h5 style={{ color: '#3A4256' }}><br />IFIC Bank Limited  </h5>
                            <p>Supervisor: Operations Control    2005 to 2021.</p>
                            <p>Key Responsibilities:</p>
                            <p className="text-secondary">1.	To perform day-to-day operations for smooth functioning of the department.</p>
                            <p className="text-secondary">2.	To deliver prompt service and to monitor BACH related operations.</p>
                            <p className="text-secondary">3.	Supervise and monitor the PBM Server and BEFTN Server and Coordinate different technical and functional teams to run the operation smoothly.</p>

                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="shadow p-3 mb-5 bg-body rounded mx-4">
                            <h3>Education</h3>
                            <h5 style={{ color: '#3A4256' }}><br />MBA In MIS  </h5>
                            <p>Dhaka University        </p>
                            <p>CGPA 3.69/4  </p>
                            <h5 style={{ color: '#3A4256' }}><br />Bachelor of Computer Applications (BCA) </h5>
                            <p className="text-secondary">Bangalore University, Bangalore, India </p>
                            <p className="text-secondary">First Class </p>

                        </div>
                    </div>
                </div>
            </div>
            <Skill></Skill>
        </main>
    );
};

export default Resume;