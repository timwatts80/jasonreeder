/**
 * Example usage of the Design System
 * 
 * This file demonstrates how to use the design tokens and components
 * in a real application.
 */

import { UI } from '@/components/ui';
import { designTokens } from '@/lib/design-tokens';

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Design System Components */}
      <UI.Section background="primary" className="pt-8">
        <UI.Container>
          <div className="text-center py-20">
            <UI.Typography.H1 className="mb-6">
              Welcome to Our Design System
            </UI.Typography.H1>
            <UI.Typography.P className="text-primary-200 mb-8 max-w-2xl mx-auto">
              Built with CSS custom properties, TypeScript, and Tailwind CSS for maximum flexibility and consistency.
            </UI.Typography.P>
            <div className="flex gap-4 justify-center">
              <UI.Button variant="secondary">Get Started</UI.Button>
              <UI.Button variant="outline" className="border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-primary">
                Learn More
              </UI.Button>
            </div>
          </div>
        </UI.Container>
      </UI.Section>

      {/* Content Section */}
      <UI.Section>
        <UI.Container>
          <div className="py-16">
            <UI.Typography.H2 className="text-center mb-12">
              Design System Features
            </UI.Typography.H2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <UI.Card>
                <div className="p-6">
                  <UI.Badge variant="primary" className="mb-4">CSS Variables</UI.Badge>
                  <UI.Typography.H3 className="mb-4">
                    Dynamic Theming
                  </UI.Typography.H3>
                  <UI.Typography.P>
                    Built with CSS custom properties for runtime theme switching and maximum flexibility.
                  </UI.Typography.P>
                </div>
              </UI.Card>

              <UI.Card>
                <div className="p-6">
                  <UI.Badge variant="accent" className="mb-4">TypeScript</UI.Badge>
                  <UI.Typography.H3 className="mb-4">
                    Type Safety
                  </UI.Typography.H3>
                  <UI.Typography.P>
                    Full TypeScript support with type-safe design tokens and component props.
                  </UI.Typography.P>
                </div>
              </UI.Card>

              <UI.Card>
                <div className="p-6">
                  <UI.Badge variant="default" className="mb-4">Tailwind CSS</UI.Badge>
                  <UI.Typography.H3 className="mb-4">
                    Utility First
                  </UI.Typography.H3>
                  <UI.Typography.P>
                    Seamlessly integrated with Tailwind CSS for rapid prototyping and development.
                  </UI.Typography.P>
                </div>
              </UI.Card>
            </div>
          </div>
        </UI.Container>
      </UI.Section>

      {/* Form Example */}
      <UI.Section background="muted">
        <UI.Container>
          <div className="py-16 max-w-md mx-auto">
            <UI.Typography.H2 className="text-center mb-8">
              Contact Form Example
            </UI.Typography.H2>
            
            <form className="space-y-6">
              <UI.Input 
                label="Full Name" 
                placeholder="Enter your full name"
                required
              />
              <UI.Input 
                label="Email Address" 
                type="email"
                placeholder="Enter your email"
                required
              />
              <UI.Input 
                label="Message" 
                placeholder="Your message here..."
                required
              />
              <UI.Button variant="primary" className="w-full">
                Send Message
              </UI.Button>
            </form>
          </div>
        </UI.Container>
      </UI.Section>

      {/* Typography Showcase */}
      <UI.Section>
        <UI.Container>
          <div className="py-16">
            <UI.Typography.H2 className="text-center mb-12">
              Typography Hierarchy
            </UI.Typography.H2>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <UI.Typography.H1>
                  This is a Heading 1
                </UI.Typography.H1>
                <p className="text-sm text-muted-foreground mt-2">
                  48px • Poppins • Semibold (600) • Line height: 1.2
                </p>
              </div>
              
              <div>
                <UI.Typography.H2>
                  This is a Heading 2
                </UI.Typography.H2>
                <p className="text-sm text-muted-foreground mt-2">
                  24px • Inter • Regular (400) • Line height: 1.3
                </p>
              </div>
              
              <div>
                <UI.Typography.H3>
                  This is a Heading 3
                </UI.Typography.H3>
                <p className="text-sm text-muted-foreground mt-2">
                  16px • Poppins • Semibold (600) • Line height: 1.4
                </p>
              </div>
              
              <div>
                <UI.Typography.P>
                  This is regular paragraph text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </UI.Typography.P>
                <p className="text-sm text-muted-foreground mt-2">
                  16px • Inter • Regular (400) • Line height: 1.6
                </p>
              </div>
            </div>
          </div>
        </UI.Container>
      </UI.Section>
    </div>
  );
}