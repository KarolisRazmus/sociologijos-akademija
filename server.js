const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/1', function (req, res) {
  res.render('home');
})

app.get('/2', function (req, res) {
    res.render('home2');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
