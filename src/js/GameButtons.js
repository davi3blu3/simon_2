const React = require('react')

const GameButtons = React.createClass({
    colorchange: function() {

    },
    render() {
        return (
            <div>
                <div className="row">
                    <div id="green" className="green-btn game-button" onClick={colorchange(green)}></div>
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