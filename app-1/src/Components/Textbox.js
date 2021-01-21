import React, {Component} from 'react'
 

class Textbox extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
        }
    }
    changeInput(value){
        this.setState({userInput: value})
    }
    render(){
        return (
            <div>
                <input className='inputLine' onChange={(e) => {this.changeInput(e.target.value)}} type='text'></input>
                <p>{this.state.userInput}</p>
            </div>
        )
    }
}







export default Textbox