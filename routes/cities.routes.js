const {Router} = require('express')
const sql = require('mssql')
const config = require('../config')
const router = Router()

router.get('/cities',  async (req, res) => {
    try { 
        let pool = await sql.connect(config)
        let result = await pool.request().query('SELECT * FROM CITY')
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: "Что-то пошло не так" })
    }
})

router.post('/cities/create', async (req, res) => {
    try {
        const {city} = req.body.data
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('City', sql.VarChar, city)
            .query('INSERT INTO CITY (City) VALUES (@City)')
    } catch (e) {
        res.json(e)
    }
})

module.exports = router