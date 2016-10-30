const React = require('react')
const ReactDOM = require('react-dom')
const GameButtons = require('./GameButtons')
const GameControls = require('./GameControls')

const SimonGame = (
    <div className='container'>
        <GameControls />
        <GameButtons />
    </div>
)

ReactDOM.render(SimonGame, document.getElementById('app'))
