import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import GameMatcher from './GameMatcher';

const Games = () => {
    return (
        <BrowserRouter>
            <>
                {/* 공통인 부분 */}
                <Link to="/game/number-baseball?query=10&hello=bongjun&bye=react">숫자야구</Link>
                &npsp;
                <Link to="/game/rock-scissors-paper">가위바위보</Link>
                &npsp;
                <Link to="/game/lotto-game">로또생성기</Link>
                &nbsp;
                <Link to="/game/index">Game Matcher</Link>
            </>
            <>
                <Route path="/game/:name" component={GameMatcher} />
            </>
        </BrowserRouter>
    )
};

export default Games;