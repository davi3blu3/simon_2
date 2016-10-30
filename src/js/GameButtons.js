const React = require('react')

const GreenButton = React.createClass({
    getInitialState: function(){
        return {
            selected: ''
        };
    },
    handleClick: function(){
        if (this.state.selected === ''){
            this.setState({selected: ' green-pressed'})
            // Play Audio
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