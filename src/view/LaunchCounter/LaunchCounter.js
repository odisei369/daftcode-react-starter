import React from 'react';
import PropTypes from 'prop-types';
import './LaunchCounter.sass';

class LaunchCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentNumber: props.from,
                      intervalWorking: true};
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

    toDDMMSS (sec_num) {
        var days = Math.floor(sec_num/60/60/24)
        var hours = Math.floor((sec_num - 60*60*24*days)/60/60)
        var minutes = Math.floor((sec_num - 60*60*24*days - 60*60*hours)/60);

        if (minutes < 10) {minutes = "0"+minutes;}
        if (hours < 10) {hours = "0"+hours;}
        if (days < 10) {days = "0"+days;}
        return `${days} DAYS ${hours} HRS ${minutes} MINS TO START`;
    }

    render() {
        const { currentNumber } = this.state;
        const { to } = this.props;

        let message = null;
        if (to - currentNumber < 0){
            message = <div>ALREADY LAUNCHED!</div>
        } else {
            message = <div>{this.toDDMMSS(to - currentNumber)}</div>
        }

        return (
        <div className="LaunchCounter">
            {message}
        </div>
        );
    }
}

LaunchCounter.propTypes = {
    onSuccess: PropTypes.func,
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired
};

  export default LaunchCounter;