import React from 'react';
import { connect } from 'react-redux';
import H3Component from '../H3Component';
import EducationJob from './EducationJob';

class Education extends React.Component {
    render() {
        const { i18n } = this.props;

        return(
            <>
                <H3Component text={i18n.about.h3Educ} />
                <EducationJob hText={i18n.about.educText1} datesText={i18n.about.educDates1} locText={i18n.about.educLoc1} />
                <EducationJob hText={i18n.about.educText2} datesText={i18n.about.educDates2} locText={i18n.about.educLoc2} />
                <EducationJob hText={i18n.about.educText3} datesText={i18n.about.educDates3} locText={i18n.about.educLoc3} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { i18n } = state.translateReducer;

    return { i18n };
}

export default connect(mapStateToProps)(Education);