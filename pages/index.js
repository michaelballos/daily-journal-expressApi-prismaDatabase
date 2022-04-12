import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Shell from '../components/Shell'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Productivity Journal</title>
        <meta name='description' content='A Personal Productivity Journal' />
      </Head>
      <main>
        <Shell />
      </main>
    </div>
  )
}

export default Home
