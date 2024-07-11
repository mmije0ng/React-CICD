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
                    <p><strong>Username:</strong> {memberData.user_name}</p>
                    <p><strong>Nickname:</strong> {memberData.nick_name}</p>
                    <p><strong>Age:</strong> {memberData.age}</p>
                    <p><strong>Profile Image:</strong> {memberData.profile_image}</p>
                </div>
            )}
        </div>
    );
};

export default MemberInfo;
