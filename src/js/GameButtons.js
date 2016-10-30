const React = require('react')
const Button = require('./Button')


const GameButtons = React.createClass({
    colorchange: function() {

    },
    render() {
        return (
            <div>
                <div className="row">
                    <Button color="green" />
                    <Button color="red"/>
                </div>
                <div className="row">
                    <Button color="yellow" />
                    <Button color="blue"/>
                </div>
            </div>
        )
    }
})

module.exports = GameButtons