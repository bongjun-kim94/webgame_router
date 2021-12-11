import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Games = () => {
    return (
        <BrowserRouter>
            <>
                <Route path="/number-baseball" />
                <Route path="/rock-scissors-paper" />
                <Route path="/lotto-game" />
            </>
        </BrowserRouter>
    )
};

export default MineSearch;