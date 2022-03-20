import React from 'react';

const LoadingSkeleton = ({number, style}) => {
    return (
        <div className={style.outerDiv}>
            {[...Array(number).keys()].map(num => (
                <div key={num} className={style.innerDiv}></div>
            ))}
        </div>
    );
};

export default LoadingSkeleton;