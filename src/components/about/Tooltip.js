import React from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';

class Tooltip extends React.Component {
    copyFunction() {
        const { tooltipText } = this.props;
        const mailToCopy = document.getElementById('copyMail');
        const textToCopy = mailToCopy.innerHTML; 

        navigator.clipboard.writeText(textToCopy);

        toastr.success(tooltipText);
    };
    
    render() {

        return (
            <>
                <div className="tooltip__container">
                    <button onClick={() => this.copyFunction()} id="copyMail">
                        boris.montavon@gmail.com
                    </button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { tooltipText } = state.translateReducer;

    return { tooltipText };
};

export default connect(mapStateToProps)(Tooltip);