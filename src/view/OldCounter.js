import React from 'react';
import PropTypes from 'prop-types';

class OldCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentNumber: props.from,
                      intervalWorking: true};
        this.resetCounter = this.resetCounter.bind(this);
    }

    componentDidMount(){
        this.bindInterval();
    }

     componentWillUnmount() {
        clearInterval(this.interval);
    }

    bindInterval(){
        this.setState({intervalWorking: true});
        this.interval = setInterval(() => {
            this.setState({currentNumber: this.state.currentNumber + 1});
            if(this.state.currentNumber == this.props.to){
                if(this.props.onSuccess){
                    this.props.onSuccess();
                }
                clearInterval(this.interval);
                this.setState({intervalWorking: false});
            }
          }, 1000);
    }

    resetCounter(){
        if(this.state.currentNumber == this.props.to){
            this.setState({currentNumber: this.props.from});
            this.bindInterval();
            return;
        }
        if(this.state.intervalWorking){
            clearInterval(this.interval);
            this.setState({intervalWorking: false});
        } else {
            this.bindInterval();
        }

    }

    toMMSS (sec_num) {
        var minutes = Math.floor(sec_num / 60);
        var seconds = sec_num - (minutes * 60);

        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return minutes+':'+seconds;
    }

    render() {
        const { currentNumber } = this.state;
        const { to } = this.props;

        let message;
        if (this.state.intervalWorking){
            message = null;
        } else if(this.state.currentNumber == this.props.to){
            message = <div>completed</div>;
        } else {
            message = <div>paused</div>;
        }

        return (
        <div onClick={this.resetCounter} style={{border: "1px solid red"}}>
            <div>Current timer state: {this.toMMSS(currentNumber)}</div>
            <div>It will count until: {this.toMMSS(to)}</div>
            <div>{to-currentNumber}</div>
            {message}
        </div>
        );
    }
}

Counter.propTypes = {
    onSuccess: PropTypes.func,
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired
};

  export default OldCounter;