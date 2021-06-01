import React from 'react';

class ClassMouse extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            x:0,
            y:0
        }
    }

    logPosition=(e)=>{
        console.log(e)
        this.setState({x: e.clientX, y: e.clientY})
    }

    componentDidMount(){
        window.addEventListener('mousemove', this.logPosition)
    }

    // for removing event listener
    componentWillUnmount(){
        window.removeEventListener('mousemove', this.logPosition)
    }

    render(){
        return(
            <div>
                X position: {this.state.x}
                Y position: {this.state.y}
            </div>
        )
    }
}
export default ClassMouse;