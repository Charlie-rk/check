import express from 'express';
const app = express();

const server = app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
app.get("/",(req,res)=>{
    console.log("charlie --- ");
    res.send("hii i am Rustam pavri ");
})