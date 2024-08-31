
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let tea = [];
let Id = 1;

// add a new tea
app.post('/teas',(req,res)=>{
    const {name,price} = req.body
    const newTea = {id:Id++,name,price}
    tea.push(newTea)
    res.status(201).send(newTea)
})

//  get all tea
app.get('/teas',(req,res) =>{
    res.status(200).send(tea)
})

// get a new tea with ID  
app.get('/teas/:id',(req,res)=>{
    const t = tea.find(t =>t.id === parseInt(req.params.id))
    if(!t){
        return res.status(404).send("tea not found")
    }
    return res.status(200).send(t)
})

// update tea
app.put('/teas/:id',(req,res)=>{
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