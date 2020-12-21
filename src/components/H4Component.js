import React from 'react';

class H4Component extends React.Component {
    render() {
        const {h4Class, text} = this.props;

        return (
            <>
                <h4 className={h4Class}>{text}</h4>
            </>
        )
    }
}

export default H4Component;