import React, {useState} from 'react';

const Counter = () => {
    // num: 0이라는 값을 갖는 변수
    // setNumber: num에 대한 setter
    // useState: 상태 관리 react 함수, 반드시 setter를 통해 관리
    const [num, setNumber] = useState(0);

    const increase = () => {
        setNumber(num+1) // num+=1
    };

    const decrease = () => {
        setNumber(num-1) // num-=1
    };

    return(
        <div>
            <button onClick={increase}>+1</button> <br></br>
            <button onClick={decrease}>-1</button> <br></br>
            <p>{num}</p>
        </div>
    );
};

export default Counter;