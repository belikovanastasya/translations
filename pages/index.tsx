import React from 'react';

import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <div className={styles.container} />;
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
