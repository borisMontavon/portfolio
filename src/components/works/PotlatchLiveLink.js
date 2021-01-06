import React from 'react';

class PotlatchLiveLink extends React.Component {
    render() {
        const { liveLink, liveText } = this.props;

        return (
            <>
                <div className="links">
                    <a href={liveLink} target="_blank" rel="noreferrer" className="website_link live_link"><i className="fas fa-globe"></i>{liveText}</a>
                </div>
            </>
        )
    }
}

export default PotlatchLiveLink;