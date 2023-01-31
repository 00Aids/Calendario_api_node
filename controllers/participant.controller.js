
import Participant from "../models/participants.models.js";

const participant = new Participant();

class ParticipanController{

    createParticipants = async (req, response) => {
        try {
            const res = await participant.createParticipants(req, response)
            return response.send(res);
        } catch (error) {
            return response.send({
                "status": "error",
                "message": error.message
            })
        }
    }

//-------------------------------------------------------------------------------------

getParticipants = async (req, response) => {
    try {
        const res = await participant.createParticipants(req, response)
        return response.send(res);
    } catch (error) {
        return response.send({
            "status": "error",
            "message": error.message
        })
    }
}

//-------------------------------------------------------------------------------------

filterParticipants = async (req, response) => {
    try {
        const res = await participant.createParticipants(req, response)
        return response.send(res);
    } catch (error) {
        return response.send({
            "status": "error",
            "message": error.message
        })
    }
}

//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
 
}

export default ParticipanController
