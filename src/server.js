 const express = require('express')
 const app = express()

 app.set('view engine', 'ejs')
 app.use(express.static('src'))
 app.listen(3000)
