import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Drawer } from 'antd';
import { UserOutlined, LogoutOutlined, SettingOutlined, MenuOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import spluxyLogo from '../../assets/second-spluxy-logo.png';
import SpluxyButton from '../Button/SpluxyButton';

const { Header, Content, Footer } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logout clicked');
  };

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  const menuItems = [
    {
      key: '/',
      label: 'Home',
    },
    {
      key: '/book',
      label: 'Book Service',
    },
    {
      key: '/orders',
      label: 'My Orders',
    },
    {
      key: '/providers',
      label: 'Providers',
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Header className="bg-white shadow-sm border-b border-gray-200 px-4 md:px-6 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer flex-shrink-0"
          onClick={() => navigate('/')}
        >
          <img 
            src={spluxyLogo} 
            alt="Spluxy Logo" 
            className="w-[110px] h-[110px] md:w-[120px] md:h-[120px] object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center flex-1 justify-center mx-8">
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            className="border-none bg-transparent flex-1 justify-center"
            onClick={({ key }) => navigate(key)}
            overflowedIndicator={null}
          />
        </div>

        {/* Desktop User Menu */}
        <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
          <SpluxyButton variant="filled" size="large">
            Get Started
          </SpluxyButton>
          <Dropdown
            menu={{ items: userMenuItems }}
            placement="bottomRight"
            arrow
          >
            <Avatar 
              icon={<UserOutlined />} 
              className="cursor-pointer hover:opacity-80"
            />
          </Dropdown>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <SpluxyButton
            variant="outlined"
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuOpen(true)}
            className="text-spluxy-primary"
          >
            {null}
          </SpluxyButton>
        </div>
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center">
            <img 
              src={spluxyLogo} 
              alt="Spluxy Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
        className="mobile-drawer"
      >
        <div className="space-y-6">
          {/* Mobile Navigation */}
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            items={menuItems}
            className="border-none bg-transparent"
            onClick={({ key }) => {
              navigate(key);
              setMobileMenuOpen(false);
            }}
          />
          
          {/* Mobile User Actions */}
          <div className="space-y-4 pt-6 border-t">
            <SpluxyButton 
              variant="filled"
              block 
              size="large"
            >
              Get Started
            </SpluxyButton>
            <div className="space-y-2">
              {userMenuItems.map((item) => (
                <SpluxyButton
                  key={item.key}
                  variant="outlined"
                  block
                  icon={item.icon}
                  onClick={() => {
                    if (item.onClick) item.onClick();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left justify-start"
                >
                  {item.label}
                </SpluxyButton>
              ))}
            </div>
          </div>
        </div>
      </Drawer>

      <Content className="bg-gray-50">
        {children}
      </Content>

      <Footer className="text-center bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={spluxyLogo} 
              alt="Spluxy Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <p className="text-gray-600">
            © 2024 Spluxy Laundry Universe. All rights reserved.
          </p>
        </div>
      </Footer>
    </Layout>
  );
};

export default AppLayout;
