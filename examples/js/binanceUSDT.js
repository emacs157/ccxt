"use strict";

const ccxt       = require ('../../ccxt.js')
const asciichart = require ('asciichart')
const asTable    = require ('as-table')
const log        = require ('ololog').configure ({ locate: false })

require ('ansicolor').nice

//-----------------------------------------------------------------------------

;(async function main () {
  // const lastPrice = ohlcv[ohlcv.length - 1][index] // closing price
  // const series = ohlcv.slice (-80).map (x => x[index])         // closing price
  // const bitcoinRate = ('₿ = $' + lastPrice).green
  // const chart = asciichart.plot (series, { height: 15, padding: '            ' })
  //log.yellow ("\n" + chart, bitcoinRate, "\n")
    const index = 4 // [ timestamp, open, high, low, close, volume ]

    const binanceAccount =  new ccxt.binance ({
        apiKey: '',
        secret: '',
    })

    const ohlcv = await new ccxt.binance ().fetchOHLCV ('TUSD/USDT', '1d')
    const loadMarkets = await new ccxt.binance ().loadMarkets ('TUSD/USDT', '1d')
    const fetchTicker = await new ccxt.binance ().fetchTicker ('TUSD/USDT')
    const fetchTrades  = await binanceAccount.fetchTrades ('TUSD/USDT')
    const fetchL2OrderBook  = await binanceAccount.fetchL2OrderBook ('TUSD/USDT',50)
    const fetchBalance  = await binanceAccount.fetchBalance ()
    const fetchOpenOrders  = await binanceAccount.fetchOpenOrders ('TUSD/USDT')




     //console.log (binanceAccount.id,    await binanceAccount.fetchOrderBook (binanceAccount.symbols[0]))
     console.log (binanceAccount.id,   fetchL2OrderBook  )

  //  console.log (binanceTrades)

     // console.log ( binanceTrades)
    process.exit ()

}) ()
