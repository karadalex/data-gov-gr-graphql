import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Data API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        GraphQL API for data.gov.gr
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/api/graphql.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        Powered by
      </footer>
    </div>
  )
}
