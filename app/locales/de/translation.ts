export default {
    who_am_i: "Wer bin ich?",
    description: "Angehender Wirtschaftsingenieur. Privat leidenschaftlicher Softwareentwickler mit Fokus auf Web- und Gameserver-Architektur. Aktuell Student am Karlsruher Institut für Technologie.", 
    toProjects: "Zu meinen Projekten", 
    about_me: {
        title: "Über mich", 
        description: "Ich bin Student und Tutor im Kurs Programmieren 1: Java am KIT und beschäftige mich neben meinem Studium intensiv mit Softwareentwicklung. Privat entwickle ich Webanwendungen, Tools und Gameserver-Plugins, die in echten Projekten eingesetzt werden. Dabei reizt mich vor allem, Systeme zu bauen, die stabil laufen, klar strukturiert sind und nicht beim ersten Sonderfall zusammenbrechen.",
    }, 
    skills: {
        title: "Technische Fähigkeiten", 
        languages: "Programmiersprachen & Frameworks", 
        tools: "Tools & Infrastruktur"
    },
    projects: {
        title: "Ausgewählte Projekte", 
        persistent_vehicles: {
            title: "GG Persistent Vehicles", 
            description: "Ein Fahrzeugpersistenz-System für die Modding-Plattform FiveM (GTA5), das es Spielern ermöglicht, ihre Fahrzeuge dauerhaft zu speichern und zu verwalten. Entwickelt mit Fokus auf Leistung, Zuverlässigkeit und Benutzerfreundlichkeit. Mithilfe eines UIs ist die Verwaltung von Fahrzeugen einfach und intuitiv gestaltet. Eine aktuelle version geschrieben in C# ist noch in Entwicklung und zu ca. 90% fertiggestellt.",
        },
        mensa_scraper: {
            title: "Studentenwerk Mensa Manager", 
            description: "Ein kleines Projekt über einen in Java geschriebenen Mensa-Auswähler. Arbeitet mit einer API, um Mahlzeitendaten vom Studentenwerk Karlsruhe zu erhalten. Mit dieser App kann man tägliche und zukünftige Mahlzeiten auswählen und die Nährwerte sowie Mahlzeitenhistorie einsehen."
        },
        porsche_case_study: {
            title: "Porsche Procurment Case Study",
            description: "A one week project, were we had to complete 5 tasks about CO2 Emission reduction at Porsche. Furthermore we had to give advice to what Porsche can do about their current CO2 situation, especially in the supply chain. After the 1 week preperation time, we had the opportunity to present our solutions to top management staff at Porsche Procurment (vize president). On Top we had the very interessting experience to listen to inside information at Porsche presented by Porsche's CPO Schwegener. "
        },
    },
    navbar: {
        home: "Startseite",
        projects: "Projekte",
        contact: "Kontakt",
    },
    goToNotFound: "Zur nicht gefundenen Seite gehen",
} satisfies typeof import("~/locales/en/translation").default;