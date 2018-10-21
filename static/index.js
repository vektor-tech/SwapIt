new Vue({
    el: '#app',
    data() {
        return {
            loginSuccess: false,
            loginToggle: true,

            ticketNum: "",
            lastName: "",
            userToken: "",

            FORAPI: "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/seat-exchange-dqcnh/service/api/incoming_webhook",

            requestsCount: 0, //total requests received by the user
            userName: "Loading..", //user's full name
            userSeat: "N/A", //user's seat-number
            interests: "", //user's interest
            newInterest: "", //to store new interest string
            currentSelectedSeat: "",

            //DIALOG TOGGLES
            offerToggle: true, //Offer toggle switch status
            requestDialog: false, //request modal toggle
            interestDialog: false, //interest modal toggle
            currentSelectedOfferToggle: false,
            userSeatToggle: false,
            legendToggle: false,
            notAvailableSeatToggle: false,
            seatRequestedByUserToggle: false,
            seatRequestedByOtherToggle: false,
            notRegisteredSeatToggle: false,
            loginErrorToggle: false,

            colorCodes: {
                "B": "User's Current Seat",
                "G": "Seats available for offer",
                "R": "Seats NOT available for offer",
                "Y": "Seat Requests received by the user",
                "O": "Seats Requested by the User",
                "E": "Unregistered Seats"
            },

            seats: [
                [
                    [{
                            "seatNumber": "1A",
                            "seatStatus": "B",
                            "interests": "Cycling"
                        },
                        {
                            "seatNumber": "1B",
                            "seatStatus": "G",
                            "interests": "Travelling"
                        },
                        {
                            "seatNumber": "1C",
                            "seatStatus": "R",
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
                            "seatStatus": "O",
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
                            "seatStatus": "R",
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
                            "seatStatus": "O",
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
                            "seatStatus": "R",
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
                            "seatStatus": "O",
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
                            "seatStatus": "R",
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
                            "seatStatus": "O",
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
                            "seatStatus": "R",
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
                            "seatStatus": "O",
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
                            "seatStatus": "R",
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
                            "seatStatus": "O",
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
                            "seatStatus": "R",
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
                            "seatStatus": "O",
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
                            "seatStatus": "R",
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
                            "seatStatus": "O",
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
    mounted: {},
    methods: {
        loginError() {
            this.ticketNum = "";
            this.lastName = "";
            this.loginErrorToggle = true;
        },

        //function to handle seat clicks
        seatClicked(seat) {
            this.currentSelectedOffer = "";
            //for user's seat
            if ((seat.status) == "B") {
                this.currentSelectedSeat = seat.seat_number;
                this.userSeatToggle = true;
            }
            //for offered seat
            else if ((seat.status) == "G") {
                this.currentSelectedSeat = seat.seat_number;
                this.currentSelectedOfferToggle = true;
            }
            //for not available seat
            else if ((seat.status) == "R") {
                this.currentSelectedSeat = seat.seat_number;
                this.notAvailableSeatToggle = true;
            }
            //for seats requested by the user
            else if ((seat.status) == "O") {
                this.currentSelectedSeat = seat.seat_number;
                this.seatRequestedByUserToggle = true;
            }
            //for seats requested by others
            else if ((seat.status) == "Y") {
                this.currentSelectedSeat = seat.seat_number;
                this.seatRequestedByOtherToggle = true;
            }
            //for not registered seats
            else if ((seat.status) == "E") {
                this.currentSelectedSeat = seat.seat_number;
                this.notRegisteredSeatToggle = true;
            }
        },

        // this function is called is interest is updated
        interestAdd() {
            this.interests += this.newInterest;
            this.check = this.interests;
        },

        loginRequest: function () {
            fetch(this.FORAPI + "/auth", {
                    method: "post",
                    body: JSON.stringify({
                        ticket_num: parseInt(this.ticketNum),
                        last_name: this.lastName
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    console.log(data.success);

                    if (data.success) {
                        this.ticketNum = "";
                        this.lastName = "";
                        this.loginSuccess = true;
                        this.userToken = data.token.$oid;
                        this.loginSuccessToggle = true;
                        this.getSeats();
                    } else if (!data.success) {
                        console.log("login error")
                        this.loginError();
                    }

                })
                .catch(err => console.error(err));
        },

        getSeats: function () {
            console.log(this.seats);
            fetch(this.FORAPI + "/seats", {
                    method: "post",
                    body: JSON.stringify({
                        token: this.userToken
                    }),
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.seats = data;
                    this.getUser();
                    console.log(this.seats);
                })
                .catch(err => console.error(err));
        },

        getUser: function () {
            console.log(this.userName);
            fetch(this.FORAPI + "/user", {
                    method: "post",
                    body: JSON.stringify({
                        token: this.userToken
                    }),
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.userName = data.name;
                    this.userSeat = data.seat_number;
                    this.interests = data.interests;
                    console.log(this.userName);
                })
                .catch(err => console.error(err));
        }
    }

});