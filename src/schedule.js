const schedule = [
    {
        week: 1,
        days: [
            {
                name: 'Понедельник',
                subjects: {
                    1: {
                        name: 'Физкультура',
                        type: '',
                        audience: 'спортзал',
                        teacher: '',
                        subgroup: '',
                    },

                    2: {
                        name: 'Русс.яз и КР',
                        type: 'пр',
                        audience: '4.17',
                        teacher: 'Ахмедова П.Р.',
                        subgroup: '',
                    },

                    3: {
                        name: 'Введ. в ИТ / ИТиП',
                        type: 'лаб',
                        audience: 'ВЦ / 2.12',
                        teacher: 'Ахмедова З.Г. / Гаджиев А.М.',
                        subgroup: '1,2',
                    },

                    4: {
                        name: 'ОРГ',
                        type: 'пр',
                        audience: '4.6',
                        teacher: 'Каяев М.И.',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
            {
                name: 'Вторник',
                subjects: {
                    1: {
                        name: 'Мат. анализ',
                        type: 'лек',
                        audience: '4.13',
                        teacher: 'Амучиева Т.С.',
                        subgroup: '',
                    },

                    2: {
                        name: 'ИТ и прогр.',
                        type: 'пр',
                        audience: '3.14',
                        teacher: 'Гаджиев А.М.',
                        subgroup: '',
                    },

                    3: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    4: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
            {
                name: 'Среда',
                subjects: {
                    1: {
                        name: 'Инф. и прогр. Python',
                        type: 'лаб',
                        audience: '4.13',
                        teacher: 'Ахмедов С.А.',
                        subgroup: '',
                    },

                    2: {
                        name: 'Физика',
                        type: '',
                        audience: 'планет.',
                        teacher: 'Гусейханов М.К.',
                        subgroup: '',
                    },

                    3: {
                        name: 'ИТиП / ТАиСД',
                        type: 'лаб / пр',
                        audience: '2.12 / 3.6',
                        teacher: 'Гаджиев А.М. / Гаджиев Т.С.',
                        subgroup: '1,2',
                    },

                    4: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
            {
                name: 'Четверг',
                subjects: {
                    1: {
                        name: 'История России',
                        type: 'лек',
                        audience: '4.16',
                        teacher: 'Магомедов Р.М.',
                        subgroup: '',
                    },

                    2: {
                        name: 'ИП / Ин.яз',
                        type: 'лаб / пр',
                        audience: 'ВЦ / 4.17',
                        teacher: 'Ахмедов С.А. / Мутаева С.И.',
                        subgroup: '1,2',
                    },

                    3: {
                        name: 'Ин.яз / Введ. в ИТ',
                        type: 'пр / лаб',
                        audience: '4.8 / ПО',
                        teacher: 'Мутаева С.И. / Гаджиев Т.С.',
                        subgroup: '1,2',
                    },

                    4: {
                        name: 'История России',
                        type: 'пр',
                        audience: '3.14',
                        teacher: 'Магомедов Р.М.',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
            {
                name: 'Пятница',
                subjects: {
                    1: {
                        name: 'ИиП',
                        type: 'пр',
                        audience: '2.1',
                        teacher: 'Ахмедов С.А.',
                        subgroup: '',
                    },

                    2: {
                        name: 'ТАиСД',
                        type: '',
                        audience: '4.13',
                        teacher: 'Гаджиев Т.С.',
                        subgroup: '',
                    },

                    3: {
                        name: 'ТАиСД / ИП',
                        type: 'лаб',
                        audience: '2.11 / ПО',
                        teacher: 'Гаджиев Т.С. / Ахмедов С.А.',
                        subgroup: '1,2',
                    },

                    4: {
                        name: 'Физика',
                        type: '',
                        audience: 'планет.',
                        teacher: 'Гусейханов М.К.',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
            {
                name: 'Суббота',
                subjects: {
                    1: {
                        name: 'Основы ИБ',
                        type: 'лек',
                        audience: '4.4',
                        teacher: 'Меджидов З.У.',
                        subgroup: '',
                    },

                    2: {
                        name: 'Основы ИБ',
                        type: 'пр',
                        audience: '3.14',
                        teacher: 'Меджидов З.У.',
                        subgroup: '',
                    },

                    3: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    4: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
        ],
    },
    {
        week: 2,
        days: [
            {
                name: 'Понедельник',
                subjects: {
                    1: {
                        name: 'Физкультура',
                        type: '',
                        audience: 'спортзал',
                        teacher: '',
                        subgroup: '',
                    },

                    2: {
                        name: 'Русс.яз и КР',
                        type: 'пр',
                        audience: '4.6',
                        teacher: 'Амирова П.Р.',
                        subgroup: '',
                    },

                    3: {
                        name: 'Введ. в ИТ / Ин.яз',
                        type: 'лаб / пр',
                        audience: 'ВЦ / 4.8',
                        teacher: 'Ахмедова З.Х. / Мутаева С.И.',
                        subgroup: '1,2',
                    },

                    4: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
            {
                name: 'Вторник',
                subjects: {
                    1: {
                        name: 'Мат. анализ',
                        type: 'пр',
                        audience: '4.6',
                        teacher: 'Амучиева Т.С.',
                        subgroup: '',
                    },

                    2: {
                        name: 'Мат. анализ',
                        type: 'лек',
                        audience: '3.14',
                        teacher: 'Амучиева Т.С.',
                        subgroup: '',
                    },

                    3: {
                        name: 'Ин.яз / ИТиП',
                        type: 'пр / лаб',
                        audience: '4.17 / ВЦ',
                        teacher: 'Мутаева С.И. / Гаджиев А.М.',
                        subgroup: '1,2',
                    },

                    4: {
                        name: 'Кураторский час',
                        type: '',
                        audience: '',
                        teacher: 'Фейламазова С.А.',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
            {
                name: 'Среда',
                subjects: {
                    1: {
                        name: 'Введ. в ИТ',
                        type: 'лаб',
                        audience: 'ВЦ',
                        teacher: 'Гаджиев Т.С.',
                        subgroup: '2',
                    },

                    2: {
                        name: 'Физика',
                        type: '',
                        audience: 'планет.',
                        teacher: 'Гусейханов М.К.',
                        subgroup: '',
                    },

                    3: {
                        name: 'ИТиП',
                        type: 'лаб',
                        audience: 'ВЦ',
                        teacher: 'Гаджиев А.М.',
                        subgroup: '1',
                    },

                    4: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
            {
                name: 'Четверг',
                subjects: {
                    1: {
                        name: 'История России',
                        type: 'лек',
                        audience: 'ПО',
                        teacher: 'Магомедов Р.М.',
                        subgroup: '',
                    },

                    2: {
                        name: 'ИП / Ин.яз',
                        type: 'лаб / пр',
                        audience: 'ВЦ / 4.17',
                        teacher: 'Ахмедов С.А. / Мутаева С.И.',
                        subgroup: '1,2',
                    },

                    3: {
                        name: 'ТАиСД',
                        type: '',
                        audience: '4.6',
                        teacher: 'Гаджиев Т.С.',
                        subgroup: '',
                    },

                    4: {
                        name: 'История России',
                        type: 'пр',
                        audience: '4.7',
                        teacher: 'Магомедов Р.М.',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
            {
                name: 'Пятница',
                subjects: {
                    1: {
                        name: 'ОиПоИБ',
                        type: '',
                        audience: '4.13',
                        teacher: 'Рагимханова К.Т.',
                        subgroup: '',
                    },

                    2: {
                        name: 'Ин.яз / ИП',
                        type: 'пр / лаб',
                        audience: '4.15 / ВЦ',
                        teacher: 'Мутаева С.И. / Ахмедов С.А.',
                        subgroup: '1,2',
                    },

                    3: {
                        name: 'ОиПоИБ',
                        type: '',
                        audience: '4.6',
                        teacher: 'Рагимханова К.Т.',
                        subgroup: '',
                    },

                    4: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
            {
                name: 'Суббота',
                subjects: {
                    1: {
                        name: 'Основы ИБ',
                        type: '',
                        audience: '3.14',
                        teacher: 'Меджидов З.У.',
                        subgroup: '',
                    },

                    2: {
                        name: 'Физика',
                        type: 'лаб',
                        audience: '',
                        teacher: 'Магомедова У.Г. / Рабаданова А.Э.',
                        subgroup: '1,2',
                    },

                    3: {
                        name: 'ОРГ',
                        type: 'пр',
                        audience: '3.14',
                        teacher: 'Каяев М.И.',
                        subgroup: '',
                    },

                    4: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    5: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    },

                    6: {
                        name: '',
                        type: '',
                        audience: '',
                        teacher: '',
                        subgroup: '',
                    }
                }
            },
        ]
    }
]

export default schedule