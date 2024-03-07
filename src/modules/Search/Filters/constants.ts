export const filters = [
  {
    id: 1,
    label: "Сортировать",
    name: "sort",
    list: [
      {
        id: 1,
        name: "default",
        label: "По умолчанию",
      },
      {
        id: 2,
        name: "by-date",
        label: "По дате",
      },
      {
        id: 3,
        name: "alphabetically",
        label: "По алфавиту",
      },

      {
        id: 4,
        name: "by-publications-count",
        label: "По количеству публикаций",
      },
    ],
    type: "select",
  },
  {
    id: 2,
    label: "Город",
    name: "city",
    list: [
      {
        id: 1,
        name: "Moscow",
        label: "Москва",
      },
      {
        id: 2,
        name: "St. Petersburg",
        label: "Санкт-Петербург",
      },
      {
        id: 3,
        name: "Chelyabinsk",
        label: "Челябинск",
      },

      {
        id: 4,
        name: "Perm",
        label: "Пермь",
      },
      {
        id: 5,
        name: "Sochi",
        label: "Сочи",
      },
    ],
    type: "checkbox",
  },
  {
    id: 3,
    label: "Страна",
    name: "country",
    list: [
      {
        id: 1,
        name: "Russia",
        label: "Россия",
      },
      {
        id: 2,
        name: "Kazakhstan",
        label: "Казахстан",
      },
      {
        id: 3,
        name: "Montenegro",
        label: "Черногория",
      },
      {
        id: 4,
        name: "Spain",
        label: "Испания",
      },
      {
        id: 5,
        name: "North Korea",
        label: "Северная Корея",
      },
      {
        id: 6,
        name: "United Kingdom",
        label: "Великобритания",
      },
    ],
    type: "checkbox",
  },
  {
    id: 4,
    label: "Статус амбассадора",
    name: "",
    list: [],
    type: "checkbox",
  },
  {
    id: 5,
    label: "Программа обучения",
    name: "",
    list: [
      {
        id: 1,
        name: "Frontend Developer",
        label: "Фронтенд-разработчик",
      },
      {
        id: 2,
        name: "Full Stack Developer",
        label: "Фулстек-разработчик",
      },
      {
        id: 3,
        name: "Python Developer",
        label: "Python-разработчик",
      },
      {
        id: 4,
        name: "Python Developer Plus",
        label: "Python-разработчик плюс",
      },
      {
        id: 5,
        name: "QA Engineer",
        label: "Инженер по тестированию",
      },
      {
        id: 6,
        name: "Java Developer",
        label: "Java-разработчик",
      },
      {
        id: 7,
        name: "Data Analyst",
        label: "Аналитик данных",
      },
      {
        id: 8,
        name: "1C Developer",
        label: "Разработчик 1C",
      },
      {
        id: 9,
        name: "QA Engineer Plus",
        label: "Инженер по тестированию плюс",
      },
      {
        id: 10,
        name: "UI/UX Designer",
        label: "Дизайнер интерфейсов",
      },
      {
        id: 11,
        name: "Data Specialist",
        label: "Специалист по Data Science",
      },
      {
        id: 12,
        name: "System Analyst",
        label: "Системный аналитик",
      },
      {
        id: 13,
        name: "Business Analyst",
        label: "Бизнес-аналитик",
      },
      {
        id: 14,
        name: "Project Manager",
        label: "Менеджер проектов",
      },
      {
        id: 15,
        name: "C++ Developer",
        label: "Разработчик C++",
      },
      {
        id: 16,
        name: "Graphic Designer",
        label: "Графический дизайнер",
      },
      {
        id: 17,
        name: "Data Analyst Plus",
        label: "Аналитик данных плюс",
      },
      {
        id: 18,
        name: "Internet Marketer",
        label: "Интернет-маркетолог",
      },
      {
        id: 19,
        name: "iOS Developer",
        label: "iOS-разработчик",
      },
      {
        id: 20,
        name: "Android Developer",
        label: "Android-разработчик",
      },
      {
        id: 21,
        name: "Web Designer",
        label: "Веб-дизайнер",
      },
      {
        id: 22,
        name: "Mobile and Cross-Platform App Design",
        label: "Дизайн мобильных и кросс-платформенных приложений",
      },
      {
        id: 23,
        name: "Product Approach for Designers",
        label: "Продуктовый подход для дизайнеров",
      },
      {
        id: 24,
        name: "UX Research for Designers",
        label: "UX-исследования для дизайнеров",
      },
      {
        id: 25,
        name: "Java Developer Plus",
        label: "Java-разработчик плюс",
      },
      {
        id: 26,
        name: "DevOps for Operations and Development",
        label: "DevOps для эксплуатации и разработки",
      },
      {
        id: 27,
        name: "Advanced Go Developer",
        label: "Продвинутый Go-разработчик",
      },
      {
        id: 28,
        name: "Data Specialist Plus",
        label: "Специалист по Data Science плюс",
      },
      {
        id: 29,
        name: "Motion Designer",
        label: "Моушн-дизайнер",
      },
      {
        id: 30,
        name: "Mid Python Developer",
        label: "Мидл Python-разработчик",
      },
      {
        id: 31,
        name: "Java Test Automation Engineer",
        label: "Автоматизатор тестирования на Java",
      },
      {
        id: 32,
        name: "1C Analyst",
        label: "1С-аналитик",
      },
      {
        id: 33,
        name: "Data Engineer",
        label: "Инженер данных",
      },
      {
        id: 34,
        name: "Machine Learning Engineer",
        label: "Инженер машинного обучения",
      },
      {
        id: 35,
        name: "IT Designer",
        label: "Дизайнер в IT",
      },
      {
        id: 36,
        name: "Traffic Manager",
        label: "Трафик-менеджер",
      },
      {
        id: 37,
        name: "Mid Frontend Developer",
        label: "Мидл фронтенд-разработчик",
      },
      {
        id: 38,
        name: "Mathematics for Data Analysis",
        label: "Математика для анализа данных",
      },
      {
        id: 39,
        name: "SQL for Data Work and Analytics",
        label: "SQL для работы с данными и аналитики",
      },
      {
        id: 40,
        name: "Marketplace Manager",
        label: "Менеджер маркетплейсов",
      },
      {
        id: 41,
        name: "Team Management Basics",
        label: "Базовый курс «Управление командой»",
      },
      {
        id: 42,
        name: "React Developer",
        label: "React-разработчик",
      },
      {
        id: 43,
        name: "IT Recruiter",
        label: "IT-рекрутер",
      },
      {
        id: 44,
        name: "QA Engineer: From Novice to Automation Engineer",
        label: "Инженер по тестированию: от новичка до автоматизатора",
      },
      {
        id: 45,
        name: "UI/UX Designer Plus",
        label: "Дизайнер интерфейсов плюс",
      },
      {
        id: 46,
        name: "Asynchronous Programming in Python",
        label: "Асинхронное программирование на Python",
      },
      {
        id: 47,
        name: "Graphic Designer Plus",
        label: "Графический дизайнер плюс",
      },
      {
        id: 48,
        name: "C++ for Backend",
        label: "C++ для бэкенда",
      },
      {
        id: 49,
        name: "Critical Thinking",
        label: "Критическое мышление",
      },
      {
        id: 50,
        name: "Financial Management",
        label: "Финансовый менеджмент",
      },
      {
        id: 51,
        name: "Product Manager from Scratch",
        label: "Продакт-менеджер с нуля",
      },
      {
        id: 52,
        name: "Brand Manager",
        label: "Бренд-менеджер",
      },
      {
        id: 53,
        name: "Development Team Management",
        label: "Управление командой разработки",
      },
      {
        id: 54,
        name: "SQL for Development",
        label: "SQL для разработки",
      },
      {
        id: 55,
        name: "Data Engineer Product Analytics Specialization",
        label: "Продуктовая аналитика: специализация",
      },
      {
        id: 56,
        name: "Python for Data Analysis",
        label: "Python для анализа данных",
      },
      {
        id: 57,
        name: "Financial Analyst",
        label: "Финансовый аналитик",
      },
      {
        id: 58,
        name: "Data Visualization",
        label: "Визуализация данных",
      },
      {
        id: 59,
        name: "Content Marketer",
        label: "Контент-маркетолог",
      },
      {
        id: 60,
        name: "Professional HTML and CSS Layout",
        label: "Профессиональная вёрстка на HTML и CSS",
      },
      {
        id: 61,
        name: "Unit Economics",
        label: "Юнит-экономика",
      },
      {
        id: 62,
        name: "Python Test Automation Engineer",
        label: "Автоматизатор тестирования на Python",
      },
      {
        id: 63,
        name: "HR Analytics",
        label: "HR-аналитика",
      },
      {
        id: 64,
        name: "Python Developer Bootcamp",
        label: "Python-разработчик буткемп",
      },
      {
        id: 65,
        name: "Tools for Beginner Managers",
        label: "Инструменты начинающего руководителя",
      },
      {
        id: 66,
        name: "Argumentation Skills for Managers",
        label: "Навыки аргументации для руководителей",
      },
      {
        id: 67,
        name: "Go Developer from Scratch",
        label: "Go-разработчик с нуля",
      },
      {
        id: 68,
        name: "Marketing Management for Entrepreneurs",
        label: "Управление маркетингом для предпринимателей",
      },
      {
        id: 69,
        name: "SMM Promotion in Telegram",
        label: "SMM-продвижение в Телеграме",
      },
      {
        id: 70,
        name: "Data Science Bootcamp",
        label: "Data Science буткемп",
      },
      {
        id: 71,
        name: "Fundamentals of Product Management",
        label: "Основы продакт-менеджмента",
      },
      {
        id: 72,
        name: "HR Manager",
        label: "HR-менеджер",
      },
      {
        id: 73,
        name: "Project Management Fundamentals",
        label: "Основы управления проектами",
      },
      {
        id: 74,
        name: "Data Analyst Bootcamp",
        label: "Аналитик данных буткемп",
      },
      {
        id: 75,
        name: "System Analyst Bootcamp",
        label: "Системный аналитик буткемп",
      },
      {
        id: 76,
        name: "Excel for Work",
        label: "Excel для работы",
      },
      {
        id: 77,
        name: "Algorithms and Data Structures",
        label: "Алгоритмы и структуры данных",
      },
      {
        id: 78,
        name: "English: Basic",
        label: "Английский: Базовый",
      },
      {
        id: 79,
        name: "English: Intermediate",
        label: "Английский: Средний",
      },
      {
        id: 80,
        name: "English: Upper Intermediate",
        label: "Английский: Выше среднего",
      },
      {
        id: 81,
        name: "English for Developers",
        label: "Английский для разработчиков",
      },
      {
        id: 82,
        name: "Product Manager",
        label: "Продакт-менеджер",
      },
      {
        id: 83,
        name: "Market Analysis",
        label: "Анализ и оценка рынка",
      },
      {
        id: 84,
        name: "Information Security Specialist: Web Pentest",
        label: "Специалист по информационной безопасности: веб-пентест",
      },
      {
        id: 85,
        name: "Backend on Node.js for Frontend Developers",
        label: "Бэкенд на Node.js для фронтенд-разработчиков",
      },
      {
        id: 86,
        name: "Educational Programs Methodologist",
        label: "Методист образовательных программ",
      },
      {
        id: 87,
        name: "Producer of Online Courses",
        label: "Продюсер онлайн-курсов",
      },
      {
        id: 88,
        name: "IT Specialist",
        label: "IT-специалист",
      },
      {
        id: 89,
        name: "Data Engineer from Scratch",
        label: "Инженер данных с нуля",
      },
      {
        id: 90,
        name: "SMM Specialist",
        label: "SMM-специалист",
      },
      {
        id: 91,
        name: "Contextual Advertising Specialist",
        label: "Специалист по контекстной рекламе",
      },
      {
        id: 92,
        name: "Fundamentals of Marketing Analytics",
        label: "Основы маркетинговой аналитики",
      },
      {
        id: 93,
        name: "PHP Developer",
        label: "PHP-разработчик",
      },
      {
        id: 94,
        name: "System Administrator",
        label: "Системный администратор",
      },
      {
        id: 95,
        name: "Machine Learning Engineer from Scratch",
        label: "Инженер машинного обучения с нуля",
      },
      {
        id: 96,
        name: "Data Analyst",
        label: "Аналитик данных",
      },
      {
        id: 97,
        name: "Data Science Specialist",
        label: "Специалист по Data Science",
      },
      {
        id: 98,
        name: "Python Developer",
        label: "Python-разработчик",
      },
      {
        id: 99,
        name: "Web Developer",
        label: "Веб-разработчик",
      },
      {
        id: 100,
        name: "QA Engineer",
        label: "Инженер по тестированию (QA)",
      },
      {
        id: 101,
        name: "UX/UI Designer",
        label: "UX/UI-дизайнер",
      },
      {
        id: 102,
        name: "Marketing",
        label: "Маркетинг",
      },
      {
        id: 103,
        name: "Graphic Designer",
        label: "Графический дизайнер",
      },
      {
        id: 104,
        name: "Middle Python Developer",
        label: "Middle Python",
      },
      {
        id: 105,
        name: "C++ Developer",
        label: "C++",
      },
      {
        id: 106,
        name: "Data Engineer",
        label: "Инженер данных",
      },
      {
        id: 107,
        name: "IT Recruiter",
        label: "IT-рекрутер",
      },
      {
        id: 108,
        name: "Management",
        label: "Управление",
      },
      {
        id: 109,
        name: "English",
        label: "Английский",
      },
      {
        id: 110,
        name: "Critical Thinking",
        label: "Критическое мышление",
      },
      {
        id: 111,
        name: "Business Communication",
        label: "Рабочая коммуникация",
      },
      {
        id: 112,
        name: "Algorithms for Developers",
        label: "Алгоритмы для разработчиков",
      },
      {
        id: 113,
        name: "Product Design",
        label: "Продуктовый дизайн",
      },
      {
        id: 114,
        name: "SQL for Data Analysis and Analytics",
        label: "SQL для работы с данными и аналитики",
      },
      {
        id: 115,
        name: "Java Developer",
        label: "Java-разработчик",
      },
      {
        id: 116,
        name: "Commercial Illustrator",
        label: "Коммерческий иллюстратор",
      },
      {
        id: 117,
        name: "Full Stack Developer",
        label: "Фулстек разработчик",
      },
      {
        id: 118,
        name: "Advanced GO Developer",
        label: "Продвинутый GO-разрабочик",
      },
      {
        id: 119,
        name: "DevOps Engineer",
        label: "DevOps для эксплуатации и разработки",
      },
      {
        id: 120,
        name: "IOS Developer",
        label: "IOS-разработчик",
      },
      {
        id: 121,
        name: "Business Analyst",
        label: "Бизнес-аналитик",
      },
      {
        id: 122,
        name: "Product Manager for Experienced Specialists",
        label: "Продакт-менеджер для специалистов с опытом",
      },
      {
        id: 123,
        name: "Android Developer",
        label: "Android-разработчик",
      },
      {
        id: 124,
        name: "Project Manager",
        label: "Менеджер проектов",
      },
    ],
    type: "checkbox",
  },
  {
    id: 6,
    label: "Пол",
    name: "sex",
    list: [
      { id: 1, label: "Любой", name: "other" },
      { id: 2, label: "Женский", name: "female" },
      { id: 3, label: "Мужской", name: "male" },
    ],
    type: "select",
  },
  {
    id: 7,
    label: "",
    name: "statusAmb",
    list: [
      {
        id: 1,
        name: "status-active",
        label: "Активный",
      },
      {
        id: 2,
        name: "status-pause",
        label: "На паузе",
      },
      {
        id: 3,
        name: "status-not",
        label: "Не амбассадор",
      },

      {
        id: 4,
        name: "status-refine",
        label: "Уточняется",
      },
    ],
    type: "select",
  },
]
