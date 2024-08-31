// require('dotenv').config()
import 'dotenv/config'
import express from 'express';
import logger from './logger.js';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const morganFormat = ":method :url :status :response-time ms";

app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    })
  );

  
let tea = [];
let Id = 1;

// add a new tea
app.post('/teas',(req,res)=>{
    logger.info("A post request is made to add a new tea");
    const {name,price} = req.body
    const newTea = {id:Id++,name,price}
    tea.push(newTea)
    res.status(201).send(newTea)
})

//  get all tea
app.get('/teas',(req,res) =>{
    logger.info("A get request is made to get all tea");
    res.status(200).send(tea)
})

// get a new tea with ID  
app.get('/teas/:id',(req,res)=>{
    logger.info("A get request is made to get a tea with ID");
    const t = tea.find(t =>t.id === parseInt(req.params.id))
    if(!t){
        return res.status(404).send("tea not found")
    }
    return res.status(200).send(t)
})

// update tea
app.put('/teas/:id',(req,res)=>{
    logger.info("A put request is made to update a tea with ID");
    const t = tea.find(t =>t.id === parseInt(req.params.id))
    if(!t){
        return res.status(404).send("tea not found")
    }
    const {name,price} = req.body
    t.name = name
    t.price = price
    res.send(200).send(t)
})

// delete tea
app.delete('/teas/:id',(req,res)=>{
    logger.info("A delete request is made to delete a tea with ID");
    const t = tea.find(t =>t.id === parseInt(req.params.id))
    if(!t){
        return res.status(404).send("tea not found")
    }
    const index = tea.indexOf(t)
    tea.splice(index,1)
    return res.status(200).send('deleted')
})

// app.get("/",(req,res) =>{
//     res.send("Hello World!!!!!!!!!!");
// })

// app.get("/ice-tea",(req,res) =>{
//     res.send("Hello World!!!!!!!!!! from ice - tea");
// })


app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}/`);
})