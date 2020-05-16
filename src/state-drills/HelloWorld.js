import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
    constructor(props){
        super(props)
        this.state={
            who: "world"
        }
    }

    helloFriend = () => {
        console.log('Set state to friend')
        this.setState({who: "friend"})
    }

    helloReact = () => {
        console.log('Set state to React')
        this.setState({who: "React"})
    }

    helloWorld = () => {
        console.log('Set state to world')
        this.setState({who: "world"})
    }

    render(){
        return(
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={this.helloFriend}>Friend</button>
                <button onClick={this.helloReact}>React</button>
                <button onClick={this.helloWorld}>World</button>
            </div>
        )
    }

}

export default HelloWorld;