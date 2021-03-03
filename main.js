const constraints = {
    userName: {
        presence: true,
        length: {
            minimum: 8
        },
        format: {
            pattern: "[a-z0-9]+",
            flags: "i",
            message: "can only contain a-z and 0-9"
        },
        exclusion: {
            within: ['admin','root','username']
        }
    },
    fullName: {
        presence: true
    },
    email: {
        presence: true,
        email: true
    },
    password: {
        presence: true,
        length: {
            minimum: 8
        },
        format: {
            pattern: "[a-z0-9]+",
            flags: "i",
            message: "can only contain a-z and 0-9"
        },
        exclusion: {
            within: ['admin','root','username']
        }
    },
    gender: {
        presence: true
    },
    age: {
        presence: true,
        numericality: {
            onlyInteger: true,
            greaterThan: 0,
            lessThanOrEqualTo: 150
        }
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    }
}

const app = {
    data() {
        return {
            userName: null,
            fullName: null,
            email: null,
            password: null,
            gender: null,
            age: null,
            phone: null,
            errors: null
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                fullName: this.fullName,
                userName: this.userName,
                email: this.email,
                password: this.password,
                gender: this.gender,
                age: this.age,
                phone: this.phone
            },constraints);
            if(!this.errors){
                alert("Registered successfully.")
            }
        }
    }
}
Vue.createApp(app).mount('#app');