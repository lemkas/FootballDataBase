const {Router} = require('express')
const sql = require('mssql')
const config = require('../config')
const router = Router()


router.get('/teams',  async (req, res) => {
    try { 
        let pool = await sql.connect(config)
        let result = await pool.request().query('SELECT * FROM TEAM INNER JOIN CITY ON CITY.ID_city = TEAM.ID_city')
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: "Что-то пошло не так! Попробуйте снова!" })
    }
})

router.post('/teams/create',  async (req, res) => {
    const {teamName, teamUrl, ID_city, ID_stadium} = req.body.data 
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('TeamName', sql.VarChar, teamName)
            .input('logo_url', sql.Text, teamUrl)
            .input('ID_city', sql.Int, ID_city)
            .input('ID_stadium', sql.Int, ID_stadium)
            .query('INSERT INTO TEAM (TeamName, logo_url, ID_city, ID_stadium) VALUES (@TeamName, @logo_url, @ID_city, @ID_stadium)')
        
        res.status(200)
    } catch (e) {
        res.json(e)
    }
    
})

router.get('/teams/:id', async (req, res) => {
    try {
        const {id} = req.params
        let pool = await sql.connect(config)
        let result = await pool.request()
            .query(`SELECT * FROM TEAM INNER JOIN CITY ON CITY.ID_city = TEAM.ID_city 
                INNER JOIN STADIUM ON STADIUM.ID_stadium = TEAM.ID_stadium WHERE TEAM.ID_team = \'${id}\'`)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
})

router.post('/teams/delete/:id', async (req, res) => {
    try {
        const {id} = req.params
        let pool = await sql.connect(config)
        let result = await pool.request()
            .query(`DELETE FROM TEAM WHERE TEAM.ID_team = \'${id}\'`)
        res.json({message: 'Deleted successfuly'})
    } catch (error) {
        res.json(error)
    }
})



module.exports = router

