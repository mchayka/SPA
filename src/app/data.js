var data = {
        dots: {
            presence: [
                'tomi',
                'lisa'
            ],
            users: {
                tomi: {
                    name: 'Tomi',
                    chats: {
                        one: true
                    },
                    game: {
                        id: 'firstGame',
                        creator: 'tomi'
                    }
                },
                lisa: {
                    name: 'Lisa',
                    chats: {
                        one: true
                    },
                    game: {
                        id: 'firstGame',
                        creator: 'tomi'
                    }
                },
                john: true,
                monika: true,
                kate: true,
                lina: true
            },
            games: {
                firstGame: {
                    status: 0, // 0 - waiting, 1 - gaming, 2 - finished
                    players: {
                        lisa: true,
                        tomi: true
                    },
                    turns: [
                        {user: 'tomi', x: 10, y: 10},
                        {user: 'lisa', x: 10, y: 11}
                    ]
                }
            },
            chats: {
                one: {
                    tomi: true,
                    lisa: true
                },
                two: {
                    john: true,
                    monika: true
                },
                three: {
                    kate: true,
                    lina: true
                }
            },
            messages: {
                one: [
                    {sender: 'lisa', message: 'Hi!'},
                    {sender: 'tomi', message: 'Hello!'}
                ],
                two: [

                ],
                three: [

                ]
            }
        }
    };