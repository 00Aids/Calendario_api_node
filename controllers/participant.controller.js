import { Pool } from "../config/db.js"
// import Participant from "../models/participants.models.js"

export const getParticipants = async(req, res) => {
    const[rows] = await Pool.query('SELECT * FROM participants')
    res.json(rows)
}

export const filterParticipants = async(req, res) => {
    const [rows] = await Pool.query('SELECT * FROM participants_festivals WHERE id_participant = ?', [req.params.id])
    res.send({rows})
}

export const createParticipants = async(req, res) => {
    const {name} = req.body
    const [rows] = await Pool.query('INSERT INTO participant(name) VALUES (?)', [name])
 }

export const deleteParticipans = async (req, res) => {
    const [result] = await Pool.query('DELETE FROM participant WHERE id = ?', [req.params.id])

    if(result.affectedRows <= 0 ) return res.status(404).json({
        messege: 'participante no encontrado'
    })
    
    res.sendStatus(204)
} 

export const updateParticipans = async (req,res)=>{
    try {
        const [resul] = await Pool.query("UPDATE participant SET  name=IFNULL(?,name) WHERE id = ?",[req.body.name,req.params.id])
        res.send("updated correctly")
    } catch (error) {
        return res.status(500).json({
            message:'ERROR'
        })
    }
}
