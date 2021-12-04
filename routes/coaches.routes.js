const {Router} = require('express')
const sql = require('mssql')
const config = require('../config')
const router = Router()

router.get('/coaches/:id', async (req, res) => {
    try {
        const {id} = req.params
        let pool = await sql.connect(config)
        let result = await pool.request()
            .query(`SELECT * FROM COACH INNER JOIN COACH_STATUS ON COACH_STATUS.ID_status = COACH.ID_status WHERE COACH.ID_team = \'${id}\'`)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
})

router.get('/coachestatus', async (req, res) => {
    try {
        let pool = await sql.connect(config)
        let result = await pool.request().query('SELECT * FROM COACH_STATUS')
        res.json(result)
    } catch (error) {
        res.json(error)
    }
})

router.post('/coaches/create', async (req, res) => {
    const {FirstName, LastName, MiddleName, Photo_url, ID_team, ID_status} =req.body.data
    console.log(ID_status)
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('FirstName', sql.VarChar, FirstName)
            .input('LastName', sql.VarChar, LastName)
            .input('MiddleName', sql.VarChar, MiddleName)
            .input('Photo_url', sql.VarChar, Photo_url)
            .input('ID_team', sql.Int, ID_team)
            .input('ID_status', sql.Int, ID_status)
            .query('INSERT INTO COACH (FirstName, LastName, MiddleName, Photo_url, ID_team, ID_status) VALUES (@FirstName, @LastName, @MiddleName, @Photo_url, @ID_team, @ID_status)')
        res.json({message: 'Coach is created successfully'})
    } catch (error) {
        res.json(error)
    }
})

router.post('/coaches/delete/:id', async (req, res) => {
    try {
        const {id} = req.params
        console.log(id)
        let pool = await sql.connect(config)
        let result = await pool.request()
            .query(`DELETE FROM COACH WHERE COACH.ID_coach = \'${id}\'`)
        res.json({message: 'Deleted successfuly'})
    } catch (error) {
        res.json(error)
    }
})

module.exports = router