import React from 'react';

class Hamburger extends React.Component {
    render() {
        
        return (
            <>
                <div className="hamburgerIcon">
                    <div className="icon__line half start"></div>
                    <div className="icon__line"></div>
                    <div className="icon__line half end"></div>
                </div>
            </>
        )
    }
}

export default Hamburger;