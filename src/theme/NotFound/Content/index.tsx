import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {useColorMode} from '@docusaurus/theme-common';

export default function NotFoundContent({className}: Props): ReactNode {
  const {colorMode} = useColorMode();
  
  // Function to trigger the search overlay
  const openSearchModal = () => {
    // This will open the search overlay
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      ctrlKey: true,
    });
    document.dispatchEvent(event);
  };
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--6 col--offset-3 text--center">
          <Heading 
            as="h1" 
            className="hero__title"
            style={{
              color: 'var(--ifm-font-color-base)', // Use theme color variable
            }}
          >
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              We could not find what you were looking for.
            </Translate>
          </p>
          
          <div className="margin-top--lg">
            <Heading as="h2" className="margin-bottom--sm">
              <Translate
                id="theme.NotFound.trySearching"
                description="The heading for the search suggestion on the 404 page">
                Try searching for it
              </Translate>
            </Heading>
            
            <button
              onClick={openSearchModal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                backgroundColor: 'var(--ifm-color-primary)',
                color: colorMode === 'dark' ? '#000000' : '#ffffff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                margin: '1rem 0',
              }}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20"
                style={{ marginRight: '0.5rem' }}
              >
                <path
                  d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                ></path>
              </svg>
              Search
            </button>
            
            <p className="margin-top--md">
              <Link to="/">
                <Translate
                  id="theme.NotFound.goHome"
                  description="The link to the homepage on the 404 page">
                  Go to Homepage
                </Translate>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
