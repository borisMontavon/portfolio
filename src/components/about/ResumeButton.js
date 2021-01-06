import React from 'react';
import { connect } from 'react-redux';

class ResumeButton extends React.Component {
    render() {
        const { i18n, pdfLink } = this.props;

        return (
            <>
                <div className="btn__container">
                    <a href={pdfLink} target="_blank" rel="noreferrer" ><i className="fas fa-hand-spock"></i>{i18n.about.resumeButton}</a>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { i18n, pdfLink } = state.translateReducer;

    return { i18n, pdfLink };
}

export default connect(mapStateToProps)(ResumeButton);