import React from 'react';
import UserMenu from '../../components/UserMenu'
import '../../styles/user.css'
import UserContent from "../../content/UserContent";

function SettingsPage({locale, functionObject}) {
    document.title = UserContent.accountSettings[locale]
    return <div className={'content dashboard'}>
        <UserMenu locale={locale} />
        <div className={'dashboard-content'}>
            <h4><i className={'la la-cog'} /> {UserContent.accountSettings[locale]}</h4>
        </div>
    </div>
}

export default SettingsPage;
