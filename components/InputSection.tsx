import type { Dispatch, SetStateAction, ChangeEvent } from 'react'

import styles from '@/styles/InputSection.module.css'

export const MIN_INT_VALUE = 1
export const MAX_INT_VALUE = 1000;

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

export default InputSection
