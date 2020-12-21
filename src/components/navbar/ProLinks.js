import React from 'react';

class ProLinks extends React.Component {
    render() {
    const {link, icon} = this.props;

        return (
            <>
                <a href={link} target="_blank" rel="noreferrer"><i className={icon}></i></a>
            </>
        )
    }
}

export default ProLinks;