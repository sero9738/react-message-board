import React from 'react';
import './ContentBoard.css';

type ContentBoardProps = {
    children: React.ReactNode;
};

function ContentBoard(props: ContentBoardProps){
    return (
        <div className="content-board">
            {props.children}
        </div>
    );
}

export default ContentBoard;