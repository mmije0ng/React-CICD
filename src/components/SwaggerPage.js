// src/components/SwaggerPage.js

import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { API_ENDPOINTS } from '../constants/api';

const SwaggerPage = () => {
    return <SwaggerUI url={API_ENDPOINTS.SWAGGER} />;
};

export default SwaggerPage;