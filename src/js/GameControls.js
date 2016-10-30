const React = require('react')
const GreenButton = require('./GreenButton')

const GameControls = React.createClass({
    handleClick: function() {
        console.log("start clicked")
        GreenButton.handleClick();
    },
    render () {
        return (
            <div className="inner-circle">
                <h1 className="game-title">simon</h1>
                <div className="game-controls">
                    <div id="counter" className="round-counter">00</div>
                    <button id="start" className="control-btn" onClick={this.handleClick}>start/restart</button>              
                </div>
                <div>
                    <button id="strict" className="control-btn">strict mode</button> 
                </div> 
            </div>
        )
    }
})

module.exports = GameControls