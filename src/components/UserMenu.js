import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import UserContent from "../content/UserContent";

function UserMenu({locale}) {
    return <div className={'user-menu'}>
        <Link to={'/dashboard'}>Dashboard</Link>
        <Link to={'/appointments'}>{UserContent.appointments[locale]}</Link>
        <Link to={'/settings'}>{UserContent.accountSettings[locale]}</Link>
    </div>
}

export default UserMenu
