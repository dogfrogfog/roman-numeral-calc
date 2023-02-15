import Head from 'next/head'

import styles from '@/pages/index.module.css'

const MIN_INT_VALUE = 1
const MAX_INT_VALUE = 1000;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>roman-numeral-calc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainSection}>
        <InputSection />
        <OutputSection />
      </main>
    </div>
  )
}

const InputSection = () => {
  return (
    <div className={styles.inputSection}>
      <h3 className={styles.title}>Numeric input</h3>
      <input
        type="number"
        min={MIN_INT_VALUE}
        max={MAX_INT_VALUE}
        className={styles.input}
      />
    </div>
  )
}

const OutputSection = () => {
  return (
    <div className={styles.outputSection}>
      <h3 className={styles.title}>Roman output</h3>
      <p className={styles.outputValue}>XXXX||||</p>
    </div>
  )
}
