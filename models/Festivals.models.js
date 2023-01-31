
import {Pool} from "../config/db.js";


class Festivals {
    getFestivals = async(req, res) => {
        const[rows] = await Pool.query('SELECT * FROM festivals')
        res.json(rows)
    }
    
    // export const filterFestivals = async(req, res) => {
    //     const [rows] = await Pool.query('SELECT * FROM festivals WHERE id_festivals = ?', [req.params.id])
    //     res.send({rows})
    // }
    
    createFestivals = async(req, res) => {
        const {title, description, START_DATE, ENDING_DATE} = req.body
        const [rows] = await Pool.query('INSERT INTO festivals(title, description, START_DATE, ENDING_DATE  ) VALUES (?, ?, ?, ?)', [title, description, START_DATE, ENDING_DATE])
        res.send("bien hecho cachaco")
     }

     //OBTENER DATOS POR  AÑO 
    getYear = async(req,res)=>{
        try{
            const {year}=req.params

            const [rows] = await Pool.query(" SELECT * FROM festivals WHERE YEAR(START_DATE) = ?; ",[year]);
            return rows[0]

        }catch(error){
            return res.status(500).json({ message: "evento no encontrado en esas fechas" });
        }
    }

    getMonth = async(req,res)=>{
        try{
            const {month}=req.params

            const [rows] = await Pool.query(" SELECT * FROM festivals WHERE MONTH(START_DATE) = ?; ",[month]);
            return rows[0]

        }catch(error){
            return res.status(500).json({ message: "evento no encontrado en esas fechas" });
        }
    }

    getDay = async(req,res)=>{
        try{
            const {day}=req.params

            const [rows] = await Pool.query(" SELECT * FROM festivals WHERE DAY(START_DATE) = ?; ",[day]);
            return rows[0]

        }catch(error){
            return res.status(500).json({ message: "evento no encontrado en esas fechas" });
        }
    }

    betweenDates = async(req,res)=>{
        
        const {first,second} = req.body;
        const [index] = await Pool.query("SELECT * FROM festivals WHERE festivals.START_DATE BETWEEN (?) AND (?)",[first,second])
        if (index.length<=0)return ({
        message: 'No Events'
        })
        return ({index});
}


    //POR FECHA
    getYearElderly = async(req,res)=>{
        const {title} = req.params
        const [rows] = await Pool.query("SELECT title, START_DATE FROM festivals ORDER BY START_DATE DESC")
        return(title)
    }
    

    getYearSmaller = async(req,res)=>{
        const [rows] = await Pool.query("SELECT title, START_DATE FROM festivals ORDER BY START_DATE ASC")
        return (rows)
    }


    
 }

export default Festivals