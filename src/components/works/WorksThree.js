import React from 'react';
import { connect } from 'react-redux';
import H3Component from '../H3Component';
import WorksImage from './WorksImage';
import ParaComponent from '../ParaComponent';
import ToolsList from './ToolsList';
import PotlatchLiveLink from './PotlatchLiveLink';

class WorksThree extends React.Component {
    render() {
        const { i18n } = this.props;

        return (
            <>
                <div className="row pt-5 pb-5">
                    <div className="col-lg-6">
                        <WorksImage imageClass="image_3" imageTitle="potlatch" />
                    </div>
                    <div className="col-lg-6">
                        <H3Component h3Class="marginBottom" text="Description :" />
                        <ParaComponent pClass="marginBottom p" text={i18n.works.w3Description} />
                        <H3Component h3Class="marginBottom" text={i18n.works.h3Tools} />
                        <ul className="marginBottom skills_set">
                            <ToolsList icon="fab fa-wordpress wordpress" text="WordPress" />
                            <ToolsList icon="fab fa-elementor elementor" text="Elementor + Essentials Addons for Elementor + Header, Footer & Blocks" />
                            <ToolsList icon="fas fa-plug plug" text="Yoast SEO" />
                            <ToolsList icon="fas fa-plug plug" text="Modern Events Calendar Lite" />
                            <ToolsList icon="fas fa-plug plug" text="Contact Form 7" />
                            <ToolsList icon="fas fa-plug plug" text="Ocean Extra, used in addition of OceanWP theme" />
                            <ToolsList icon="fab fa-css3-alt css" text="CSS3" />
                        </ul>
                        <PotlatchLiveLink liveLink="https://boris.alwaysdata.net/potlatch/" liveText={i18n.works.liveButton} />
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

export default connect(mapStateToProps)(WorksThree);