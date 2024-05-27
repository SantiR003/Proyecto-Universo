import axios from "axios";

const baseUrlPlanet = "http://localhost:8080/api/planets";
const baseUrlStars = "http://localhost:8080/api/stars";


export const findById = async(id, handlerUrl) =>{
    let response;
    try {
        if(handlerUrl === 'p')
            {
                 response = await axios.get(`${baseUrlPlanet}/findById/${id}`);
            }
            else{
                 response = await axios.get(`${baseUrlStars}/findById/${id}`);
            }
      
        return response;
    } catch (error) {
        console.error('Error fetching planet by id', error);
        throw error;
    }

    return null;
}

