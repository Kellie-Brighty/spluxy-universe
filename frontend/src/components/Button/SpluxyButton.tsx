import React from 'react';
import { Button as AntButton } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import type { ButtonProps as AntButtonProps } from 'antd/es/button';

export interface SpluxyButtonProps extends Omit<AntButtonProps, 'type' | 'variant' | 'size'> {
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  children?: React.ReactNode;
}

const SpluxyButton: React.FC<SpluxyButtonProps> = ({
  variant = 'filled',
  size = 'medium',
  loading = false,
  children,
  className = '',
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'filled':
        return 'spluxy-btn-filled';
      case 'outlined':
        return 'spluxy-btn-outlined';
      default:
        return 'spluxy-btn-filled';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-6 py-3 text-sm';
      case 'medium':
        return 'px-8 py-4 text-base';
      case 'large':
        return 'px-12 py-6 text-lg';
      default:
        return 'px-8 py-4 text-base';
    }
  };

  const buttonClasses = `
    ${getVariantClasses()}
    ${getSizeClasses()}
    font-semibold
    rounded-lg
    transition-all
    duration-200
    border-0
    ${className}
  `.trim();

  return (
    <AntButton
      {...props}
      className={buttonClasses}
      loading={loading}
      icon={loading ? <LoadingOutlined /> : props.icon}
    >
      {children}
    </AntButton>
  );
};

export default SpluxyButton;
