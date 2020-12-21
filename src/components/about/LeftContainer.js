import React from 'react';
import { connect } from 'react-redux';
import H2Component from '../H2Component';
import ParaComponent from '../ParaComponent';
import Tooltip from './Tooltip';
import LinkComponent from '../LinkComponent';

class LeftContainer extends React.Component {
    render() {
        const { i18n } = this.props;

        return (
            <>
                <div className="left__container">
                    <div className="infos__container">
                        <H2Component text={i18n.about.h2About} />
                        <ParaComponent text={i18n.about.about1} />
                        <ParaComponent text={i18n.about.about2} />
                        <ParaComponent text={i18n.about.about3} />
                        <ParaComponent text={i18n.about.about4} />
                        <ParaComponent text={i18n.about.about5} />
                        <ParaComponent text={i18n.about.about6} />
                        <ParaComponent text={i18n.about.about7} />
                        <H2Component text="soft skills" />
                        <ParaComponent text={i18n.about.about8} />
                        <a href="https://www.16personalities.com/profiles/1b213f5a64c60" className="personalityContainer" target="_blank" rel="noreferrer">
                            <img src="./assets/img/isfj-defender-s1-v1-male.svg" alt="Boris' personality test avatar" />
                            <div className="pContainer">
                                <ParaComponent text="Boris" />
                                <ParaComponent text="Type : Turbulent Defender" />
                                <ParaComponent text="Code : ISFJ-T" />
                            </div>
                        </a>
                        <ParaComponent text={i18n.about.about9} />
                        <H2Component text="contact" />
                        <ParaComponent text={i18n.about.about10} />
                        <ul>
                            <li>
                                <Tooltip />
                            </li>
                            <li>
                                <LinkComponent link="https://www.linkedin.com/in/boris-montavon/" text="Linkedin" />
                            </li>
                            <li>
                                <LinkComponent link="https://github.com/borisMontavon" text="GitHub" />
                            </li>
                        </ul>
                    </div>
                    <div className="pp__container"></div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { i18n } = state.translateReducer;

    return { i18n };
}

export default connect(mapStateToProps)(LeftContainer);