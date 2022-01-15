const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength:7,
        trim: true,
         validate(value){
             if(value.toLowerCase().includes('password')){
                 throw new Error('Password cannot contain "password"')
             }
         }


    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//     name: '     Sejal',
//     email: 'SEJALKHILARI2807@gmail.com   ',
//     password:'Password123      '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })




//TASK

const task = mongoose.model('task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default:false
    }
})

const done = new task({
    description: '       Playing Volleyball',
    // completed: true
})

done.save().then(() => {
    console.log(done)
}).catch((error) => {
    console.log('Error!', error)
})