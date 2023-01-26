import { Pool } from "../config/db.js"
// import Participant from "../models/participants.models.js"

export const getFestivals = async(req, res) => {
    const[rows] = await Pool.query('SELECT * FROM festivals')
    res.json(rows)
}

// export const filterFestivals = async(req, res) => {
//     const [rows] = await Pool.query('SELECT * FROM festivals WHERE id_festivals = ?', [req.params.id])
//     res.send({rows})
// }

export const createFestivals = async(req, res) => {
    const {title, description, START_DATE, ENDING_DATE} = req.body
    const [rows] = await Pool.query('INSERT INTO festivals(title, description, START_DATE, ENDING_DATE  ) VALUES (?, ?, ?, ?)', [title, description, START_DATE, ENDING_DATE])
    res.send("bien hecho cachaco")
 }

export const deleteFestivals = async (req, res) => {
    const [result] = await Pool.query('DELETE FROM festivals WHERE id = ?', [req.params.id])

    if(result.affectedRows <= 0 ) return res.status(404).json({
        messege: 'EVENTO no encontrado'
    })
    
    res.sendStatus(204)
} 

export const updateFestivals = async (req,res)=>{
    try {
        const { id } = req.params;
        const { title,description,START_DATE,ENDING_DATE } = req.body;  
        const [result] = await Pool.query(
          "UPDATE festivals SET title = IFNULL(?, title), description = IFNULL(?, description), START_DATE = IFNULL(?, START_DATE), ENDING_DATE = IFNULL(?, ENDING_DATE) WHERE id = ?",
          [title,description,START_DATE,ENDING_DATE, id]
        );
    
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "Event not found" });
        const [rows] = await Pool.query("SELECT * FROM festivals WHERE id = ?", [
          id,
        ]);
    
        res.json(rows[0]);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
}



