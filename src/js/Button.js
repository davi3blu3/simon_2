const React = require('react')

const Button = React.createClass({
    greenTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    redTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    yellowTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    blueTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
    getInitialState: function(){
        return {
            extraClass: ''
        };
    },
    handleClick: function(){
        if (this.state.selected === ''){
            // Change color to brighter version, with css element
            this.setState({extraClass: ' ' + this.props.color + '-pressed'})

            // Play Audio
            this[this.props.color + 'Tone'].play()

            // Revert color after delay by removing css element
            setTimeout( () => {
                this.setState({extraClass: ''})
            }, 800)
        }
    },
    render () {
        return (
                <div className={this.props.color + "-btn game-button" + this.state.extraClass} onClick={this.handleClick}></div>
        )
    }
})

module.exports = Button