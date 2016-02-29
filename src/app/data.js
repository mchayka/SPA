var data = {
        dots: {
            presence: [
                'tomi',
                'lisa'
            ],
            users: {
                tomi: {
                    name: 'Tomi',
                    status: 1, // 0 - offline; 1 - online
                    chats: {
                        one: {
                            receiver: 'lisa',
                            status: 2, // 0 - closed; 1 - minimized; 2 - opened
                            unread: 0 // Count of unread messages
                        },
                        two: {
                            receiver: 'monika',
                            status: 2,
                            unread: 0
                        }
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
                }
            },
            games: {
                firstGame: {
                    creator: 'tomi',
                    status: 0, // 0 - waiting, 1 - gaming, 2 - finished, 3 - rejected
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
                    tomi: true,
                    monika: true
                }
            },
            messages: {
                one: [
                    {
                        sender: 'lisa',
                        message: 'Hi!',
                        status: 1 // 1 - new, 0 - read
                    },
                    {sender: 'tomi', message: 'Hello!'}
                ],
                two: [

                ],
                three: [

                ]
            }
        }
    };