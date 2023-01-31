import { Pool } from "../config/db.js"

 class ParticipantFestivals{

        createParticipantFestivals = async(req,res) =>{
                    const {id_festivals,id_participant} = req.body;
                    const event = await Pool.query("INSERT INTO participants_festivals (id_festivals,id_participant) VALUES (?,?)",[id_festivals,id_participant])
                    return event
                }
            
            
        participanOfEvent = async(req,res)=>{
        
                const {title} = req.body
                const [participant] = await Pool.query("SELECT participant.name FROM participant INNER JOIN participants_festivals ON participants_festivals.id_participant =   participant.id INNER JOIN festivals ON festivals.id = participants_festivals.id_festivals WHERE festivals.title = (?)",[title])
                return participant
        }
          
        eventOfParticipant = async(req,res)=>{
        const {id_participant} = req.body
        const [index] = await Pool.query("SELECT * FROM participants_festivals INNER JOIN festivals ON festivals.id = participants_festivals.id_festivals WHERE id_participant = (?)",[id_participant])
        
        return index

        }

       
        longerDate = async(req,res)=>{
            const [index] = await Pool.query("SELECT * FROM festivals WHERE festivals.START_DATE > (?)",[req.body.date])
            if (index.length<=0)return({
            message: 'No Events'
            })
            return (index);
        }
        
        lowerDate = async(req,res)=>{
            const [index] = await Pool.query("SELECT * FROM festivals WHERE festivals.START_DATE < (?)",[req.body.date])
            if (index.length<=0)return ({
            message: 'No Events'
            })
            return (index);
        }
        

}


export default ParticipantFestivals