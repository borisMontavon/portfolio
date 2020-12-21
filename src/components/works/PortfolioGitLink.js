import React from 'react';

class PortfolioGitLink extends React.Component {
    render() {
        const { gitLink } = this.props;

        return (
            <>
                <div className="links">
                    <a href={gitLink} className="website_link github"><i className="fab fa-github-square"></i>GitHub</a>
                </div>
            </>
        )
    }
}

export default PortfolioGitLink;