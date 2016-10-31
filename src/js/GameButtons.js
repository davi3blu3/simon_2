const React = require('react')
const Button = require('./Button')

const GameButtons = React.createClass({
    greenTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    redTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    yellowTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    blueTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
    render() {
        return (
            <div>
                <div className="row">
                    <Button color="green" tone={this.greenTone} />
                    <Button color="red" tone={this.redTone} />
                </div>
                <div className="row">
                    <Button color="yellow" tone={this.yellowTone} />
                    <Button color="blue" tone={this.blueTone} />
                </div>
            </div>
        )
    }
})

module.exports = GameButtons