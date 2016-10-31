const React = require('react')

const Button = React.createClass({
    getInitialState: function(){
        return {
            pressed: false
        };
    },
    handleClick: function(){
        if (!this.state.pressed){
            this.setState({pressed: true})
            this.props.tone.play()
            setTimeout( () => {
                this.setState({pressed: false})
            }, 800)
        }
    },
    classes: function(){
        let result = this.props.color + "-btn game-button"
        result += (this.state.pressed) ? " pressed" : ""
        return result
    },
    render() {
        return (
                <div className={this.classes()} onClick={this.handleClick}></div>
        )
    }
})

module.exports = Button