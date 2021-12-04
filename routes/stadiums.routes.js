const {Router} = require('express')
const sql = require('mssql')
const config = require('../config')
const router = Router()

router.get('/stadiums',  async (req, res) => {
    try { 
        let pool = await sql.connect(config)
        let result = await pool.request().query('SELECT * FROM STADIUM')
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: "Что-то пошло не так! Попробуйте снова" })
    }
})

router.post('/stadiums/create', async (req, res) => {
    try {
        const {name, address} = req.body.data
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('StadiumName', sql.VarChar, name)
            .input('Address', sql.Text, address)
            .query('INSERT INTO STADIUM (StadiumName, Address) VALUES (@StadiumName, @Address)')
    } catch (e) {
        res.json(e)
    }
})

module.exports = router