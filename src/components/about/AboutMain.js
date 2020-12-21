import React from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

class AboutMain extends React.Component {
    render() {

        return (
            <>
                <div id="main">
                    <LeftContainer />
                    <RightContainer />
                </div>
            </>
        )
    }
}

export default AboutMain;