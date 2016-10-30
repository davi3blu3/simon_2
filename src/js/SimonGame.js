const React = require('react')
const ReactDOM = require('react-dom')

const GameControls = React.createClass({
    render () {
        return (
            <div className="inner-circle">
                <h1 className="game-title">simon</h1>
                <div className="game-controls">
                    <div id="counter" className="round-counter">00</div>
                    <button id="start" className="control-btn">start/restart</button>              
                </div>
                <div>
                    <button id="strict" className="control-btn">strict mode</button> 
                </div> 
            </div>
        )
    }
})

const GameButtons = React.createClass({
    render() {
        return (
            <div>
                <div className="row">
                    <div id="green" className="green-btn game-button"></div>
                    <div id="red" className="red-btn game-button"></div>
                </div>
                <div className="row">
                    <div id="yellow" className="yellow-btn game-button"></div>
                    <div id="blue" className="blue-btn game-button"></div>
                </div>
            </div>
        )
    }
})

const SimonGame = (
    <div className='container'>
        <GameControls />
        <GameButtons />
    </div>
)

ReactDOM.render(SimonGame, document.getElementById('app'))
