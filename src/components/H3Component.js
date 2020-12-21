import React from 'react';

class H3Component extends React.Component {
    render() {
        const {h3Class, text} = this.props;

        return (
            <>
                <h3 className={h3Class}>{text}</h3>
            </>
        )
    }
}

export default H3Component;