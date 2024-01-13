// src/components/Header.js
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import AppContent from "../content/AppContent";


function Header({functionObject, locale}) {
    AppContent.setLocale(locale)
    let [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <nav>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <div className={'content'}>
                    <img className={'header-logo'} src={'/logo2.png'}/>
                    <div className={'links'}>
                        {AppContent.headerNav.map((n) => (
                            (n.id === 3 && functionObject.isUserAuthorised) ? null : (
                                <Link key={n.id} to={n.path}>{AppContent.ts(n).title}</Link>
                            )
                        ))}
                        {functionObject.isUserAuthorised &&
                        <Link to={'/dashboard'} className={'profile-header'}>
                            <i className={'la la-user'}/>
                        </Link>}
                        <div className={'language-switch'}>
                            <div className={'flex pointer'} onClick={functionObject.openLocaleMenu}>
                                <i className={'la la-angle-down'}/>
                                <img className={'flag-locale'} src={AppContent.localeToCountryFlag(locale)}/>
                                <span>{locale}</span>
                            </div>
                            <div className={'drop-locale'}>
                                <div className={'locale-choice'}
                                     onClick={() => functionObject.changeLocale('en')}>{AppContent.locales.en[locale]}</div>
                                <div className={'locale-choice'}
                                     onClick={() => functionObject.changeLocale('de')}>{AppContent.locales.de[locale]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'content'}>
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"/>
                    <div className="bar"/>
                    <div className="bar"/>
                </div>
            </div>
        </nav>
    );
}

export default Header;
