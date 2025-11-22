import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
    name: "Казанцев Артём Витальевич",
    initials: "Казанцев А. В.",
    location: "Симферополь",
    locationLink: "https://yandex.ru/maps/146/simferopol/",
    about: "Junior Backend / Full-stack Developer (Python, FastAPI, Vue3)",
    summary: (
        <>
            Начинающий разработчик с высшим образованием в области прикладной математики. Имею опыт создания веб-приложений на Python (FastAPI) и Vue 3, работы с PostgreSQL, написания вспомогательных программ для автоматизации учёта и администрирования.
            Быстро осваиваю новые технологии, люблю разбираться в системах, настраивать Linux-серверы и оптимизировать рабочие процессы. Ищу возможность развиваться в команде и участвовать в реальных проектах.
        </>
    ),
    avatarUrl: "https://avatars.githubusercontent.com/u/53995940?s=400&u=2f98f54231a95a4cf520cc3042467b5fe056dd29&v=4",
    personalWebsiteUrl: "https://lokach.ru",
    contact: {
        email: "artemiy6451@gmail.com",
        tel: "+7(978)590-98-91",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/artemiy6451",
                icon: "github",
            },
        ],
    },
    education: [
        {
            school: "Крымский федеральный университет имени В. И. Вернадского",
            degree: "Прикладная математика | Бакалавриат",
            start: "2021",
            end: "2025",
        },
    ],
    work: [
        {
            company: "Enigma",
            link: "https://github.com/artemiy6451/gizmo-sallary-calculator",
            badges: ["Gizmo"],
            title: "Администратор компьютерного клуба",
            start: "июнь 2024",
            end: "октябрь 2025",
            description: (
                <>
                    <b>Задачи и достижения:</b>
                    <ul className="list-inside list-disc">
                        <li>
                            Поддерживал работу клубных ПК, сетей и ПО Gizmo Powered.
                        </li>
                        <li>
                            Создавал собственные вспомогательные программы для облегчения отчётности и расчёта зарплат сотрудников (ссылка на GitHub есть в резюме).
                        </li>
                        <li>
                            Автоматизировал часть процессов за счёт Python-скриптов.
                        </li>
                    </ul>
                </>
            )
        },
    ],
    skills: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
        "Vue3.js",
        "Linux",
        "Настройка почтового сервиса",
        "Настройка Linux серверов",
        "Git",
        "Docker",
        "Nginx",
    ],
    projects: [
        {
            title: "Travelvv",
            techStack: ["Vue3.js", "Python", "FastAPI"],
            description:
            "Сайт с расписанием экскурсий, а также админ панелью для добавления/удаления, реадктирования текущих экскурсий.",
            link: {
                label: "Travelvv",
                href: "https://travelvv.ru",
            },
        },
        {
            title: "Gizmo Salary Calculator",
            techStack: ["Python", "PyTelegramBotAPI"],
            description:
            "Программа для подсчета зарплаты, на основе отчетов в телеграм группе. Сохранение отчетов в виде Excel таблицы.",
            link: {
                label: "Gizmo Salary Calculator",
                href: "https://github.com/artemiy6451/gizmo-sallary-calculator",
            },
        },
        {
            title: "Telegram News Bot",
            techStack: ["Python", "PyTelegramBotAPI"],
            description:
            "Агрегатор новостей из Habr и Medium с возможностью выставления тегов для определенных типов новостей.",
            link: {
                label: "Telegram News Bot",
                href: "https://github.com/artemiy6451/telegram-news-bot",
            },
        },
    ],
} as const;
