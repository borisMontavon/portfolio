import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import H2Component from '../H2Component';
import ParaComponent from '../ParaComponent';
import ButtonSection from './ButtonSection';

class SectionThree extends React.Component {
    render() {
        const { i18n } = this.props;
        
        return (
            <>
                <div className="section s3">
                    <Link to="/about" className="img__s3">
                        <div className="meta__container">
                            <H2Component h2Class="main__title" text={i18n.home.s3Title} />
                            <ParaComponent pClass="description" text={i18n.home.s3Description1} />
                            <ParaComponent pClass="description" text={i18n.home.s3Description2} />
                        </div>
                        <div className="black__curtain"></div>
                    </Link>
                    <ButtonSection toLink="/about" text={i18n.home.sectionButton} />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { i18n } = state.translateReducer;

    return { i18n };
}

export default connect(mapStateToProps)(SectionThree);