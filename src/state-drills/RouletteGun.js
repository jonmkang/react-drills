import React from 'react';

class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber: 8
    }

    constructor(props){
        super(props)
        this.state={
            chamber: null,
            spinningTheChamber: false,
            event: " "
        }
    }

    rouletteStart = () => {
        console.log('roulette started')
        this.setState({spinningTheChamber: true}, () => this.setText())
        this.setText()
        setTimeout(this.pullTrigger , 2000)
    }

    pullTrigger = () => {
        console.log('trigger pulled')
        let randomChamber = Math.ceil(Math.random()*8)
        this.setState({spinningTheChamber: false})
        this.setText(randomChamber)
    }

    setText = (chamber) => {
        if(this.state.spinningTheChamber){
            console.log("spinning the chamber")
            this.setState({event: "spinning the chamber and pulling the trigger!..."})
        }else{
            switch(chamber === this.props.bulletInChamber){
                case true:
                    this.setState({event: "BANG!!!"})
                    break;
                case false:
                    this.setState({event: "you're safe!"})
                    break;
            }
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.rouletteStart}>Pull the trigger!</button>
                <p>{this.state.event}</p>
            </div>
        )
    }
}

export default RouletteGun;