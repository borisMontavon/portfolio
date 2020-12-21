import React from 'react';
import { connect } from 'react-redux';
import TitleS1 from './TitleS1';

class SectionOne extends React.Component {

    render() {
        const { i18n } = this.props;
        
        return (
            <>
                <div className="section s1">
                    <div className="title__s1">
                        <TitleS1 textOne={i18n.home.title1} textTwo={i18n.home.title2} textThree={i18n.home.title3} textFour={i18n.home.title4} />
                    </div>
                    <div className="skills__s1">
                        <p>HTML / CSS / Sass / Bootstrap / React / JavaScript / jQuery</p>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { i18n } = state.translateReducer;

    return { i18n };
}

export default connect(mapStateToProps)(SectionOne);