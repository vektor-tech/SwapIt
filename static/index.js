new Vue({
    el: '#app',
    data() {
        return {
            i: 0,
            check: 0,
            offerToggle: true,
            requestsCount: 2,
            dialog: false,
            userName: "First Last",
            seatNumber: "A3",
            interests: ["Travelling", "Politics"],
            seats: [{
                    "id": 0,
                    "class": "r"
                },
                {
                    "id": 1,
                    "class": "g"
                },
                {
                    "id": 2,
                    "class": "y"
                }
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
        seatClicked() {
            this.check = 1;
        }
    }
});