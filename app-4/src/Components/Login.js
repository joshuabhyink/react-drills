import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            userName: '',
            password: '',
        }
    }
    changeUsername(value){
        this.setState({userName: value})
    }
    changepassword(value){
        this.setState({password: value})
    }
    submitUsernamePassword(){
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
    }
    render(){
        return (
            <div>
                <input className='inputLine' onChange={e => this.changeUsername(e.target.value)} type='text' value={this.state.userName}/>
                <input className='inputLine' onChange={e => this.changepassword(e.target.value)} type='text' value={this.state.password}/>
                <button className='button' onClick={() => {this.submitUsernamePassword(this.state.userName, this.state.password)}}>Submit</button>
            </div>
        )
    }
}





export default Login