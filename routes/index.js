// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 準備引入路由模組
// 引入 home 模組程式碼
const home = require('./modules/home')
const todo = require('./modules/todo')
// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/', home)
router.use('/todos', todo)
// 匯出路由器
module.exports = router