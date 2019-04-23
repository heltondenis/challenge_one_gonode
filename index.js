const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true // Similar ao nodemon, auto-restart
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const users = ['Helton', 'João', 'Igor']

app.get('/', (req, res) => {
  return res.render('njk', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3000)
