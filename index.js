const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://choman:q1w2e3r4@choman.ijrfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
     .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕 나는 쵸만!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})