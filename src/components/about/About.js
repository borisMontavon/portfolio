import React from 'react';
import AboutMain from './AboutMain';
import Footer from '../footer/Footer';
import '../../css/about.css';

class About extends React.Component {
    render() {

        return (
            <>
                <AboutMain />
                <Footer />
            </>
        )
    }
}

export default About;