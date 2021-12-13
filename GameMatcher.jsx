import React, { Component } from 'react';
// import NumberBaseball from '';
// import RSP from '';
// import Lotto from '';

class GameMatcher extends Component {
    render() {
        let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
        console.log(urlSearchParams.get('hello'));
        if (this.props.match.prams.name === 'number-baseball') {
            return <NumberBaseball />
        } else if(this.props.match.prams.name === 'rock-scissors-paper') {
            return <Rsp />
        } else if(this.props.match.prams.name === 'lotto-game') {
            return <Lotto />
        }
        return (
            <>
                <NumberBaseball />
                <RSP />
                <Lotto />
            </>
        );
    }
}
export default GameMatcher;