const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
})

// const Task=mongoose.model('Task',{
//         description:{
//                 type:String,
//                 required:true,
//                 trim:true
//         },
//         completed:{
//                 type :Boolean,
//                 default:false
//         }
// })

// const task = new Task({
//         description:'    Mongoose library work      ',
//         // completed:true
// })

// task.save().then((task)=>{
//       console.log(task)
// }).catch((error) =>{
//        console.log('error!',error)
// })

