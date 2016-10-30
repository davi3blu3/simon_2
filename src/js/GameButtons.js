const React = require('react')
const GreenButton = require('./GreenButton')


const GameButtons = React.createClass({
    colorchange: function() {

    },
    render() {
        return (
            <div>
                <div className="row">
                    <GreenButton />
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

module.exports = GameButtons