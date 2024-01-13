// src/pages/HomePage.js
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import AppContent from "../content/AppContent";
import {panelForm} from "../service/PanelInterface";


function RegisterPage({locale}) {


    AppContent.setLocale(locale)
    document.title = `${AppContent.appName} - ${AppContent.account.register[locale]}`

    const [isVisible, setIsVisible] = useState(false);
    const [responseName, setResponseName] = useState('');
    const [authorization, setAuthorization] = useState('');

    const submitRegister = (locale) => {
        panelForm.postValidate(`/api/register?lg=${locale}`, '.register-form', (ok) => {
            if(ok) {
                setResponseName(ok.name)
                setAuthorization(ok.authorization)
            }
            setIsVisible(true)
        })
    }

    const submitAccountActivate = (locale) => {
        panelForm.postValidate(`/api/activate?lg=${locale}`, '.activate-form', (ok) => {
            alert('Ready');
            window.localStorage.setItem('authorization', ok.authorization)
            window.location.href = '/dashboard'
        }, {authorization})
    }

    return <div id={'register'} className={'panel pm top30'}>
        {isVisible &&
        <div className={'successNotify activate-form form'}>
            <h3 className={'success'}>{AppContent.account.registerReady.subject[locale]}</h3>
            <h3>{AppContent.account.registerReady.title[locale]} {responseName}</h3>
            <div>{AppContent.account.registerReady.text[locale]}</div>
            <div className={'row field'}>
                <label>{AppContent.account.verificationCode[locale]}</label>
                <input type="text" name={'act_code'}/>
            </div>
            <div className="row center">
                <div onClick={() => {
                    submitAccountActivate(locale)
                }} className={'submit'}>{AppContent.account.confirm[locale]}</div>
            </div>
        </div>}
        {!isVisible &&
        <div className={'inputData register-form form'}>
            <h2>{AppContent.account.register[locale]}</h2>
            <div className={'row field'}>
                <label>{AppContent.account.email[locale]}</label>
                <input type="text" name={'email'} placeholder={''}/>
            </div>
            <div className={'flex'}>
                <div className={'c50 row field'}>
                    <label>{AppContent.account.firstName[locale]}</label>
                    <input type="text" name={'first_name'} placeholder={''}/>
                </div>
                <div className={'c50 row field'}>
                    <label>{AppContent.account.lastName[locale]}</label>
                    <input type="text" name={'last_name'} placeholder={''}/>
                </div>
            </div>
            <div className={'row field'}>
                <label>{AppContent.account.password[locale]}</label>
                <input type={'password'} name={'password'} placeholder={''}/>
            </div>
            <div className={'row field'}>
                <label>{AppContent.account.cPassword[locale]}</label>
                <input type={'password'} name={'c_password'} placeholder={''}/>
            </div>
            <div className="row center">
                <div onClick={() => {
                    submitRegister(locale)
                }} className={'submit'}>{AppContent.account.register[locale]}</div>
            </div>
            <div className={'row center'}>
                <span>{AppContent.account.alreadyHaveAccount[locale]} </span>
                <Link to={'/login'}>{AppContent.account.login[locale]}</Link>
            </div>
        </div>}
    </div>;
}

export default RegisterPage;
