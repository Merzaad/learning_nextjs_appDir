import styles from '../../styles/noCache/page.module.scss'

const getData = async (coin: string) => {
  try {
    const result = await fetch(`https://api.blockchair.com/${coin}/stats`, {
      cache: 'no-store',
    })

    return result.json()
  } catch (error) {
    return error
  }
}
export default async function Page() {
  const [ethData, btcData] = await Promise.all([getData('etherium'), getData('bitcoin')])

  return (
    <div className={styles.noCache}>
      <div className='card'>{ethData.data?.market_price_usd || 'error todo'}</div>
      <div className='card'>{btcData.data?.market_price_usd || 'error todo'}</div>
    </div>
  )
}
