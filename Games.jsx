import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import NumberBaseball from '';
// import RSP from '';
// import Lotto from '';

const Games = () => {
    return (
        <BrowserRouter>
            <>
                <Route path="/number-baseball" component={NumberBaseball} />
                <Route path="/rock-scissors-paper" component={RSP} />
                <Route path="/lotto-game" component={Lotto} />
            </>
        </BrowserRouter>
    )
};

export default Games;