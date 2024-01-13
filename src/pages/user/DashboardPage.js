import React from 'react';
import UserMenu from '../../components/UserMenu'
import '../../styles/user.css'

function DashboardPage({locale, functionObject}) {
    document.title = `Dashboard`
    return <div className={'content dashboard'}>
        <UserMenu locale={locale} />
        <div className={'dashboard-content'}>
            <h4><i className={'la la-dashboard'}/> Dashboard</h4>
        </div>
    </div>
}

export default DashboardPage;
