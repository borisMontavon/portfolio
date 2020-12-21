import React from 'react';
import WorksOne from './WorksOne';
import WorksTwo from './WorksTwo';
import WorksThree from './WorksThree';
import WorksFour from './WorksFour';

class SecondRow extends React.Component {
    render() {

        return (
            <>
                <div className="row mb-lg-5 main_row">
                    <div className="col-10 offset-1">
                        <WorksOne />
                        <hr className="mt-lg-5 mb-lg-5" />
                        <WorksTwo />
                        <hr className="mt-lg-5 mb-lg-5" />
                        <WorksThree />
                        <hr className="mt-lg-5 mb-lg-5" />
                        <WorksFour />
                    </div>
                </div>
            </>
        )
    }
}

export default SecondRow;