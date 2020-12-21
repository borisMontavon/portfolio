import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { connect, useDispatch } from 'react-redux';
import { translate } from '../../actions/config';
import Hamburger from './Hamburger';
import ProLinks from './ProLinks';
import NavMenuLinks from './NavMenuLinks';
import '../../css/navbar.css';

class Navbar extends React.Component {

    componentDidMount() {
        window.$ = $;

        // Navbar menu animation
        const burger = document.querySelector('.hamburgerIcon');
        const nav = document.querySelector('.navMenu'); 
        const navMenuLinks = document.querySelectorAll('.navMenu a, .navMenu button');

        burger.addEventListener('click', () => {
            //Toggle navMenu
            nav.classList.toggle('navMenu_active');

            //Animate navMenu links
            navMenuLinks.forEach((link) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = 'navMenuLinksSlide .5s cubic-bezier(0.785, 0.135, 0.15, 0.86) .4s forwards';
                }
            });

            //Hambuger animation
            burger.classList.toggle('toggle');
        });

        navMenuLinks.forEach((links) => {
            links.addEventListener('click', () => {
                navMenuLinks.forEach((link) => {
                    link.style.animation = '';
                });

                nav.classList.toggle('navMenu_active');
                burger.classList.toggle('toggle');
            });
        });

        // Navbar slide in and out on scroll
        const scroll = $(document).scrollTop();
        const navHeight = $('#navBar').outerHeight();

        $(window).on('scroll', function() {
            const scrolled = $(document).scrollTop();

            if (scrolled > navHeight) {
                $('#navBar').addClass('animate');
            } else {
                $('#navBar').removeClass('animate');
            }

            if (scrolled > scroll) {
                $('#navBar').removeClass('sticky');
            } else {
                $('#navBar').addClass('sticky');
            }
        });
    };

    render() {
        const { dispatch, i18n } = this.props;

        return (
        <>
            <header id="navBar">
                <Link className="name" to="/">Boris Montavon </Link>
                <div className="menuDisplay">
                    <div className="langDisplay">
                        <button className="langBtn" onClick={() => dispatch(translate("en"))}>EN</button>
                        <button className="langBtn" onClick={() => dispatch(translate("fr"))}>FR</button>
                    </div>
                    <div className="proLinks">
                        <ProLinks link="https://www.linkedin.com/in/boris-montavon/" icon="fab fa-linkedin" />
                        <ProLinks link="https://github.com/borisMontavon" icon="fab fa-github-square" />
                    </div>
                    <Hamburger />
                </div>
                <nav className="navMenu">
                    <ul className="navMenu__list">
                        <NavMenuLinks toLink="/" text={i18n.navbar.navLinks1} />
                        <NavMenuLinks toLink="/works" text={i18n.navbar.navLinks2} />
                        <NavMenuLinks toLink="/about" text={i18n.navbar.navLinks3} />
                        <li className="responsive__proLinks">
                            <ProLinks link="https://www.linkedin.com/in/boris-montavon/" icon="fab fa-linkedin" />
                            <ProLinks link="https://github.com/borisMontavon" icon="fab fa-github-square" />
                        </li>
                        <li className="responsive__langDisplay">
                            <button className="responsive__langBtn" onClick={() => dispatch(translate("en"))}>EN</button>
                            <button className="responsive__langBtn" onClick={() => dispatch(translate("fr"))}>FR</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
    }
}

const mapStateToProps = (state) => {
    const { i18n } = state.translateReducer;

    return { i18n };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

// function App() {
//   const counter = useSelector(state => state.counterReducer);
//   const isLogged = useSelector(state => state.loggedReducer);
  
//   return (
//     <div>
//       <h1>Entraînement Redux et React {counter}</h1>
//       {isLogged ? <h3>Valuable informations I shouldn't see</h3> : ''}
//     </div>
//   );
// }

// export default App;

// export default function Button() {
//     const dispatch = useDispatch();
    
//     return (
//         <div>
//             <button onClick={() => dispatch(increment())}>+</button>
//             <button onClick={() => dispatch(decrement())}>-</button>
//         </div>
//     )
// };