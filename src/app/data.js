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
                        one: 2 // 0 - closed; 1 - minimized; 2 - opened
                    },
                    game: {
                        id: 'firstGame'
                    }
                },
                lisa: {
                    name: 'Lisa',
                    chats: {
                        one: 2
                    },
                    game: {
                        id: 'firstGame'
                    }
                },
                john: true,
                monika: true,
                kate: true,
                lina: true
            },
            games: {
                firstGame: {
                    creator: 'tomi',
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