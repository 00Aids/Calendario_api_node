import Pool from "mysql/lib/Pool.js";
import ParticipantFestivals from "../models/participants_festivals.models.js"
// import Participant from "../models/participants.models.js"

const participantFestivals = new ParticipantFestivals();



class ParticipantFestivalsController{

    createParticipantFestivals = async (req, response) => {
    try {
        const res = await participantFestivals.createParticipantFestivals(req, response)
        return response.send(res);
    } catch (error) {
        return response.send({
            "status": "error",
            "message": error.message
        })
    }
}


//-------------------------------------------------------------------------------------

participanOfEvent = async (req, response) => {
  try {
      const res = await participantFestivals.participanOfEvent(req, response)
      return response.send(res);
  } catch (error) {
      return response.send({
          "status": "error",
          "message": error.message
      })
  }
}
//-------------------------------------------------------------------------------------

eventOfParticipant = async (req, response) => {
  try {
      const res = await participantFestivals.eventOfParticipant(req, response)
      return response.send(res);
  } catch (error) {
      return response.send({
          "status": "error",
          "message": error.message
      })
    }
  }

//-------------------------------------------------------------------------------------

longerDate = async(req,response)=>{
        try{
            const res = await participantFestivals.longerDate(req, response)
            return response.send(res);

        }catch(error){
            return response.send({
                "status": "error",
                "message": error.message

            })
        }
    }

    //--------------------------------------------------------------------------- 
     

    lowerDate = async (req, response) => {
        try {
            const res = await participantFestivals.lowerDate(req, response)
            return response.send(res);
        } catch (error) {
            return response.send({
                "status": "error",
                "message": error.message
            })
        }
    }



}
export default ParticipantFestivalsController

