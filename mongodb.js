//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//destructuring
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id=new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)


    //CREATING DOCUMENT
    //  db.collection('Users').insertOne({
    //      name: 'Vikram',
    //      age: 26
    //  },(error,result)=>{
    //        if(error){
    //            return console.log('Unable to insert user')
    //        }
    //        console.log(result.ops)
    //  })

    // db.collection('Users').insertMany([
    //     {
    //     name: 'Shraa',
    //     age:20
    // },{
    //     name:'Mansai',
    //     age :18
    // }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })


    // db.collection('Tasks').insertMany([
    //     {
    //         description: 'Complete DSA assignments',
    //         completed: true
    //     },
    //     {
    //         description: 'Submitting team details',
    //         completed: false
    //     },
    //     {
    //         description: 'Going to market',
    //         completed: true
    //     }
    // ], (error, result) => {

    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })


     //READING DOCUMENT
    //fetching data from database of users using findone and findmany

    // db.collection('Users').findOne({ _id: new ObjectID("619a11301cbee135742a45f8") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('Users').find({age: 19}).toArray((error,users)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //  console.log(users)
    // })

    // db.collection('Users').find({age: 19}).count((error,users)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //  console.log(users)
    // })


    //READING DOCUMENT
    //fetching data from database Tasks

    // db.collection('Tasks').findOne({ _id: new ObjectID("619a0e416b8512084ce2e718") },
    // (error,desc)=>{
    //     if(error){
    //         return console.log('Unable to fetch description')
    //     }
    //     console.log(desc)
    // })

    // db.collection('Tasks').find({completed: true}).toArray((error,status)=>{
    //     if(error){
    //         return console.log('Unable to fetch description')
    //     }
    //     console.log(status)
    // })


    //UPDATING THE DOCUMENT

    //  db.collection('Users').updateOne({
    //         _id: new ObjectID("619a0a7039c216217488cea5")
    //     }, {
    //        $inc:{
    //            age: -1
    //        }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // db.collection('Tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


    //DELETING DOCUMENT

    //  db.collection('Users').deleteMany({
    //      age: 18
    //  }).then((result)=>{
    //      console.log(result)
    //  }).catch((error)=>{
    //      console.log(error)
    //  })

    db.collection('Tasks').deleteOne({
        description: "Going to market"
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})