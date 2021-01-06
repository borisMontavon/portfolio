import React from 'react';

class WorksLinksContainer extends React.Component {
    render() {
        const {gitLink, liveLink, liveText} = this.props;

        return (
            <>
                <div className="links">
                    <a href={gitLink} target="_blank" rel="noreferrer" className="website_link github"><i className="fab fa-github-square"></i>GitHub</a>
                    <a href={liveLink} target="_blank" rel="noreferrer" className="website_link live_link"><i className="fas fa-globe"></i>{liveText}</a>
                </div>
            </>
        )
    }
}

export default WorksLinksContainer;