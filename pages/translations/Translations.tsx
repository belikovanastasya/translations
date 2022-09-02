import React, { memo } from 'react';
import { NextPageWithLayout } from '../_app';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout/Layout';

const Translations: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <h1>Translations</h1>
    </div>
  );
};

Translations.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default memo(Translations);
