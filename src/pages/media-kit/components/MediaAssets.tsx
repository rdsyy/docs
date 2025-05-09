import React, { JSX } from 'react';
import styles from './MediaAssets.module.css';

interface MediaAsset {
    name: string;
    preview: string;
    formats: {
        type: string;
        url: string;
    }[];
    dimensions?: string;
    background?: 'light' | 'dark';
}

const mediaAssets: MediaAsset[] = [
    {
        name: 'RANDAO Logo',
        preview: '/media-kit/assets/randao-logo.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/randao-logo.png' }
        ],
        dimensions: '500x500px'
    },
    {
        name: 'RANDAO Text Logo',
        preview: '/media-kit/assets/RandAO Text LOGO.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/RandAO-Text-LOGO.png' }
        ],
        dimensions: '1000x200px'
    },
    {
        name: 'RANDAO Youtube Header',
        preview: '/media-kit/assets/RANDAO Youtube Header.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/RANDAO-Header.png' }
        ],
        dimensions: '2560x1440px'
    }
];

export default function MediaAssets(): JSX.Element {
    return (
        <div className={styles.mediaGrid}>
            {mediaAssets.map((asset) => (
                <a
                    key={asset.name}
                    href={asset.formats[0].url}
                    download
                    className={styles.mediaCard}
                    title={`Download ${asset.name}`}
                >
                    <div
                        className={`${styles.previewContainer} ${asset.background === 'dark' ? styles.darkBg : ''}`}
                    >
                        <img
                            src={asset.preview}
                            alt={`${asset.name} preview`}
                            className={styles.previewImage}
                        />
                    </div>
                    <div className={styles.mediaInfo}>
                        <h3>{asset.name}</h3>
                        {asset.dimensions && (
                            <span className={styles.dimensions}>{asset.dimensions}</span>
                        )}
                    </div>
                </a>
            ))}
        </div>
    );
}
