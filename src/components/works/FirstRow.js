import React from 'react';

class FirstRow extends React.Component {
    render() {
        const {text} = this.props;

        return (
            <>
                <div className="row intro">
                    <div className="col-10 offset-1 mb-3">
                        <h2>{text}</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default FirstRow;