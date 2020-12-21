import React from 'react';

class EducationJob extends React.Component {
    render() {
        const {hText, datesText, locText} = this.props;

        return (
            <>
                <h4>{hText}</h4>
                <p className="dates">{datesText}</p>
                <p className="secondP marginBottom"><em>{locText}</em></p>
            </>
        )
    }
}

export default EducationJob;