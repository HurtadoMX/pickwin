import axios from 'axios'


export function getPickers(){

    return async function(dispatch){
        var json = await axios("https://mocki.io/v1/e3c231c5-44ca-465d-96cc-b78a74b2fa48",{})

        console.log("json", json)

        return dispatch({
            type: 'GET_PICKERS',
            payload: json.data.matches
        })
    }
   
}