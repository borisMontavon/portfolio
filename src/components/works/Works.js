import React from 'react';
import WorksMain from './WorksMain';
import Footer from '../footer/Footer';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/works.css';

class Works extends React.Component {
  render() {

    return (
      <>
        <WorksMain />
        <Footer />
      </>
    )
  }
}

export default Works;