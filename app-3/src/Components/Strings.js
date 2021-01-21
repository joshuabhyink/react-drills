import React, {Component} from 'react'

class Strings extends Component {
    constructor(){
        super()
        this.state = {
            carsString: '',
            cars: ['Volkswagen', 'Honda', 'Toyota', 'Jeep', 'Chevy']
        }
    }
    filterString(value){
        this.setState({carsString: value})
    }
    render(){
        let cars = this.state.cars.filter((element, index) => element.includes(this.state.carsString))
        .map((element, index) => <h2 key={index}>{element}</h2>)

        //{
            // if(element.includes(this.state.carsString)){
            //     return true
            // } else {
            //     return false
            // }
        // })
        return(
            <div>
                <input className='inputLine' onChange={(e) => this.filterString(e.target.value)} value={this.state.carsString}/>
                {cars}
            </div>
        )
    }
}




export default Strings