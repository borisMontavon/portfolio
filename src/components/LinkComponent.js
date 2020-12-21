import React from 'react';

class LinkComponent extends React.Component {
    render() {
        const {link, text} = this.props;

        return (
            <>
                <a href={link} target="_blank" rel="noreferrer">{text}</a>
            </>
        )
    }
}

export default LinkComponent;