import React, { Component } from 'react'
import Profilecard from './Profilecard';
import Profileplaceholder from './Profileplaceholder';
import "./Profiles.css"
export class Profiles extends Component {

    state = {
        data: [],
        placeHolder: [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}],
        loading: true
    }

    componentDidMount(){

      console.log("request will fetch data in 3 sec")
      setTimeout(() =>{
            fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then( user => this.setState( {data: user.data, loading: false }))
            .catch(err => console.log(err))
        }, 3000);

    }
    render() {

        return (
            <>
            <div className= "profiles__container"> 
            { (!this.state.loading)?(this.state.data.map(info => (  
                 <Profilecard key = {info.id} info ={info} />
            ))):(
                this.state.placeHolder.map( info => (  
                    <Profileplaceholder key={info.id}/>
               ))
            )}
                
            </div>
            </>
        )
    }
}

export default Profiles
