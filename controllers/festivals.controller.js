import Pool from "mysql/lib/Pool.js";
import Festivals from "../models/Festivals.models.js"
// import Participant from "../models/participants.models.js"

const festivals = new Festivals();



class FestivalsController{

  getFestivals = async (req, response) => {
    try {
        const res = await festivals.getFestivals(req, response)
        return response.send(res);
    } catch (error) {
        return response.send({
            "status": "error",
            "message": error.message
        })
    }
}
//-------------------------------------------------------------------------------------

createFestivals = async (req, response) => {
  try {
      const res = await festivals.createFestivals(req, response)
      return response.send(res);
  } catch (error) {
      return response.send({
          "status": "error",
          "message": error.message
      })
  }
}
//-------------------------------------------------------------------------------------

getYear = async (req, response) => {
  try {
      const res = await festivals.getYear(req, response)
      return response.send(res);
  } catch (error) {
      return response.send({
          "status": "error",
          "message": error.message
      })
    }
  }

//-------------------------------------------------------------------------------------

getMonth = async (req, response) => {
    try {
        const res = await festivals.getMonth(req, response)
        return response.send(res);
    } catch (error) {
        return response.send({
            "status": "error",
            "message": error.message
        })
      }
    }

//-------------------------------------------------------------------------------------

getDay = async (req, response) => {
    try {
        const res = await festivals.getDay(req, response)
        return response.send(res);
    } catch (error) {
        return response.send({
            "status": "error",
            "message": error.message
        })
      }
    }

//-------------------------------------------------------------------------------------

betweenDates = async (req, response) => {
    try {
        const res = await festivals.betweenDates(req, response)
        return response.send(res);
    } catch (error) {
        return response.send({
            "status": "error",
            "message": error.message
        })
      }
    }

//-------------------------------------------------------------------------------------

    getYearElderly = async(req,response)=>{
        try{
            const res = await festivals.getYearElderly(req, response)
            return response.send(res);

        }catch(error){
            return response.send({
                "status": "error",
                "message": error.message

            })
        }
    }

    //--------------------------------------------------------------------------- 
     

    getYearSmaller = async (req, response) => {
        try {
            const res = await festivals.getYearSmaller(req, response)
            return response.send(res);
        } catch (error) {
            return response.send({
                "status": "error",
                "message": error.message
            })
        }
    }



}
export default FestivalsController

