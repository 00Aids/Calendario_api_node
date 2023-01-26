import express from "express"
import  participantRouter  from "./routes/participant.routes.js"
import  festivalsRouter  from "./routes/festivals.routes.js"

const app = express()
app.use(express.json())

/*rutas importadas */
app.use(participantRouter)
app.use(festivalsRouter)

/*-------------*/

app.listen(3001)
console.log(" puerto conectado ")