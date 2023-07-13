// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
// 載入passport設定檔，要寫在 express-session 以後
const usePassport = require('./config/passport')

const routes = require('./routes')
require('./config/mongoose')
const PORT = process.env.PORT || 3000

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
// 呼叫 usePassport 函式並傳入 app，這條要寫在路由之前
usePassport(app)


// 路由
app.use(routes)

// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})