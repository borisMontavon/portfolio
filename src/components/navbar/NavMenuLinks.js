import React from 'react';
import { Link } from 'react-router-dom';

class NavMenuLinks extends React.Component {
    render() {
        const { toLink, text } = this.props;

        return (
            <>
               <li>
                    <Link to={toLink}>{text}</Link>
                </li> 
            </>
        )
    }
}

export default NavMenuLinks;