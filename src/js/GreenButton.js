const React = require('react')

const GreenButton = React.createClass({
    greenTone: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    getInitialState: function(){
        return {
            selected: ''
        };
    },
    handleClick: function(){
        if (this.state.selected === ''){
            this.setState({selected: ' green-pressed'})
            // Play Audio
            this.greenTone.play()
            setTimeout( () => {
                this.setState({selected: ''})
            }, 800)
        }
    },
    render () {
        return (
                <div className={"green-btn game-button" + this.state.selected} onClick={this.handleClick}></div>
        )
    }
})

module.exports = GreenButton