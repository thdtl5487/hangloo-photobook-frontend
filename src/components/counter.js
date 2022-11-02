import { useEffect, useState } from 'react';
import MainComponent from './MainComponent';

class selectDetailOption extends MainComponent{

    state = {
        number:0
    }
    
    handleIncrease = () => {
        this.setState({
            number : this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render(){
        return (
            <div>
                <h1>counter</h1>
                <div>값 : {this.handleDecrease}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }

}
export default selectDetailOption;