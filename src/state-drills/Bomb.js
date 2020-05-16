import React from 'react';

class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            word: "tick"
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
            if(this.state.count >= 8){
                this.setState({word: "BOOM!!!"}) 
                console.log('interval cleared');
                clearInterval(this.interval)
            }else{
                switch(this.state.count % 2) {
                    case 0:
                        this.setState({word: "tick"})
                        break;
                    case 1: 
                        this.setState({word: "tock"})
                        break;
                }
            }
        }, 1000)
    }

    componentWillUnmount(){
        console.log("component unmounted")
        clearInterval(this.interval)
    }

    render(){
        return (
            <div>
                <p>{this.state.word}</p>
            </div>
        )
    }
}

export default Bomb;