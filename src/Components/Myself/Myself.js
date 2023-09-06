import React from 'react';
import Special from '../Special/Special';

const Myself = ({house, ornament}) => {
    return (
        <div>
            <h5>me</h5>
            <p>House:{house}</p>
            <Special ornament ={ornament}></Special>
        </div>
    );
};

export default Myself;