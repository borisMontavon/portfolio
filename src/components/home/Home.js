import React from 'react';
import ScrolldownFp from './ScrolldownFp';
import Fullpage from './Fullpage';
import '../../css/home.css';

class Home extends React.Component {
  render() {

    return (
      <>
        <ScrolldownFp />
        <Fullpage />
      </>
    )
  }
}

export default Home;