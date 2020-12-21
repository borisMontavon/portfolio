import React from 'react';
import { connect } from 'react-redux';
import ResumeButton from './ResumeButton';
import H2Component from '../H2Component';
import Skills from './Skills';
import Language from './Language';
import EmpHistory from './EmpHistory';
import Education from './Education';

class RightContainer extends React.Component {
    render() {
        const { i18n } = this.props;

        return (
            <>
                <div className="right__container">
                    <div className="resume__container">
                        <H2Component text={i18n.about.h2Resume} />
                        <ResumeButton />
                        <Skills />
                        <Language />
                        <EmpHistory />
                        <Education />
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { i18n } = state.translateReducer;

    return { i18n };
}

export default connect(mapStateToProps)(RightContainer);