// constants/api.ts

const API_ROOT = 'http://43.203.248.122:8080/'; // 백엔드 배포 주소

export const API_ENDPOINTS = {
    LOGIN: `${API_ROOT}/login`,
    USERS: `${API_ROOT}/users`,
    POSTS: `${API_ROOT}/posts`,
    COMMENTS: `${API_ROOT}/comments`,
    MEMBER: `${API_ROOT}/member`, // 추가됨
};
