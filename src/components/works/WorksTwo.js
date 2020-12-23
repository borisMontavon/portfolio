import React from 'react';
import { connect } from 'react-redux';
import H3Component from '../H3Component';
import WorksImage from './WorksImage';
import ParaComponent from '../ParaComponent';
import ToolsList from './ToolsList';
import WorksLinksContainer from './WorksLinksContainer';

class WorksTwo extends React.Component {
    render() {
        const { i18n } = this.props;

        return (
            <>
                <div className="row pt-5 pb-5">
                    <div className="col-lg-6">
                        <WorksImage imageClass="image_2" imageTitle="food survey" />
                    </div>
                    <div className="col-lg-6">
                        <H3Component h3Class="marginBottom" text="Description :" />
                        <ParaComponent pClass="marginBottom p" text={i18n.works.w2Description} />
                        <H3Component h3Class="marginBottom" text={i18n.works.h3Tools} />
                        <ul className="marginBottom skills_set">
                            <ToolsList icon="fab fa-html5 html" text="HTML5" />
                            <ToolsList icon="fab fa-css3-alt css" text="CSS3" />
                            <ToolsList icon="fab fa-sass sass" text={i18n.works.sass} />
                            <ToolsList icon="fab fa-js-square js" text="JavaScript" />
                            <ToolsList icon="fab fa-react react" text="React + Redux" />                           
                        </ul>
                        <WorksLinksContainer gitLink="" liveLink="" liveText={i18n.works.liveButton} />
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

export default connect(mapStateToProps)(WorksTwo);