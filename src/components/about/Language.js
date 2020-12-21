import React from 'react';
import { connect } from 'react-redux';
import H3Component from '../H3Component';
import H4Component from '../H4Component';
import NestedParagraph from '../NestedParagraph';
import ParaComponent from '../ParaComponent';

class Language extends React.Component {
    render() {
        const { i18n } = this.props;

        return (
            <>
                <H3Component text={i18n.about.h3Lang} />
                <H4Component text={i18n.about.lang1} />
                <NestedParagraph pClass ="firstP" text={i18n.about.lang11} />
                <H4Component text={i18n.about.lang2} />
                <NestedParagraph pClass="firstP" text={i18n.about.lang22} />
                <ParaComponent pClass="secondP margin45" text={i18n.about.lang222} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { i18n } = state.translateReducer;

    return { i18n };
}

export default connect(mapStateToProps)(Language);