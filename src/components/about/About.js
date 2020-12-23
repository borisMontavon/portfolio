import React from 'react';
import AboutMain from './AboutMain';
import Footer from '../footer/Footer';
import TopButton from '../TopButton';
import '../../css/about.css';

class About extends React.Component {
    render() {

        return (
            <>
                <AboutMain />
                <Footer />
                <TopButton />
            </>
        )
    }
}

export default About;