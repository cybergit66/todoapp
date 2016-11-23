var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function(){
        return {
            count: 0,
            countdownStatus: 'paused'
        };
  },
    componentDidUpdate: function(prevProps, prevState){
        if(this.state.countdownStatus !== prevState.countdownStatus){
            switch (this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    this.setState({count: 0, countdownStatus: 'paused'});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                    
            }
        }  
  },
    componentWillUnmount: function() {
        clearInterval(this.timer);
    },
    startTimer: function(){
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount <= 60000 ? newCount : 60000
            });

            if (newCount === 60000){
                this.setState({countdownStatus: 'paused'});
            }
        }, 1000);
  },
    handleSetCountup: function(){
        this.setState({
            countdownStatus: 'started'
        });
    },
    handleStatusChange: function(newStatus){
        this.setState({countdownStatus: newStatus});
    },
    render: function(){
        var {count,countdownStatus} = this.state;
        
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped'){
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };

        return (
        <div>
              <Clock totalSeconds={count}/>
              <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
        </div>
      )
}
});

module.exports = Timer;
