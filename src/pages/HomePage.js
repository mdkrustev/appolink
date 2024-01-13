import React, {Children, useEffect} from 'react';
import AppContent from "../content/AppContent";


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add a class when the element is in the viewport
function addClassWhenInViewport() {
    let times = 0
    document.querySelectorAll('.feature').forEach(element => {
        if (isElementInViewport(element)) {
            times++;
            setTimeout(() => {
                element.classList.add('visible');
            }, 50 * times)
        }
    });
}

function HomePage({locale}) {
    document.title = 'AppoLink';

    AppContent.setLocale(locale)

    useEffect(() => {
        window.addEventListener('scroll', addClassWhenInViewport);
        addClassWhenInViewport()
    })

    addClassWhenInViewport()
    return <div>
        <div className={'section-1'}/>
        <div className={'content section-1-content'}>
            <div className={'flex flex-wrap'}>
                <div className={'section-1-info'}>
                    {AppContent.info[`text_${locale}`]}
                    <div className={'get-started'}>
                        <button>{AppContent.getStarted()}</button>
                    </div>
                </div>
                <div className={'section-1-img'}>
                    <img src={'/img1.png'}/>
                </div>
            </div>
        </div>
        <div className={'content'}>
            <div className={'flex flex-wrap feature-container'}>
                {AppContent.features.map((item) => (
                    <div key={item.id} className={'feature'}>
                        <div className={'title flex'}>
                            <i style={{color: item.iconColor}} className={`la ${item.icon}`}/>
                            {AppContent.ts(item).title}
                        </div>
                        {AppContent.ts(item).text}
                    </div>
                ))}
            </div>
        </div>
        <div className={'section-2'}>
            <div className={'content'}>
                <h1 className={'section-title-w'}>Industries</h1>
                <div className={'flex flex-wrap'}>
                    <div className={'flex flex-wrap industries'}>
                        {AppContent.industries.map((item) => (
                            <div key={item.id} className={'ind'}>
                                <div className={'title'}><i style={{color: item.iconColor}} className={`la ${item.icon}`}/>
                                    {AppContent.ts(item).title}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={'section-2-img'}>
                        <img src={'/img2.png'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default HomePage;
