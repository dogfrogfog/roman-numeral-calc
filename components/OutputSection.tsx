import styles from '@/styles/OutputSection.module.css'

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

export default OutputSection
