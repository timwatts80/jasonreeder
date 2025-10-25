/**
 * Design System Tokens
 * 
 * This file provides TypeScript types and utilities for the design system.
 * All values are synchronized with CSS custom properties in globals.css
 */

// Core Design Tokens
export const designTokens = {
  colors: {
    primary: '#0b2239',
    accent: '#c8a96a',
    bg: '#f9f9f8',
    text: '#1a1a1a',
    
    // Semantic colors
    background: '#f9f9f8',
    foreground: '#1a1a1a',
    card: '#fff',
    cardForeground: '#1a1a1a',
    popover: '#fff',
    popoverForeground: '#1a1a1a',
    primaryForeground: '#fff',
    secondary: '#c8a96a',
    secondaryForeground: '#0b2239',
    muted: '#ececf0',
    mutedForeground: '#717182',
    accentForeground: '#0b2239',
    destructive: '#d4183d',
    destructiveForeground: '#fff',
    border: '#0000001a',
    input: 'transparent',
    inputBackground: '#f3f3f5',
    switchBackground: '#cbced4',
    ring: '#0b2239',
  },
  
  typography: {
    fontFamily: {
      heading: '"Poppins", sans-serif',
      body: '"Inter", sans-serif',
    },
    fontSize: {
      h1: '48px',
      h2: '24px',
      h3: '16px',
      body: '18px',
      base: '16px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
    },
    lineHeight: {
      h1: 1.2,
      h2: 1.3,
      h3: 1.4,
      body: 1.6,
    },
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
    '2xl': '80px',
  },
  
  layout: {
    maxWidth: '1200px',
    sectionPadding: '80px',
    radius: '.625rem',
  },
  
  charts: {
    chart1: 'oklch(.646 .222 41.116)',
    chart2: 'oklch(.6 .118 184.704)',
    chart3: 'oklch(.398 .07 227.392)',
    chart4: 'oklch(.828 .189 84.429)',
    chart5: 'oklch(.769 .188 70.08)',
  },
} as const;

// TypeScript types for design tokens
export type ColorToken = keyof typeof designTokens.colors;
export type TypographyToken = keyof typeof designTokens.typography;
export type SpacingToken = keyof typeof designTokens.spacing;
export type LayoutToken = keyof typeof designTokens.layout;

// Utility functions for accessing design tokens
export const getColor = (token: ColorToken): string => {
  return `var(--${token.replace(/([A-Z])/g, '-$1').toLowerCase()})`;
};

export const getSpacing = (token: SpacingToken): string => {
  return `var(--spacing-${token})`;
};

export const getFontSize = (element: 'h1' | 'h2' | 'h3' | 'body' | 'base'): string => {
  return `var(--font-size-${element})`;
};

// CSS-in-JS style objects
export const styles = {
  typography: {
    h1: {
      fontSize: 'var(--font-size-h1)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: '1.2',
    },
    h2: {
      fontSize: 'var(--font-size-h2)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--font-weight-normal)', 
      lineHeight: '1.3',
    },
    h3: {
      fontSize: 'var(--font-size-h3)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: '1.4',
    },
    body: {
      fontSize: 'var(--font-size)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--font-weight-normal)',
      lineHeight: '1.6',
    },
  },
  
  buttons: {
    primary: {
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: '2px solid var(--primary)',
      padding: '12px 24px',
      borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--font-weight-medium)',
    },
    secondary: {
      backgroundColor: 'var(--accent)',
      color: 'var(--accent-foreground)',
      border: '2px solid var(--accent)',
      padding: '12px 24px',
      borderRadius: 'var(--radius)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--font-weight-medium)',
    },
  },
  
  layouts: {
    container: {
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      padding: '0 var(--spacing-md)',
    },
    section: {
      padding: 'var(--section-padding) 0',
    },
    card: {
      background: 'var(--card)',
      color: 'var(--card-foreground)',
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      padding: 'var(--spacing-lg)',
    },
  },
} as const;

export default designTokens;