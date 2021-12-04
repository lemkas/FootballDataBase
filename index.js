const express = require("express")
const sql = require('mssql')
const config = require('./config')
const cors = require('cors')
// const dboperations = require("./dboperations")




const app = express()
app.use(express.json({ extended: true }))
app.use(cors())
app.use('/', require('./routes/auth.routes'))
app.use('/', require('./routes/teams.routes'))
app.use('/', require('./routes/cities.routes'))
app.use('/', require('./routes/stadiums.routes'))
app.use('/', require('./routes/players.routes'))
app.use('/', require('./routes/coaches.routes'))
app.use('/', require('./routes/roles.routes'))





const PORT = process.env.PORT || 5000

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

