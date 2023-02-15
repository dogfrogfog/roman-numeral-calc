import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import Head from 'next/head'

import convertToRoman from '@/utils/convertToRoman'
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
        <OutputSection romanNumber={inputValue ? convertToRoman(inputValue) : ''} />
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
    if (e.target.value === '') {
      setInputValue(undefined)
    }

    const integerInputValue = parseInt(e.target.value, 10)

    if (integerInputValue <= MAX_INT_VALUE && integerInputValue >= MIN_INT_VALUE) {
      setInputValue(integerInputValue)
    }
  }

  return (
    <div className={styles.section}>
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

type OutputSectionType = {
  romanNumber: string;
}

const OutputSection = ({ romanNumber }: OutputSectionType) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.title}>Roman output</h3>
      <p className={styles.outputValue}>{romanNumber}</p>
    </div>
  )
}
