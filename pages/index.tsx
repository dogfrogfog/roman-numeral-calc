import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import Head from 'next/head'

import styles from '@/pages/index.module.css'

const MIN_INT_VALUE = 1
const MAX_INT_VALUE = 1000;

export default function Home() {
  const [inputValue, setInputValue] = useState<number | undefined>()

  return (
    <div className={styles.container}>
      <Head>
        <title>roman-numeral-calc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainSection}>
        <InputSection inputValue={inputValue} setInputValue={setInputValue} />
        <OutputSection />
      </main>
    </div>
  )
}

type InputSectionProps = {
  inputValue?: number;
  setInputValue: Dispatch<SetStateAction<number | undefined>>;
}

const InputSection = ({ inputValue, setInputValue }: InputSectionProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const integerInputValue = parseInt(e.target.value, 10)

    setInputValue(integerInputValue)
  }

  return (
    <div className={styles.inputSection}>
      <h3 className={styles.title}>Numeric input</h3>
      <input
        type="number"
        value={inputValue || ''}
        onChange={handleInputChange}
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
