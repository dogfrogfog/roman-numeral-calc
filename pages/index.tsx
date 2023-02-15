import { useState } from 'react'
import Head from 'next/head'

import InputSection from '@/components/InputSection'
import OutputSection from '@/components/OutputSection'
import convertToRoman from '@/utils/convertToRoman'
import styles from '@/styles/HomePage.module.css'

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
