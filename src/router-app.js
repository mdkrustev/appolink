import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/user/DashboardPage';
import storage from "./content/Storage";
import AppointmentsPage from "./pages/user/AppointmentsPage";
import SettingsPage from "./pages/user/SettingsPage";

function RouterApp() {

    const [locale, setLocale] = useState(storage.get('locale') || 'en'); // Default locale

    const functionObject = {
        openLocaleMenu: () => {
            const lw = document.querySelector('.language-switch');
            if (lw.classList.contains('open')) {
                lw.classList.remove('open')
            } else {
                lw.classList.add('open')
                document.addEventListener('click', () => {
                    if(!lw.contains(window.event.target)){
                        lw.classList.remove('open');
                    }
                })
            }
        },
        changeLocale: (newLocale) => {
            setLocale(newLocale);
            storage.set('locale', newLocale, 60 * 24 * 365)
            functionObject.openLocaleMenu()
        },
        isUserAuthorised: true
    }
    return (
        <Router>
            <Layout locale={locale} functionObject={functionObject}>
                <Routes> {/* Use Routes instead of Switch */}
                    <Route path="/" element={<HomePage locale={locale}/>}/>
                    <Route path="/login" element={<LoginPage locale={locale}/>}/>
                    <Route path="/register" element={<RegisterPage locale={locale}/>}/>
                    <Route path="/dashboard" element={<DashboardPage locale={locale} functionObject={functionObject}/>}/>
                    <Route path="/appointments" element={<AppointmentsPage locale={locale} functionObject={functionObject}/>}/>
                    <Route path="/settings" element={<SettingsPage locale={locale} functionObject={functionObject}/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default RouterApp;
