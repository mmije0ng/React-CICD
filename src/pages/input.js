import React, {useState} from 'react';

const Input = () => {
    const [txtValue, setTextValue] = useState("");

    const onChange = (e) => {
        // 이벤트가 일어난 target의 값을 txtValue로 설정
        setTextValue(e.target.value)
    };

    return(
        <div>
            <input type="text" value={txtValue} onChange={onChange}></input>
            <br></br>
            <p>{txtValue}</p>
        </div>
    );
};

export default Input;