new Vue({
    el: '#app',
    data() {
        return {
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
                            "seatNumber": "1A",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "1B",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "1C",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "1D",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "1E",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "1F",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "2A",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "2B",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "2C",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "2D",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "2E",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "2F",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "3A",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "3B",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "3C",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "3D",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "3E",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "3F",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "4A",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "4B",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "4C",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "4D",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "4E",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "4F",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "5A",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "5B",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "5C",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "5D",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "5E",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "5F",
                            "seatStatus": "E",
                            "interests": "Politics, Travelling"
                        }
                    ]

                ],
                [
                    [{
                            "seatNumber": "6A",
                            "seatStatus": "R",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "6B",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "6C",
                            "seatStatus": "B",
                            "interests": "Sports, Movies"
                        }
                    ],
                    [{
                            "seatNumber": "6D",
                            "seatStatus": "Y",
                            "interests": "Politics, Technology"
                        },
                        {
                            "seatNumber": "6E",
                            "seatStatus": "P",
                            "interests": "Sports, Music"
                        },
                        {
                            "seatNumber": "6F",
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
    computed: {},
    methods: {
        seatClicked(seat) {
            if ((seat.seatStatus) == "G")
                this.check = 1;
        },

        // this function is called is interest is updated
        interestAdd() {
            this.interests += this.newInterest;
            this.check = this.interests;
        }
    }
});