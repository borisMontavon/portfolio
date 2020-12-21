import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */
    anchors = {['page1', 'page2', 'page3', 'page4']}
    navigationTooltips = {[]}
    css3 = {true}
    navigation = {true}
    navigationPosition = {'bottom'}
    slidesNavigation = {true}
    responsiveHeight = {330}
    controlArrows = {false}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;