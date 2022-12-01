import React from 'react';
import './Wrapper.css';

type WrapperProps = {
    children: React.ReactNode;
};

function Wrapper(props: WrapperProps){
    return (
        <div className="wrapper">
            {props.children}
        </div>
    );
}

export default Wrapper;