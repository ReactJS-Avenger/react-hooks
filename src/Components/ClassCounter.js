import React from 'react';

class ClassCounter extends React.Component{
    constructor(){
        super();
        this.state ={ count: 0}
    }

    handleCount= () =>{
        //unsafe way of incrementing count
        this.setState({count : this.state.count + 1 })
    }
    render(){
        return(
            <div>
                Counter: {this.state.count}
                <button onClick={this.handleCount}>Counter</button>
            </div>
        )
    }
}
export default ClassCounter;