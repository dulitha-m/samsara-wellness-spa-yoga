import React from 'react';

const LogoIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size * 0.8} 
    viewBox="0 0 100 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M50 68C50 68 44 65 41 57C38 49 42 42 50 32C58 42 62 49 59 57C56 65 50 68 50 68Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 32C50 32 42 22 50 8C58 22 50 32 50 32Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M41 57C34 52 29 42 24 22C34 27 39 42 41 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M59 57C66 52 71 42 76 22C66 27 61 42 59 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M35 62C22 62 12 59 4 67C12 72 22 75 42 69" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M65 62C78 62 88 59 96 67C88 72 78 75 58 69" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 69C45 73 45 79 50 79C55 79 55 73 50 69Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default LogoIcon;
