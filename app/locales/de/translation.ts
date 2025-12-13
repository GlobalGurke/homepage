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
            title: "Porsche Procurement Case Study",
            description: "As part of a one-week intensive project, we worked on five concrete tasks focused on CO2 emission reduction at Porsche. Beyond analytical work, the project required us to develop actionable recommendations addressing Porsche's current CO2 challanges, with a strong emphasis on the supply chain.",
            description2: "After the one-week preparation phase, we presented our results and proposal directly to top management within Porsche Procurement, including a Vice President. This setting demanded clear, well structured arguments and realistic, implementable solutions rather than theoretical concepts.",
            description3: "In addition, the project offered the exceptional opportunity to gain direct insights into Porsche's strategic and operational reality through a presentation by Porsche's Chief Procurment Officier, Joachim Scharnagl. These internal perspectives significantly deepened our understanding of the complexity and trade-offs involved in CO2 reduction within a global automotive supply chain.",
            description4: "Overall, the project combined analytical rigor, real-world constraints, and direct exposure to executive decision-making at Porsche."
        }
    },
    navbar: {
        home: "Startseite",
        projects: "Projekte",
        contact: "Kontakt",
    },
    goToNotFound: "Zur nicht gefundenen Seite gehen",
} satisfies typeof import("~/locales/en/translation").default;