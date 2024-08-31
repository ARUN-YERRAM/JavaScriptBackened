import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

let tea = [];
let Id = 1;

app.post('/teas',(res,res)=>{
    const {name,price} = req.body
})
app.get("/",(req,res) =>{
    res.send("Hello World!!!!!!!!!!");
})

app.get("/ice-tea",(req,res) =>{
    res.send("Hello World!!!!!!!!!! from ice - tea");
})
app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}/`);
})