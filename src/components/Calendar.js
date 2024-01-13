import UserContent from "../content/UserContent"
import '../styles/calendar.css'
import {useState} from "react";

let week = 2;

function PopupMessage({locale, closePopup}) {
    return (
        <div className={'modal-page'}>
            <div className={'modal-panel'}>
                <div className={'closePopUp'} onClick={() => {
                    closePopup()
                }}>
                    <i className={'la la-times-circle'}/>
                </div>
                <div>Time from</div>
                <div>Time to</div>
                <div>Appointments Interval</div>
            </div>
        </div>
    )
}

function CompareDate(date) {
    const dateFormat = date.toISOString().split('T')[0];
    const nowFormat = (new Date()).toISOString().split('T')[0];

    return dateFormat === nowFormat
}

function generateWeeksArray(weeksBefore, weeksAfter, number) {
    const weeksArray = [];
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Reset the time to the beginning of the day
    const daysInAWeek = 7;

    // Calculate the start date of the current week (Monday)
    const currentWeekStart = new Date(currentDate);
    currentWeekStart.setDate(currentDate.getDate() - (currentDate.getDay() + 6) % 7);

    for (let i = -weeksBefore; i <= weeksAfter; i++) {
        const weekStart = new Date(currentWeekStart);
        weekStart.setDate(weekStart.getDate() + i * daysInAWeek);
        const weekArray = [];

        for (let day = 0; day < daysInAWeek; day++) {

            const currentDate = new Date(weekStart);
            currentDate.setDate(weekStart.getDate() + (day));

            const currentDay = new Date(weekStart);
            currentDay.setDate(weekStart.getDate() + day);
            const dayOfWeek = currentDay.getDay();
            const dayValue = dayOfWeek === 0 ? 7 : dayOfWeek; // Adjust Sunday to 7
            weekArray.push({
                day: dayValue,
                date: currentDay.getDate(),
                month: currentDay.getMonth() + 1, // Month is 0-based, so add 1
                year: currentDay.getFullYear(),
                isCurrent: CompareDate(currentDate),
            });
        }

        weeksArray.push(weekArray);
    }

    if (number)
        return weeksArray[number]
    return weeksArray;
}


function ColumnDays(n = 2, locale) {
    //console.log(generateWeeksArray(2, 4))
    return generateWeeksArray(n, 4, n).map((day, index) => {
        return <div className={'day-slots'} key={index}>
            <div className={'day-month'}>
                {UserContent.months[day.month][locale]}
            </div>
            <div className={`day-date ${(day.isCurrent === true ? 'current' : '')}`}>
                {day.date}
            </div>
            <div className={'day-name'}>
                {UserContent.days[day.day][locale]}
            </div>
        </div>
    })
}


function Calendar({locale}) {

    const [isPopupVisible, setPopupVisible] = useState(false);

    const openPopup = () => {
        //ColumnDays()
        setPopupVisible(true);
        setTimeout(() => {
            const modalPage = document.querySelector('.modal-page');
            modalPage.classList.add('open')
        }, 0)


    };

    const closePopup = () => {
        const modalPage = document.querySelector('.modal-page');
        modalPage.classList.remove('open')
        setTimeout(() => {
            setPopupVisible(false)
        }, 300)
    };

    function nextWeek() {
        const setWeek = ColumnDays(++week, locale)
        const dates = document.querySelector('.dates');
        dates.innerHTML = setWeek;
    }

    function prevWeek() {
        if (week > 1)
            ColumnDays(--week, locale)
    }

    return (
        <div>
            <button onClick={() => {
                openPopup()
            }}>{UserContent.generateTimeSlots[locale]}</button>

            <div className={'days-column'}>
                <i onClick={prevWeek} className={'week-prev la la-arrow-alt-circle-left'}/>
                <div className={'dates'}>{ColumnDays(week, locale)}</div>
                <i onClick={nextWeek} className={'week-next la la-arrow-alt-circle-right'}/>
            </div>

            {isPopupVisible && (
                <PopupMessage locale={locale} closePopup={closePopup}/>
            )}
        </div>
    )
}

export default Calendar;

