import React, { HTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** ReactNode Children */
  children: ReactNode;

  /** variant look  */
  variant: 'primary' | 'secondary';
}

const buttonStyle: (variant: ButtonProps['variant']) => React.CSSProperties = (
  variant
) => ({
  backgroundColor: `${
    variant === 'primary' ? 'rgba(20, 100, 250, 0.9)' : 'gray'
  }`,
  borderRadius: `30px`,
  padding: `10px`,
  color: 'white',
  border: 'none',
});

/** This is Custom Button */
const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button style={buttonStyle(variant)} {...props}>
      {children}
    </button>
  );
};

export { Button, ButtonProps };
