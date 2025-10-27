/**
 * UI Components built with Design System
 * 
 * These components use CSS custom properties and design tokens
 * for consistent styling across the application.
 */

import React from 'react';

// Typography Components
export const Typography = {
  H1: ({ children, className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={`${className}`} {...props}>
      {children}
    </h1>
  ),
  
  H2: ({ children, className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={`${className}`} {...props}>
      {children}
    </h2>
  ),
  
  H3: ({ children, className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={`${className}`} {...props}>
      {children}
    </h3>
  ),
  
  P: ({ children, className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`${className}`} {...props}>
      {children}
    </p>
  ),
};

// Button Components
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  className = '',
  children, 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center transition-all duration-200 cursor-pointer border-2';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'bg-transparent border-2 border-primary text-primary hover:brightness-90',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => (
  <div className={`card ${className}`} {...props}>
    {children}
  </div>
);

// Container Component
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  maxWidth = 'lg',
  className = '', 
  ...props 
}) => {
  const maxWidths = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md', 
    lg: 'max-w-container',
    xl: 'max-w-screen-xl',
    full: 'max-w-full',
  };
  
  return (
    <div className={`container ${maxWidths[maxWidth]} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Section Component
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?: 'default' | 'muted' | 'primary' | 'accent';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  background = 'default',
  className = '', 
  ...props 
}) => {
  const backgrounds = {
    default: 'bg-background text-foreground',
    muted: 'bg-muted text-foreground',
    primary: 'bg-primary text-primary-foreground',
    accent: 'bg-accent text-accent-foreground',
  };
  
  return (
    <section className={`section ${backgrounds[background]} ${className}`} {...props}>
      {children}
    </section>
  );
};

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  className = '',
  ...props 
}) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-sm font-medium text-foreground">
        {label}
      </label>
    )}
    <input
      className={`
        w-full px-4 py-3 
        bg-input-background 
        border border-border 
        rounded-[var(--radius)]
        text-foreground
        focus:outline-none 
        focus:ring-2 
        focus:ring-ring 
        focus:border-transparent
        transition-colors
        ${error ? 'border-destructive' : ''}
        ${className}
      `}
      {...props}
    />
    {error && (
      <p className="text-sm text-destructive">{error}</p>
    )}
  </div>
);

// Badge Component
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'accent' | 'destructive';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default',
  children,
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-muted text-muted-foreground',
    primary: 'bg-primary text-primary-foreground',
    accent: 'bg-accent text-accent-foreground',
    destructive: 'bg-destructive text-destructive-foreground',
  };
  
  return (
    <span 
      className={`
        inline-flex items-center px-2.5 py-0.5 
        rounded-full text-xs font-medium
        ${variants[variant]} ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};

// Export all components
export const UI = {
  Typography,
  Button,
  Card,
  Container,
  Section,
  Input,
  Badge,
};