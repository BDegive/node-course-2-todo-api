// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5c63f05958a6aa25b7db1afb')
// },
// {
//     $set:
//     {
//         completed: true
//     }
// },
// {
//     returnOriginal: false
// }).then((result) => {
//     console.log(result)
// })

db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID('5c63ff9058a6aa25b7db1dff')},
    {$set: {
        name: 'Bernard'
    }},{
        returnOriginal: false
    }
).then((result) => {
    console.log(result, undefined, 2)
})


db.collection('Users').findOneAndUpdate({
    name: 'Bernard'},
    {
        $inc: 
        {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result, undefined, 2)
    })
 // client.close()

})