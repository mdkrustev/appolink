function AppContent() {

    const appName = 'AppoLink'
    const customSupportEmail = 'appolink.noreply@gmail.com'
    let locale = 'en';

    return {
        appName,
        backendApi: 'http://localhost:3003',
        setLocale: (l) => {
            locale = l;
        },
        ts: (model) => {
            const tsModel = {}
            if (model.title)
                tsModel.title = {en: model.title.en, de: model.title.de}[locale]
            if (model.text)
                tsModel.text = {en: model.text.en, de: model.text.de}[locale]
            return tsModel;
        },
        account: {
            email: {en: 'Email', de: 'Email'},
            firstName: {en: 'First name', de: 'Vorname'},
            lastName: {en: 'Last name', de: 'Nachname'},
            password: {en: 'Password', de: 'Passwort'},
            cPassword: {en: 'Confirm Password', de: 'Bestätige das Passwort'},
            register: {en: 'Register', de: 'Benutzerkonto erstellen'},
            forgottenPassword: {en: 'Forgotten password', de: 'Passwort vergessen'},
            login: {en: 'Login', de: 'Anmelden'},
            loginWithGoogle: {en: 'Login with Google', de: 'Melden Sie sich mit Google an'},
            alreadyHaveAccount: {
                en: 'You already have an account then go to',
                de: 'Sie haben bereits ein Konto, dann gehen Sie zu'
            },
            registerReady: {
                subject: {
                    en: 'Account Activation - Verification Code Required',
                    de: 'Kontoaktivierung - Bestätigungscode erforderlich'
                },
                title: {en: 'Dear', de: 'Liebe'},
                text: {
                    en: 'To activate your account, please enter the verification code sent to your email.',
                    de: 'Bitte geben Sie zur Kontoaktivierung den per E-Mail erhaltenen Bestätigungscode ein.'
                }
            },
            confirm: {
                en: 'Confirm',
                de: 'Bestätigen'
            },
            verificationCode: {
                en: 'Verification code',
                de: 'Bestätigungscode'
            }
        },
        headerNav: [
            {
                id: 1,
                title: {
                    en: 'Home',
                    de: 'Home',
                },
                path: '/'
            },
            {
                id: 2,
                title: {
                    en: 'Pricing',
                    de: 'Preisgestaltung',
                },
                path: '/pricing'
            },
            {
                id: 3,
                title: {
                    en: 'Login',
                    de: 'Anmeldung',
                },
                path: '/login'
            }
        ],
        info: {
            text_en: `Welcome to the future of scheduling and organization with ${appName} – the most intuitive and efficient appointment calendar app on the market. Say goodbye to the hassle of missed meetings, double bookings, and disorganized schedules. With our cutting-edge technology, managing your appointments has never been easier.`,
            text_de: `Willkommen in der Zukunft der Terminplanung und Organisation mit ${appName} – der intuitivsten und effizientesten Terminplanungs-App auf dem Markt. Sag auf Wiedersehen zu den Problemen mit verpassten Meetings, doppelten Buchungen und chaotischen Zeitplänen. Mit unserer hochmodernen Technologie war die Verwaltung Ihrer Termine noch nie so einfach.`
        },
        features: [
            {
                id: 1,
                iconColor: '#3d00ee',
                icon: 'la-calendar-check-o',
                title: {
                    en: 'Effortless Scheduling',
                    de: 'Einfache Terminplanung'
                },
                text: {
                    en: `${appName} streamlines the scheduling process, allowing you to book, reschedule, and cancel appointments with just a few taps. Say goodbye to the back-and-forth emails and phone calls – now, you can effortlessly coordinate with your clients, colleagues, and friends.`,
                    de: `${appName} vereinfacht den Terminplanungsprozess und ermöglicht es Ihnen, Termine mit nur wenigen Klicks zu buchen, umzuplanen und abzusagen. Verabschieden Sie sich von den hin und her gehenden E-Mails und Telefonanrufen – jetzt können Sie mühelos mit Ihren Kunden, Kollegen und Freunden koordinieren.`
                }
            },
            {
                id: 2,
                iconColor: '#d04242',
                icon: 'la-handshake',
                title: {
                    en: 'Share Your Schedule Seamlessly',
                    de: 'Teilen Sie Ihren Zeitplan nahtlos'
                },
                text: {
                    en: `With ${appName}, we've taken scheduling to the next level by empowering you to share your personal calendar with clients, colleagues, and friends effortlessly. Now, you can present your availability in an organized and user-friendly way, allowing others to book appointments at their convenience.`,
                    de: `Mit ${appName} haben wir die Terminplanung auf die nächste Stufe gehoben, indem wir es Ihnen ermöglichen, Ihren persönlichen Kalender mühelos mit Kunden, Kollegen und Freunden zu teilen. Jetzt können Sie Ihre Verfügbarkeit auf organisierte und benutzerfreundliche Weise präsentieren und anderen die Buchung von Terminen nach ihrem eigenen Ermessen ermöglichen.`
                }
            },
            {
                id: 3,
                iconColor: '#888',
                icon: 'la-clock',
                title: {
                    en: 'Stay on Top of Your Day',
                    de: 'Bleiben Sie auf dem Laufenden'
                },
                text: {
                    en: `Our user-friendly interface offers a clear and comprehensive view of your daily, weekly, or monthly schedule. Never miss an important appointment again with customizable notifications and reminders that keep you on track.`,
                    de: `Unsere benutzerfreundliche Oberfläche bietet einen klaren und umfassenden Überblick über Ihren täglichen, wöchentlichen oder monatlichen Zeitplan. Verpassen Sie nie wieder einen wichtigen Termin dank anpassbarer Benachrichtigungen und Erinnerungen, die Sie auf Kurs halten.`
                }
            },
            {
                id: 4,
                iconColor: '#e21f9b',
                icon: 'la-chart-area',
                title: {
                    en: 'Boost Your Productivity',
                    de: 'Steigern Sie Ihre Produktivität'
                },
                text: {
                    en: `${appName} is not just an appointment calendar; it's your productivity companion. Seamlessly integrate your tasks, to-do lists, and notes, so you can efficiently manage your time and accomplish more in your day.`,
                    de: `${appName} ist nicht nur ein Terminplaner; es ist Ihr Produktivitätspartner. Integrieren Sie nahtlos Ihre Aufgaben, To-Do-Listen und Notizen, um Ihre Zeit effizient zu verwalten und mehr in Ihrem Tag zu erreichen.`
                }
            },
            {
                id: 5,
                iconColor: '#c2d9ff',
                icon: 'la-globe',
                title: {
                    en: 'Sync Across Devices',
                    de: 'Synchronisieren Sie auf allen Geräten'
                },
                text: {
                    en: `Access your calendar from anywhere, on any device. Whether you're in the office, at home, or on the go, your appointments and events are always synchronized for your convenience.`,
                    de: `Greifen Sie von überall und auf jedem Gerät auf Ihren Kalender zu. Egal, ob Sie im Büro, zu Hause oder unterwegs sind, Ihre Termine und Veranstaltungen sind immer für Ihre Bequemlichkeit synchronisiert.`
                }
            },
            {
                id: 6,
                iconColor: '#ff0000',
                icon: 'la-rocket',
                title: {
                    en: 'Advanced Features for Professionals',
                    de: 'Erweiterte Funktionen für Profis'
                },
                text: {
                    en: `For businesses and professionals, ${appName} offers advanced features such as client management, payment processing, and analytics to help you grow your business and streamline your operations.`,
                    de: `Für Unternehmen und Profis bietet ${appName} erweiterte Funktionen wie Kundenmanagement, Zahlungsabwicklung und Analysen, um Ihr Unternehmen zu steigern und Ihre Abläufe zu optimieren.`
                }
            },
            {
                id: 7,
                iconColor: '#ffc300',
                icon: 'la-key',
                title: {
                    en: 'Security and Privacy',
                    de: 'Sicherheit und Datenschutz'
                },
                text: {
                    en: `We take your data security seriously. ${appName} employs state-of-the-art encryption and security measures to protect your sensitive information, ensuring your privacy is our top priority.`,
                    de: `Wir nehmen Ihre Datensicherheit ernst. ${appName} verwendet modernste Verschlüsselungs- und Sicherheitsmaßnahmen zum Schutz Ihrer sensiblen Informationen und gewährleistet, dass Ihre Privatsphäre oberste Priorität hat.`
                }
            },
            {
                id: 8,
                iconColor: '#83d229',
                icon: 'la-network-wired',
                title: {
                    en: 'API Integration for Your Website',
                    de: 'API-Integration für Ihre Website'
                },
                text: {
                    en: `Are you looking to enhance your website's functionality with seamless appointment booking? Our API is the solution you've been searching for. Integrate our powerful booking system into your website and offer your customers a hassle-free way to schedule appointments online.`,
                    de: `Möchten Sie die Funktionalität Ihrer Website durch nahtlose Terminbuchungen verbessern? Unsere API ist die Lösung, nach der Sie gesucht haben. Integrieren Sie unser leistungsstarkes Buchungssystem in Ihre Website und bieten Sie Ihren Kunden eine unkomplizierte Möglichkeit, Termine online zu buchen.`
                }
            },
            {
                id: 9,
                iconColor: '#9129d2',
                icon: 'la-bullseye',
                title: {
                    en: 'Get Started Today',
                    de: 'Starten Sie noch heute'
                },
                text: {
                    en: `Discover the power of efficient scheduling and organization with ${appName}. Start your journey towards a more organized, productive, and stress-free life. Join thousands of satisfied users who have already transformed their schedules with our app.`,
                    de: `Entdecken Sie die Kraft effizienter Terminplanung und Organisation mit ${appName}. Starten Sie Ihre Reise zu einem organisierteren, produktiveren und stressfreieren Leben. Schließen Sie sich Tausenden zufriedener Benutzer an, die bereits ihren Zeitplan mit unserer App transformiert haben.`
                }
            }
        ],
        industries: [
            {
                id: 1,
                icon: 'la-hospital',
                iconColor: '#336633',
                title: {
                    en: 'Healthcare',
                    de: 'Gesundheitswesen'
                }
            },
            {
                id: 2,
                icon: 'la-spa',
                iconColor: '#003366',
                title: {
                    en: 'Beauty and Wellness',
                    de: 'Schönheit und Wellness'
                }
            },
            {
                id: 3,
                icon: 'la-briefcase',
                iconColor: '#663333',
                title: {
                    en: 'Professional Services',
                    de: 'Professionelle Dienstleistungen'
                }
            },
            {
                id: 4,
                icon: 'la-hotel',
                iconColor: '#663300',
                title: {
                    en: 'Hospitality and Tourism',
                    de: 'Gastgewerbe und Tourismus'
                }
            },
            {
                id: 5,
                icon: 'la-school',
                iconColor: '#006600',
                title: {
                    en: 'Education',
                    de: 'Bildung'
                }
            },
            {
                id: 6,
                icon: 'la-car',
                iconColor: '#660000',
                title: {
                    en: 'Automotive',
                    de: 'Automobilbranche'
                }
            },
            {
                id: 7,
                icon: 'la-user-tie',
                iconColor: '#663366',
                title: {
                    en: 'Personal Services',
                    de: 'Persönliche Dienstleistungen'
                }
            },
            {
                id: 8,
                icon: 'la-globe-europe',
                iconColor: '#333366',
                title: {
                    en: 'Government and Public Services',
                    de: 'Regierung und öffentliche Dienstleistungen'
                }
            },
            {
                id: 9,
                icon: 'la-film',
                iconColor: '#660033',
                title: {
                    en: 'Entertainment and Events',
                    de: 'Unterhaltung und Veranstaltungen'
                }
            },
            {
                id: 10,
                icon: 'la-home',
                iconColor: '#996633',
                title: {
                    en: 'Home Services',
                    de: 'Haushaltsdienstleistungen'
                }
            },
            {
                id: 11,
                icon: 'la-store',
                iconColor: '#333399',
                title: {
                    en: 'Retail',
                    de: 'Einzelhandel'
                }
            },
            {
                id: 12,
                icon: 'la-shopping-cart',
                iconColor: '#336666',
                title: {
                    en: 'E-commerce',
                    de: 'E-Commerce'
                }
            },
            {
                id: 13,
                icon: 'la-gavel',
                iconColor: '#993333',
                title: {
                    en: 'Legal and Notary Services',
                    de: 'Rechts- und Notardienstleistungen'
                }
            },
            {
                id: 14,
                icon: 'la-building',
                iconColor: '#996600',
                title: {
                    en: 'Real Estate',
                    de: 'Immobilien'
                }
            },
            {
                id: 15,
                icon: 'la-basketball-ball',
                iconColor: '#336633',
                title: {
                    en: 'Sports and Recreation',
                    de: 'Sport und Freizeit'
                }
            },
            {
                id: 16,
                icon: 'la-user-friends',
                iconColor: '#994c33',
                title: {
                    en: 'Human Resources (HR)',
                    de: 'Personalwesen'
                }
            },
        ],
        locales: {
            en: {en: 'English', de: 'Englisch'},
            de: {en: 'German', de: 'Deutsch'},
        },
        getStarted: () => {
            const data = {
                en: 'Get started',
                de: 'Loslegen'
            }
            return data[locale];
        },
        localeToCountryFlag(langCode) {
            const countryCode = (countryCode) => `https://purecatamphetamine.github.io/country-flag-icons/1x1/${countryCode}.svg`
            switch (langCode) {
                case 'en' :
                    return countryCode('GB')
                default:
                    return countryCode(langCode.toUpperCase())
            }
        },
    }

}

export default AppContent()
