import React, {useState} from 'react';

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });

    // inputs 객체에 있는 변수들을 가져옴
    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value
        const id = e.target.id;

        // inputs[id] = value 리액트에서 상태관리 안 됨
        
        // 깊은 복사, 새로운 객체 생성
        // 현재 변경이 일어나는 html의 id값을 가져오고 id에 해당하는 값을 변경
        setInputs(
            {
                ...inputs,
                [id]: value
            }
        )
    };

    return(
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}></input>
            </div>

            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}></input>
            </div>

            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange}></input>
            </div>

            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>
    );
};

export default Input2;