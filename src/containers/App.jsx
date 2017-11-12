import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/main.css'

import {fetchGraph} from '../_actions'

import AppRouter from '../components/Architecture/AppRouter'

class App extends Component {
  // constructor(props){
  //   super(props)
    // const {WPdata} = this.props.data
    // const freshy = []
    // async function fresh(){
    //   const pages = await fetchWPpages().payload
    //   const posts = await fetchWPposts().payload
    //   freshy.concat([pages,posts])
    //   console.log(freshy)
    //   return freshy
    // }
    // fresh().then(()=>{
    //   if(WPdata[0]!==freshy.data[0]){
    //     fetchBoth()
    //   }
    // })
  // }

  // componentDidMount(){
  //   const fetchBoth=(()=>{
  //     this.props.onFetchWPpages()
  //     this.props.onFetchWPposts()
  //   })()
  // }

  render() {
    // const {FnState} = this.props
    return (
      <div className="app">
        <AppRouter {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{return {data:state}}
const mapDispatchToProps=(dispatch)=>{return{
  onFetchGraph:(reqObj)=>{dispatch(fetchGraph(reqObj))}
}}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App
