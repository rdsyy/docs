import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'For Developers',
    emoji: '👨‍💻',
    description: (
      <>
        Build with RANDAO using our developer tools and libraries.
      </>
    ),
    link: '/docs/developers/start-here',
  },
  {
    title: 'For Miners',
    emoji: '⛏️',
    description: (
      <>
        Learn how to set up and operate a RANDAO provider node.
      </>
    ),
    link: '/docs/miners/start-here',
  },
  {
    title: 'For Investors',
    emoji: '💎',
    description: (
      <>
        Learn about RANDAO tokenomics and investment opportunities.
      </>
    ),
    link: '/docs/investors/start-here',
  },
];

function Feature({ title, emoji, description, link }: FeatureItem) {
  return (
    <a href={link} className={clsx('col col--4')} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="text--center">
        <div className={styles.featureEmoji} role="img" aria-label={title}>
          {emoji}
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
