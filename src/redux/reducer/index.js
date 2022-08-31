//estodo inicial
const initialState={
    //necesitamos el estado de los pokemones
    pickers: [],
}

//le pasamos por parametro el estado inicial antes mencionado
//ademas le pasamos un action
function rootReducer(state = initialState, action){
    //ahora creamos el switch para los casos
    //el action.type es el type que leera de los actions
    //el que sea igual es el que usara
    switch(action.type){
        //ponemos nuestros caso que trae a todo los pokemones
        case 'GET_PICKERS':
        return{
            ...state,
            pickers:action.payload,
        }
        default:
        return state;
    }
    
}

export default rootReducer;