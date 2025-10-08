import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import AppLayout from './components/Layout/AppLayout';
import Home from './pages/Home';
import './index.css';

// Ant Design theme configuration
const theme = {
  token: {
    colorPrimary: '#FF9900',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    borderRadius: 8,
    fontFamily: 'Poppins, system-ui, sans-serif',
    fontFamilyCode: 'Poppins, system-ui, sans-serif',
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as we build them */}
          </Routes>
        </AppLayout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
