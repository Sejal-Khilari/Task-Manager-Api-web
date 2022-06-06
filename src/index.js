//solved query
const express = require('express')
require('./db/mongoose')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')


const app = express()
const port = process.env.PORT


// const multer=require('multer')
// const upload=multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000
//     },
//     //cb=call back
//     //!file.originalname.endsWith('.pdf')
//     fileFilter(req,file,cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word doc'))
//         }
//         cb(undefined,true)
//             // cb(new Error('File must be a PDF'))
//             // cb(undefined,true)
//             // cb(undefined,false)
//     }
// })

// app.post('/upload',upload.single('upload'),(req,res)=>{
   
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })



// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//           res.send('GET requests are disabled')
//     }else{
//         next()
//     }

// })

// app.use((req,res,next)=>{
//         res.status(503).send('Site is under mainatenence')
// })




app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//without middleware: new request--->run route handler
//with middleware:  new request-->do something-->run route handler

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task=require('./models/task')
const User=require('./models/user')
// const main=async()=>{

//     const user=await User.findById('61ac6cc83b614b448c0b7db5')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()

// const jwt=require('jsonwebtoken')
// //const bcrypt =require('bcryptjs')

// const myFunction=async()=>{
//    const token=jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn: '7 days'})
//    console.log(token)

//    const data=jwt.verify(token,'thisismynewcourse')
//    console.log(data)
// }
// myFunction()


// const pet={
//     name:'Hal'
// }
// pet.toJSON=function(){
//     // console.log(this)
//     return {}
// }
// console.log(JSON.stringify(pet))
// const password='Sejal123'
// const hashedPassword=await bcrypt.hash(password,8)

// console.log(password)
// console.log(hashedPassword)

// const isMatch=await bcrypt.compare(password,hashedPassword)

// console.log(isMatch)