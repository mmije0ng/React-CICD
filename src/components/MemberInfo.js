import React, { useState } from 'react';
import axios from 'axios';

const MemberInfo = () => {
    const [userName, setUserName] = useState('');
    const [memberData, setMemberData] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    };

    const fetchMemberData = async () => {
        try {
            const response = await axios.get('/api/member', {
                params: { userName: userName }
            });
            setMemberData(response.data);
            setError(null);
        } catch (err) {
            setError(err.response ? err.response.data : 'Error fetching data');
            setMemberData(null);
        }
    };

    return (
        <div>
            <h1>Find Member</h1>
            <input
                type="text"
                value={userName}
                onChange={handleInputChange}
                placeholder="Enter username"
            />
            <button onClick={fetchMemberData}>Fetch Member Info</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {memberData && (
                <div>
                    <h2>Member Information</h2>
                    <p><strong>userName:</strong> {memberData.userName}</p>
                    <p><strong>nickName:</strong> {memberData.nickName}</p>
                    <p><strong>age:</strong> {memberData.age}</p>
                    <p><strong>profileImage:</strong> {memberData.profileImage}</p>
                    <strong>isMember:</strong> {memberData.isMember ? 'true' : 'false'}
                </div>
            )}
        </div>
    );
};

export default MemberInfo;
