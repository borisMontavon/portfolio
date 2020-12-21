import React from 'react';

class ParaComponent extends React.Component {
    render() {
        const {pClass, text} = this.props;

        return (
            <>
                <p className={pClass}>{text}</p>
            </>
        )
    }
}

export default ParaComponent;