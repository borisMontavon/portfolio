import React from 'react';
import { connect } from 'react-redux';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';

class WorksMain extends React.Component {
    render() {
        const { i18n } = this.props;

        return (
            <>
                <div className="container-fluid">
                    <FirstRow text={i18n.works.h2Works} />
                    <SecondRow />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { i18n } = state.translateReducer;

    return { i18n };
}

export default connect(mapStateToProps)(WorksMain);