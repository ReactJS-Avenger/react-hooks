import React from 'react';

class ClassCounter extends React.Component{
    constructor(props){
        super(props)
        this.state ={ count: 0, name: ''}
    }

    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        //conditionally updating when the variable changes
        if(prevState.count !== this.state.count){
            console.log("updating is called.....")
            document.title = `clicked ${this.state.count} times`
        }
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                <button onClick={()=> this.setState({count: this.state.count+1})}>Count {this.state.count}</button>
            </div>
        )
    }
}
export default ClassCounter