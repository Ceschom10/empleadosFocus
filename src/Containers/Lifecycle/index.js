import React, { Component } from 'react';
import ProtoType from 'prop-types';

class Lifecycle extends Component{
    constructor(props){
        super(props);
    this.state={
        value: 1000,
        text: 'hola',
    };    
    }


componentDidMount(){
    console.log('se renderizo');
}

componentDidUpdate(){
    console.log('se actualizo');
}
componentWillUnmount(){
    console.log('voy a ser destruido');
}

render(){
    return(
        <div>
            <p>Hola soy una clase</p>
            <p>{this.state.value * 5}</p>
            <p>{this.state.text.toUpperCase()}</p>
            <button onClick={()=> this.setState({
                value: 10000
            })}>+</button>
        </div>
        
    );
}
}
Lifecycle.propTypes = {};

export default Lifecycle;