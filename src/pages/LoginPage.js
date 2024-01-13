// src/pages/HomePage.js
import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import AppContent from "../content/AppContent";
import RegisterPage from "./RegisterPage";
import Google from "../components/Google";
import {panelForm} from "../service/PanelInterface";

function Submit(locale) {

    const errorRow = document.querySelector('.errorMsg');
    errorRow.classList.remove('error')
    const errorMessage = errorRow.querySelector('.error-message');
    if (errorMessage)
        errorMessage.remove();

    panelForm.postValidate(`/api/login?lg=${locale}`, '.form', (msg) => {
        if (msg) {

            //const registerPanel = document.querySelector('#register');
            //registerPanel.innerHTML = msg;
        }
    })
}

function LoginPage({locale}) {
    AppContent.setLocale(locale)
    document.title = `ApoLink - ${AppContent.account.login[locale]}`
    return <div className={'panel pm top30 form'}>
        <h2>{AppContent.account.login[locale]}</h2>
        <div className={'row'}>
            <label>{AppContent.account.email[locale]}</label>
            <input type="text" name={'email'} placeholder={''}/>
        </div>
        <div className={'row'}>
            <label>{AppContent.account.password[locale]}</label>
            <input type={'password'} name={'password'} placeholder={''}/>
        </div>
        <div className={'row errorMsg'}>
            <error-mesage name={'errorMsg'}/>
        </div>
        <div className={'row pointer google-login center'}>
            <img src={'/google.svg'}/> {AppContent.account.loginWithGoogle[locale]}
        </div>

        <div className="row center">
            <div onClick={() => {
                Submit(locale)
            }} className={'submit'}>{AppContent.account.login[locale]}</div>
        </div>
        <div className={'row center'}>
            <Link className={'margin10'} to={'/forgotten-passwor'}>{AppContent.account.forgottenPassword[locale]}</Link>
            <Link className={'margin10'} to={'/register'}>{AppContent.account.register[locale]}</Link>
        </div>
    </div>;
}

export default LoginPage;
