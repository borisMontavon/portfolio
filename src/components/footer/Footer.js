import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    render() {
        const { i18n } = this.props;
        
        return (
            <footer>
                <span>{i18n.footer.footerText}</span>
            </footer>
        )
    }
}

const mapStateToProps = (state) => {
    const { i18n } = state.translateReducer;

    return { i18n };
};

export default connect(mapStateToProps)(Footer);