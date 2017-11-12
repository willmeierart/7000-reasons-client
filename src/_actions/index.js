import axios from 'axios'

export const FETCH_GRAPH = 'fetch_graph'

const BASE_ENDPOINT = 'https://api.graphcms.com/simple/v1/7000Reasons'

export function fetchGraph(reqObj){
  const request = axios.get(BASE_ENDPOINT).then(res=>res)
  return {
    type: FETCH_GRAPH,
    payload: request
  }
}
