new Vue({
    el: '#app',
    data() {
        return {
            i: 0,
            check: 0,
            offerToggle: true,
            requestsCount: 2,
            requestDialog: false,
            interestDialog: false,
            userName: "FirstName LastName",
            userSeat: "A3",
            interests: "Travelling, Politics",
            newInterest: "",
            seats: [
                [
                    [{
                            "seatNumber": "A1",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "A2",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "A3",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "B1",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "B2",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "B3",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "A1",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "A2",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "A3",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "B1",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "B2",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "B3",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "A1",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "A2",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "A3",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "B1",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "B2",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "B3",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "A1",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "A2",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "A3",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "B1",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "B2",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "B3",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "A1",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "A2",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "A3",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "B1",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "B2",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "B3",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "A1",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "A2",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "A3",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "B1",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "B2",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "B3",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "A1",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "A2",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "A3",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "B1",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "B2",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "B3",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "A1",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "A2",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "A3",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "B1",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "B2",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "B3",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ]
            ]

        }
    },
    computed: {
        newClass() {
            this.i++;
            return 'class' + this.seats[this.i];
        }
    },
    methods: {
        seatClicked(seat) {
            if ((seat.class) == "g")
                this.check = 1;
        },

        // this function is called is interest is updated
        interestAdd() {
            this.interests += this.newInterest;
            this.check = this.interests;
        }
    }
});