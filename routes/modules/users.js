// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 登錄頁路由
router.get('/login', (req, res) => {
  res.render('login')
})

// 登錄路由
router.post('/login', (req, res) => {
})

// 註冊頁路由
router.get('/register', (req, res) => {
  res.render('register')
})

module.exports = router