import {FETCH_GRAPH} from '../_actions'

const initialState = {
  graphData:{}
}

export default function MainDataReducer(state=initialState, action){
  switch(action.type){
    case FETCH_GRAPH:{
      const newState = {...state}
      const sorted = action.payload.data.sort((a,b)=>{return a.id - b.id})
      console.log(action.payload.data);
      newState.graphData = sorted
      return newState }
    default:
      return state
  }
}
