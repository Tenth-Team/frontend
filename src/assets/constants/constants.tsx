 const NOTIFICATIONS_TODAY = [
    { id: 1, time: "11:23", name: "Миронова Ксения Петровна" },
    { id: 2, time: "17:23", name: "Соколова Валерия Игоревна" },
    { id: 3, time: "00:30", name: "Григорьева Алина Сергеевна" },
    { id: 4, time: "19:48", name: "Казанцева Евгения Андреевна" },
  ] as const

const NOTIFICATIONS_YESTERDAY = [
    { id: 1, time: "20:44", name: "Казанцева Евгения Андреевна" },
    { id: 2, time: "19:00", name: "Соколова Валерия Игоревна" },
  ] as const

const NOTIFICATIONS_NOT_READ = [
    { id: 1, time: "19:48", name: "Казанцева Евгения Андреевна" },
    { id: 2, time: "17:23", name: "Соколова Валерия Игоревна" },
    { id: 3, time: "19:30", name: "Григорьева Алина Сергеевна" },
    { id: 4, time: "19:48", name: "Жуков Артем Станиславович" },
  ] as const

  export {NOTIFICATIONS_TODAY, NOTIFICATIONS_YESTERDAY, NOTIFICATIONS_NOT_READ}