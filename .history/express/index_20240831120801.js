import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let tea = [];
let Id = 1;

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
    res.status(200).send(t)
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