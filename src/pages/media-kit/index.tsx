import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import ColorPalette from './components/ColorPalette';
import FontDisplay from './components/FontDisplay';
import MediaAssets from './components/MediaAssets';

export default function MediaKit(): JSX.Element {
    return (
        <Layout
            title="Media Kit"
            description="RANDAO brand assets, color palette, typography, and media resources">
            <main className={styles.container}>
                <aside className={styles.legend}>
                    <div className={styles.legendTitle}>Contents</div>
                    <ul className={styles.legendList}>
                        <li className={styles.legendItem}>
                            <a href="#media-assets">Logos & Media Assets</a>
                        </li>
                        <li className={styles.legendItem}>
                            <a href="#color-palette">Color Palette</a>
                        </li>
                        <li className={styles.legendItem}>
                            <a href="#typography">Typography</a>
                        </li>
                    </ul>
                    <div className={styles.downloadSection}>
                        <a href="/media-kit/randao-media-kit.zip" className={styles.downloadButton}>
                            Download Complete Kit
                        </a>
                    </div>
                </aside>

                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.headerTop}>
                            <div className={styles.headerContent}>
                                <h1>Media Kit</h1>
                                <p>Official brand assets and guidelines for RANDAO</p>
                            </div>
                            <div className={styles.downloadSection}>
                                <a href="/media-kit/randao-media-kit.zip" className={styles.downloadButton}>
                                    Download Complete Kit
                                </a>
                            </div>
                        </div>
                    </div>

                    <section id="media-assets" className={styles.section}>
                        <h2>Logos & Media Assets</h2>
                        <MediaAssets />
                    </section>

                    <section id="color-palette" className={styles.section}>
                        <h2>Color Palette</h2>
                        <ColorPalette />
                    </section>

                    <section id="typography" className={styles.section}>
                        <h2>Typography</h2>
                        <FontDisplay />
                    </section>
                </div>
            </main>
        </Layout>
    );
}
