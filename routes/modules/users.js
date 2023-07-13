const express = require('express')        // 引用 Express 與 Express 路由器
const router = express.Router()          // 準備引入路由模組
const User = require('../../models/user')   // 引用 user model
const passport = require('passport')     // 引用 passport

// 登錄頁路由
router.get('/login', (req, res) => {
  res.render('login')
})

// 登錄路由
// 加入 middleware，驗證 request 登入狀態
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

// 註冊頁路由
router.get('/register', (req, res) => {
  res.render('register')
})

// 註冊路由
router.post('/register', (req, res) => {
  // 取得註冊表單參數
  const { name, email, password, confirmPassword } = req.body
  console.log(email)
  // 檢查使用者是否已經註冊
  User.findOne({ email }).then(user => {
    // 如果已經註冊：退回原本畫面
    if (user) {
      console.log('User already exists.')
      res.render('register', { name, email, password, confirmPassword })
    } else {
      // 如果還沒註冊：寫入資料庫
      return User.create({ name, email, password })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    }
  })
    .catch(err => console.log(err))
})

//登出路由
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/users/login')
})



module.exports = router