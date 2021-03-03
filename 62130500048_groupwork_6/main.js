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
    firstName: {
        presence: true
    },
    lastName: {
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
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            gender: null,
            age: null,
            phone: null,
            errors: null,
            img: './images/gift.jpg'
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                firstName: this.firstName,
                lastName: this.lastName,
                userName: this.userName,
                email: this.email,
                password: this.password,
                gender: this.gender,
                age: this.age,
                phone: this.phone
            },constraints);
            if(this.errors){
                console.log(this.errors);
            } else {
                alert("Your profile is updated successfully.")
            }
        },
        upload(e) {
            var file = e.target.files[0] || e.dataTransfer.files[0];
            var reader = new FileReader();
            reader.onload = (e) => {
                this.img = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    },
    computed: {
        fullName() {
            if (this.firstName && this.lastName) {
                return this.firstName+" "+this.lastName;
            } else if (this.firstName) {
                return this.firstName;
            } else if ( this.lastName){
                return this.lastName;
            } else {
                return "";
            }
            
        }
    }
}
Vue.createApp(app).mount('#app');