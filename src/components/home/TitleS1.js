import React from 'react';

class TitleS1 extends React.Component {
    render() {
        const {textOne, textTwo, textThree, textFour} = this.props;

        return (
            <>
                <h1>{textOne}<span className="blue_text">{textTwo}</span> ?<br/>{textThree}<span className="blue_text">Boris</span>,<br/>{textFour}</h1>
            </>
        )
    }
}

export default TitleS1;