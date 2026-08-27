const express =require('express');
const app =express();

app.get("/",(req,res) => {
    res.send("response from express")
});
app.listen(3000, () => {
    console.log("server running in localhost:3000")
});
