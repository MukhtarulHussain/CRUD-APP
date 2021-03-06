const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./models/tasks')

const app = express();


const dbURI = 'mongodb+srv://MukhtarulHussain:qwertyroot@cluster0.cqyrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result =>{
    console.log(result)
    app.listen(5000)
    {
      console.log("Port 5000 connected....")
    }
    console.log("Mongodb Connected.....")
})
.catch(err => console.log(err));

app.get('/add-task1', (req, res)=>{
    const task = new tasks({
        title: "Task1",
        Description: 'Task1 going on..',
        Completed: true
    })
    task.save()
      .then((result) => {
        console.log(result)
        console.log('created...')
        res.send(result)
        
      })
      .catch((err)=>{
          console.log(err)
      })
})
app.get('/add-task2', (req, res)=>{
    const task = new tasks({
        title: 'Task2',
        Description: 'Task2 going on..',
        Completed: false
    })
    task.save()
      .then((result) => {
        console.log(result)
        console.log('created...')
        res.send(result)
        
      })
      .catch((err)=>{
          console.log(err)
      })
})
app.get('/add-task3', (req, res)=>{
    const task = new tasks({
        title: 'Task3',
        Description: 'Task3 going on..',
        Completed: false
    })
    task.save()
      .then((result) => {
        console.log(result)
        console.log('created...')
        res.send(result)
        
      })
      .catch((err)=>{
          console.log(err)
      })
})
app.get('/add-task4', (req, res)=>{
    const task = new tasks({
        title: 'Task4',
        Description: 'Task4 going on..',
        Completed: true
    })
    task.save()
      .then((result) => {
        console.log(result)
        console.log('created...')
        res.send(result)
        
      })
      .catch((err)=>{
          console.log(err)
      })
})


app.get('/find-completed', (req, res)=>{
    
    tasks.find({Completed: false}).count()
      .then((result) => {
        console.log('Found...')
        console.log(result)

        res.send(result)
    

      })
      .catch((err)=>{
          console.log(err)
      })

})

app.get('/all-tasks', (req, res)=>{
    tasks.find()
    
      .then((result) => {
          console.log(result)
        res.send(result)
       
      })
      .catch((err)=>{
          console.log(err)
      })
})


app.get('/update', (req, res)=>{
    
    tasks.update({Completed: true})
    
      .then((result) => {
        console.log(result)
        console.log('updated')
        res.send(result)
    

      })
      .catch((err)=>{
          console.log(err)
      })

})



app.get('/delete', (req, res)=>{
    
    tasks.findByIdAndDelete('628106452f937dbf36ef48d3')
      .then((result) => {
        console.log(result)
        console.log('Deleted')
        res.send(result)
    

      })
      .catch((err)=>{
          console.log(err)
      })

})


