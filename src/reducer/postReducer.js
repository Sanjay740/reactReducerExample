import {FETCH_POSTS ,NEW_POST} from '../action/types';

const initialState = {
    items : [],
    item : {}
}

export default function(state = initialState ,action)
{   
    console.log(state)
    switch(action.type)
    {
        case FETCH_POSTS:       
        return {
            ...state,
            items : action.payload
        }

        case NEW_POST:       
        console.log("dfsfdsfsdf",action)
        return {
            ...state,
            item : action.payload
        }
        default :        
        return state
    }
}