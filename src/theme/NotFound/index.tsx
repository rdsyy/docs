import React, {type ReactNode, useState, useEffect} from 'react';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';

export default function Index(): ReactNode {
  const [isLoading, setIsLoading] = useState(true);
  
  const title = translate({
    id: 'theme.NotFound.title',
    message: 'Page Not Found',
  });

  useEffect(() => {
    // Show loading spinner for max 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Define the loading spinner styles
  const spinnerStyle = {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    border: '3px solid rgba(0, 0, 0, 0.3)',
    borderRadius: '50%',
    borderTopColor: 'var(--ifm-color-primary)',
    animation: 'spin 1s ease-in-out infinite',
    margin: '0 auto',
  };

  // Add the keyframes animation to the document
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement('style');
    // Add the keyframes animation
    styleEl.innerHTML = `
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
      
      [data-theme='dark'] .spinner-dark {
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-top-color: var(--ifm-color-primary);
      }
    `;
    // Append the style element to the head
    document.head.appendChild(styleEl);

    // Clean up
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <>
      <PageMetadata title={title} />
      <Layout>
        {isLoading ? (
          <div className="container margin-vert--xl text--center">
            <div 
              className="spinner-dark"
              style={spinnerStyle} 
            />
          </div>
        ) : (
          <NotFoundContent />
        )}
      </Layout>
    </>
  );
}
