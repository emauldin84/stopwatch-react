import React from 'react'

class Stopwatch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status: false,
            runningTime: 0,
        };
    }

    handleClick = () => {
        
        this.setState( state => {
            if (state.status) {
                clearInterval(this.timer);
            } else {
                
                let interval = 1;
                this.timer = setInterval (() => {
                    this.setState({ 
                        runningTime: this.state.runningTime + interval, 
                        status: true })
                }, 1000)
            }
            return { status: !state.status};
        })
    }
            
    handleReset = () => {
        this.setState({
            status: false,
            runningTime: 0,
        })
    }

    convertTime = (secs) => {
        secs = Math.round(secs);
        let hours = Math.floor(secs / (60 *60));
        let divisorForMins = secs % (60 * 60);
        let minutes = Math.floor(divisorForMins / 60);
        let divisorForSecs = divisorForMins % 60;
        let seconds = Math.ceil(divisorForSecs);
        let fullTime = `${hours}:${minutes}:${seconds}`
        return fullTime
    }

    render () {

        const {status, runningTime} = this.state; 
            return (
                <div>
                    <h3>Stopwatch</h3>
                    <p>{this.convertTime(runningTime)}</p>
                    <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>      
            )
    }
} 








export default Stopwatch;