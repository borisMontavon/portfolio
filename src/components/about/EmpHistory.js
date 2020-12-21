import React from 'react';
import { connect } from 'react-redux';
import H3Component from '../H3Component';
import H4Component from '../H4Component';
import NestedParagraph from '../NestedParagraph';
import ParaComponent from '../ParaComponent';

class EmpHistory extends React.Component {
    render() {
        const { i18n } = this.props;

        return (
            <>
                <H3Component text={i18n.about.h3Emp} />
                <H4Component text="Castorama" />
                <ParaComponent pClass="dates" text={i18n.about.empDates1} />
                <ParaComponent pClass="secondP" text={i18n.about.empJob1} />
                <NestedParagraph pClass="firstP" text={i18n.about.empDesc11} />
                <NestedParagraph pClass="firstP" text={i18n.about.empDesc12} />
                <NestedParagraph pClass="firstP" text={i18n.about.empDesc13} />
                <NestedParagraph pClass="firstP" text={i18n.about.empDesc14} />
                <NestedParagraph pClass="firstP marginBottom" text={i18n.about.empDesc15} />
                <H4Component text="Top Office" />
                <ParaComponent pClass="dates" text={i18n.about.empDates2} />
                <ParaComponent pClass="secondP" text={i18n.about.empJob2} />
                <ParaComponent pClass="dates" text={i18n.about.empDates3} />
                <ParaComponent pClass="secondP" text={i18n.about.empJob3} />
                <NestedParagraph pClass="firstP" text={i18n.about.empDesc21} />
                <NestedParagraph pClass="firstP" text={i18n.about.empDesc22} />
                <NestedParagraph pClass="firstP" text={i18n.about.empDesc23} />
                <NestedParagraph pClass="firstP marginBottom" text={i18n.about.empDesc24} />
                <H4Component text={i18n.about.empTitle1} />
                <ParaComponent pClass="dates" text={i18n.about.empDates4} />
                <ParaComponent pClass="secondP" text={i18n.about.empJob4} />
                <NestedParagraph pClass="firstP" text={i18n.about.empDesc31} />
                <NestedParagraph pClass="firstP" text={i18n.about.empDesc32} />
                <NestedParagraph pClass="firstP" text={i18n.about.empDesc33} />
                <NestedParagraph pClass="firstP" text={i18n.about.empDesc34} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { i18n } = state.translateReducer;

    return { i18n };
}

export default connect(mapStateToProps)(EmpHistory);