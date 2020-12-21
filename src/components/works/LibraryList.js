import React from 'react';

class LibraryList extends React.Component {
    render() {
    const {link, icon, text} = this.props;

        return (
            <>
                <li>
                    <a href={link} target="_blank" rel="noreferrer"><i className={icon}></i>{text}</a>
                </li>
            </>
        )
    }
}

export default LibraryList;