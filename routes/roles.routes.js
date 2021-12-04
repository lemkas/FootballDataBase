const {Router} = require('express')
const sql = require('mssql')
const config = require('../config')
const router = Router()

router.get('/roles', async (req, res) =>{
    try {
       const pool = await sql.connect(config)
       const result = await pool.request().query('SELECT * FROM ROLE')
       res.json(result)
    } catch (error) {
        res.json(error)
    }
})










module.exports = router