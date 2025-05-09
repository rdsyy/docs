import React, { JSX, useState } from 'react';
import styles from './ColorPalette.module.css';

interface ColorSwatch {
    name: string;
    hex: string;
    description?: string;
}

const brandColors: ColorSwatch[] = [
    {
        name: 'Black',
        hex: '#000000',
        description: 'Primary color for text and dark elements'
    },
    {
        name: 'White',
        hex: '#FFFFFF',
        description: 'Primary color for backgrounds and light elements'
    },
    {
        name: 'Light Gray',
        hex: '#999999',
        description: 'Used for lightest accents and subtle backgrounds'
    },
    {
        name: 'Medium Gray',
        hex: '#666666',
        description: 'Used for medium emphasis elements'
    },
    {
        name: 'Dark Gray',
        hex: '#333333',
        description: 'Used for high emphasis elements'
    }
];

export default function ColorPalette(): JSX.Element {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const copyToClipboard = (hex: string) => {
        navigator.clipboard.writeText(hex);
        setCopiedColor(hex);
        setTimeout(() => setCopiedColor(null), 2000);
    };

    return (
        <div className={styles.colorGrid}>
            {brandColors.map((color) => (
                <div key={color.hex} className={styles.colorCard}>
                    <div className={styles.colorSwatch}>
                        <div
                            style={{
                                backgroundColor: color.hex,
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </div>
                    <div className={styles.colorInfo}>
                        <h3>{color.name}</h3>
                        <button
                            className={styles.hexButton}
                            onClick={() => copyToClipboard(color.hex)}
                        >
                            {color.hex}
                            <span className={styles.copyIndicator}>
                                {copiedColor === color.hex ? 'Copied!' : 'Click to copy'}
                            </span>
                        </button>
                        {color.description && (
                            <p className={styles.description}>{color.description}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
