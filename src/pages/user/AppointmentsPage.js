import React from 'react';
import UserMenu from '../../components/UserMenu'
import '../../styles/user.css'
import UserContent from "../../content/UserContent";
import Calendar from "../../components/Calendar"



function AppointmentPage({locale, functionObject}) {
    document.title = UserContent.appointments[locale]
    return <div className={'content dashboard'}>
        <UserMenu locale={locale} />
        <div className={'dashboard-content'}>
            <h4><i className={'la la-calendar'} /> {UserContent.appointments[locale]}</h4>
            <Calendar locale={locale}/>
        </div>

    </div>
}

export default AppointmentPage;
