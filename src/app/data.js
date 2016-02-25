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
                    game: 'firstGame'
                },
                lisa: true,
                john: true,
                monika: true,
                kate: true,
                lina: true
            },
            games: {
                firstGame: {
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