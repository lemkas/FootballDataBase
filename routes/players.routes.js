const {Router} = require('express')
const sql = require('mssql')
const config = require('../config')
const router = Router()

router.get('/players/:id', async (req, res) => {
    try {
        const {id} = req.params
        let pool = await sql.connect(config)
        let result = await pool.request()
            .query(`SELECT * FROM PLAYER INNER JOIN ROLE ON ROLE.ID_role = PLAYER.ID_role 
                WHERE PLAYER.ID_team = \'${id}\'`)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
})

router.post('/players/create', async (req, res) => {
    try {
        const {FirstName, LastName, MiddleName, ID_role, ID_team, Number, Weight, Height, Photo_url} = req.body.data
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('FirstName', sql.VarChar, FirstName)
            .input('LastName', sql.VarChar, LastName)
            .input('MiddleName', sql.VarChar, MiddleName)
            .input('ID_role', sql.Int, ID_role)
            .input('ID_team', sql.Int, ID_team)
            .input('Number', sql.Int, Number)
            .input('Weight', sql.Int, Weight)
            .input('Height', sql.Int, Height)
            .input('Photo_url', sql.Text, Photo_url)
            .query('INSERT INTO PLAYER (FirstName, LastName, MiddleName, ID_role, ID_team, Number, Weight, Height, Photo_url) VALUES (@FirstName, @LastName, @MiddleName, @ID_role, @ID_team, @Number, @Weight, @Height, @Photo_url)')
        
        res.status(200)
    } catch (error) {
        res.json(error)
    }
})

router.post('/players/delete/:id', async (req, res) => {
    try {
        const {id} = req.params
        console.log(id)
        let pool = await sql.connect(config)
        let result = await pool.request()
            .query(`DELETE FROM PLAYER WHERE PLAYER.ID_player = \'${id}\'`)
        res.json({message: 'Deleted successfuly'})
    } catch (error) {
        res.json(error)
    }
})

module.exports = router