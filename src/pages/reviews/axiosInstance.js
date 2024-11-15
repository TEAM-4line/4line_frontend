import axios from 'axios';

// API 인스턴스 생성
const api = axios.create({
  baseURL: 'https://github.com/TEAM-4line/4line_backend/tree/main/community', // 백엔드 서버 URL
});

export default api;
