// Create a global.d.ts file in your project (if not already present)
// Add the following declarations to it:

/// <reference types="next" />
/// <reference types="next/types/global" />

import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Add types for HTML elements used in your components
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
      button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
      // Add more elements as needed
    }
  }
}
