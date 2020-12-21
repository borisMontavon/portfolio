import React from 'react';

class ToolsList extends React.Component {
    render() {
    const {icon, text} = this.props;

        return (
            <>
                <li>
                    <p className="p"><i className={icon}></i>{text}</p>
                </li>
            </>
        )
    }
}

export default ToolsList;