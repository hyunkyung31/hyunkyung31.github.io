import { useEffect, useState } from "react";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const sections = ["home", "projects", "experiments", "notes", "about"];

        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + 180;

            let currentSection = "home";

            sections.forEach((id) => {
                const section = document.getElementById(id);

                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", updateActiveSection, {
            passive: true,
        });

        updateActiveSection();

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
        };
    }, []);

    const toggleTheme = () => {
        setTheme((prev) =>
            prev === "light" ? "dark" : "light"
        );
    };

    return (
        <nav className="navbar">
            <a href="#home" className="nav-brand">
                <span className="nav-logo">
                    HYUNKYUNG
                </span>
                <span className="nav-subtitle">
                    DATA & AI PORTFOLIO
                </span>
            </a>

            <div className="nav-menu">
                <a 
                    href="#home"
                    className={activeSection === "home" ? "active" : ""}
                >
                    Home
                </a>

                <a 
                    href="#projects"
                    className={activeSection === "projects" ? "active" : ""}
                >
                    Work
                </a>
                
                <a 
                    href="#experiments"
                    className={activeSection === "experiments" ? "active" : ""}
                    >
                        Lab
                </a>

                <a
                    href="#notes"
                    className={activeSection === "notes" ? "active" : ""}
                >
                    Journal
                </a>

                <a 
                    href="#about"
                    className={activeSection === "about" ? "active" : ""}
                    >
                        About
                </a>
            </div>

            <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={
                    theme === "light"
                    ? "다크 모드로 전환"
                    : "라이트 모드로 전환"
                }
                aria-pressed={theme === "dark"}
            >
                {theme === "light" ? "☾" : "☀"}
            </button>
        </nav>
    

    );
}

export default Navbar;