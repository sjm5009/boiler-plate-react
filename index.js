const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");
const { User } = require("./models/User");

const config = require('./config/key');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))
// application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
     .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕 나는 쵸만! 호호이~')
})


app.post('/register', (req, res)=>{
  // 회원 가입 시 필요한 정보들을 client에서 가져오면
  // 데이터를 DB에 넣어준다.
  const user = new User(req.body)
  user.save((err, userInfo)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({success: true, user: userInfo})
  })

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})