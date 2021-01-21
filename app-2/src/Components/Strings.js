import React, {Component} from 'react'

class Strings extends Component{
    constructor(){
        super()
        this.state = {
            cars: ['Volkswagen', 'Toyota', 'Honda', 'Jeep']
        }
    }
    render(){
        let cars = this.state.cars.map((element, index) => {
            return <h2 key={index}>{element}</h2>
        })

        return (
            <div className='cars'>
                {cars}
            </div>
        )
    }
}





export default Strings