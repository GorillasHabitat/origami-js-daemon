/**
 * This is an example of the most barebones implementation of a Curator
 **/

import { Curator } from '@open-oracle-origami/origami-js-sdk'
import { CoinbaseMill } from '@open-oracle-origami/origami-js-mill-coinbase'
import { CoinMarketCapMill } from '@open-oracle-origami/origami-js-mill-coinmarketcap'
import { CoinGeckoMill } from '@open-oracle-origami/origami-js-mill-coingecko'
import { ConsoleMuseum } from '@open-oracle-origami/origami-js-museum-console'

const curator = new Curator()
curator.addMill(CoinbaseMill, { pairs: ['BTC-USDT'] })
curator.addMill(CoinMarketCapMill, {
  apiKey: process.env.COINMARKETCAP_API_KEY,
  getQuotesParams: { symbol: 'BTC' },
  pollIntervalMs: 5000,
})
curator.addMill(CoinGeckoMill, {
  simplePriceParams: { ids: '1inch', vs_currencies: 'usd' },
  pollIntervalMs: 5000,
})
curator.addMuseum(ConsoleMuseum, {
  id: 'console',
  sources: ['mill.coingecko', 'mill.coinmarketcap'],
})

curator.start()
