const express = require('express');
const app = express();
const PORT = 3344


app.use(cors())
app.use(express.json())

app.use('/',indexRouter);
app.use((err,req,res,next)=>{
    const errMsg = err ? err.toString() : 'Error loading';
    res.status(500).json({})
})


app.listen(`${PORT}`, () => {
    console.log(`listening on ${PORT}`)
})