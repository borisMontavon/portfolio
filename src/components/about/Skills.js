import React from 'react';
import { connect } from 'react-redux';
import H3Component from '../H3Component';
import H4Component from '../H4Component';
import NestedParagraph from '../NestedParagraph';
import ParaComponent from '../ParaComponent';

class Skills extends React.Component {
    render() {
        const { i18n } = this.props;

        return (
            <>
                <H3Component text={i18n.about.h3Skill} />
                <H4Component text="Front-End :" />
                <NestedParagraph pClass="firstP" text={i18n.about.skill1} />
                <ParaComponent pClass="secondP margin45" text={i18n.about.skill11} />
                <NestedParagraph pClass="firstP" text={i18n.about.skill2} />
                <ParaComponent pClass="secondP margin45" text={i18n.about.skill22} />
                <NestedParagraph pClass="firstP" text={i18n.about.skill3} />
                <ParaComponent pClass="secondP margin45" text={i18n.about.skill33} />
                <NestedParagraph pClass="firstP" text={i18n.about.skill4} />
                <ParaComponent pClass="secondP margin45" text={i18n.about.skill44} />
                <NestedParagraph pClass="firstP" text={i18n.about.skill5} />
                <ParaComponent pClass="secondP margin45" text={i18n.about.skill55} />
                <NestedParagraph pClass="firstP" text={i18n.about.skill6} />
                <ParaComponent pClass="secondP margin45" text={i18n.about.skill66} />
                <NestedParagraph pClass="firstP" text={i18n.about.skill7} />
                <ParaComponent pClass="secondP margin45" text={i18n.about.skill77} />
                <H4Component h4Class="marginTop" text="Design :" />
                <NestedParagraph pClass="firstP" text={i18n.about.skill8} />
                <NestedParagraph pClass="firstP" text={i18n.about.skill9} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { i18n } = state.translateReducer;

    return { i18n };
}

export default connect(mapStateToProps)(Skills);