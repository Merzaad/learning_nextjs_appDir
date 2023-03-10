import styles from '../../styles/cprtyo/page.module.scss'

const getData = async () => {
  try {
    console.log('test')
    const result = await fetch('https://api.blockchair.com/ethereum/stats')
    return result.json()
  } catch (error) {
    // throw new Error('todo')
    return 'todo'
  }
}
export default async function Page() {
  const test = await getData()
  const result = JSON.stringify(test, undefined, 10) || test.message
  return <div className={styles.cprtyo}>{result}</div>
}
