import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import NumberBaseball from '';
// import RSP from '';
// import Lotto from '';

const Games = () => {
    return (
        <BrowserRouter>
            <>
                {/* 공통인 부분 */}
                <Link to="/number-baseball">숫자야구</Link>
                &npsp;
                <Link to="/rock-scissors-paper">가위바위보</Link>
                &npsp;
                <Link to="/lotto-game">로또생성기</Link>
            </>
            <>
                <Route path="/number-baseball" component={NumberBaseball} />
                <Route path="/rock-scissors-paper" component={RSP} />
                <Route path="/lotto-game" component={Lotto} />
            </>
        </BrowserRouter>
    )
};

export default Games;