const {Router} = require('express')
const router = Router()
const sql = require('mssql')
const config = require('../config')
const jwt = require('jsonwebtoken')


router.post('/login', async (req, res) => {
    try {
        const {login, password} = req.body.data
        let pool = await sql.connect(config)
        let result = await pool.request()
            .query(`SELECT Login, Password, ID_admin from ADMIN WHERE Login = \'${login}\' AND Password = \'${password}\' `)
        if(result.recordset.length == 0) {
            return res.json({message: 'Неверный логин или пароль. Попробуйте снова!'})
        } 

        const token = jwt.sign(
            { userID: result.recordset.ID_admin },
            'lemkas football ozon',
            { expiresIn: '24h' }
        )

        res.json({ token })




    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})






module.exports = router

