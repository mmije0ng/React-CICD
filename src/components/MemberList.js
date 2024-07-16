import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../constants/api'; // 상대 경로에 따라 수정

const MemberList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await axios.get(API_ENDPOINTS.MEMBER + '/all'); // API_ENDPOINTS.MEMBER를 사용하여 URL을 생성
            setMembers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Member List</h1>
            <ul>
                {members.map(member => (
                    <li key={member.id}>
                        <strong>UserName:</strong> {member.userName}<br />
                        <strong>NickName:</strong> {member.nickName}<br />
                        <strong>profileImage:</strong> {member.profileImage}<br />
                        <strong>UpdatedAt:</strong> {member.updatedAt}<br />
                        <strong>CreatedAt:</strong> {member.createdAt}<br />
                        <strong>UpdatedAt:</strong> {member.updatedAt}<br />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MemberList;
