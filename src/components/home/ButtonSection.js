import React from 'react';
import { Link } from 'react-router-dom';

class ButtonSection extends React.Component {
    render() {
        const {toLink, text} = this.props;

        return (
            <>
                <div className="butn__container">
                    <Link to={toLink} className="butn">{text}</Link>
                </div>
            </>
        )
    }
}

export default ButtonSection;