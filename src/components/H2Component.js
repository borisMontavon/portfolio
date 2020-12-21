import React from 'react';

class H2Component extends React.Component {
    render() {
        const {h2Class, text} = this.props;

        return (
            <>
                <h2 className={h2Class}>{text}</h2>
            </>
        )
    }
}

export default H2Component;