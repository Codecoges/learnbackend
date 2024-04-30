require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req, res) => {
    res.send('ankit Pandit Twitter account')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at codecoges.com</h1>')
})

app.get('/api/users',(req,res)=>{
    res.send([
      {
        userName:"ankit",
        password:"1nc56cn",
        emailId:"hggx2@gmail.com"
      },
      {
        userName:"ankit",
        password:"1nc56cn",
        emailId:"hggx2@gmail.com"
      },
      {
        userName:"ankit",
        password:"1nc56cn",
        emailId:"hggx2@gmail.com"
      },
      {
        userName:"ankit",
        password:"1nc56cn",
        emailId:"hggx2@gmail.com"
      },
      {
        userName:"ankit",
        password:"1nc56cn",
        emailId:"hggx2@gmail.com"
      },
      {
        userName:"ankit",
        password:"1nc56cn",
        emailId:"hggx2@gmail.com"
      },
      {
        userName:"ankit",
        password:"1nc56cn",
        emailId:"hggx2@gmail.com"
      },
      {
        userName:"ankit",
        password:"1nc56cn",
        emailId:"hggx2@gmail.com"
      },
      {
        userName:"ankit",
        password:"1nc56cn",
        emailId:"hggx2@gmail.com"
      }
    ])
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})