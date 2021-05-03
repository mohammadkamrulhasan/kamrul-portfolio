import React from 'react';

const Skill = () => {
    return (
        <main style={{ height:'600px', marginTop: '20px' , width:'800px',margin:'0 auto', paddingBottom:'30px'}} className="align-items-center text-center">
                <h1>My Skills</h1>
                <div style={{ height:'600px', width:'800px'}} className="mt-4 mb-4 align-items-center text-center">
                    <div class="progress mt-4 mb-4">
                        <div class="progress-bar bg-success" role="progressbar" style={{ width: '80%' }}   aria-valuenow="25" aria-valuemin="80" aria-valuemax="100">JavaScript</div>
                    </div>
                    <div class="progress mt-4 mb-4">
                        <div class="progress-bar bg-info" role="progressbar" style={{ width: '85%' }} aria-valuenow="50" aria-valuemin="85" aria-valuemax="100">React</div>
                    </div>
                    <div class="progress mt-4 mb-4">
                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="85" aria-valuemax="100">HTML</div>
                    </div>
                    <div class="progress mt-4 mb-4">
                        <div class="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="100" aria-valuemin="80" aria-valuemax="100">CSS</div>
                    </div>
                </div>
            </main>
    );
};

export default Skill;