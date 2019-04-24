const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

// Middlewares
const verifyAge = (req, res, next) => {
  console.log('data: ' + req.params.age)
  if (!isNaN(req.params.age)) {
    return next()
  } else {
    console.log('Params is not a number!')
    return res.redirect('/')
  }
}

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true // Similar ao nodemon, auto-restart
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const users = ['Helton', 'João', 'Igor']

// Rota inicial que renderiza uma página com um formulário com um único campo age que representa a idade do usuário
app.get('/', (req, res) => {
  return res.render('home', { users })
})

// Checa se a idade do usuário é maior que 18 e o redireciona para a rota /major , caso contrário o redireciona para a rota /minor
app.post('/check', (req, res) => {
  if (req.body.age > 18) {
    return res.redirect('/major' + '/' + req.body.age)
  } else {
    return res.redirect('/minor' + '/' + req.body.age)
  }
})

// Rota que renderiza uma página com o texto: Você é maior de idade e possui x anos , onde x deve ser o valor informado no input do formulário
app.get('/major/:age', verifyAge, (req, res) => {
  return res.render('major', { age: req.params.age })
})

// Rota que renderiza uma página com o texto: Você é menor de idade e possui x anos , onde x deve ser o valor informado no input do formulário
app.get('/minor/:age', verifyAge, (req, res) => {
  return res.render('minor', { age: req.params.age })
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3000)
