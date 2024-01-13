// src/components/Layout.js
import React, {useState, cloneElement} from 'react';
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, functionObject, locale }) {
    return (
        <div>
            <header>
                <Header functionObject={functionObject} locale={locale} />
            </header>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}

export default Layout;
