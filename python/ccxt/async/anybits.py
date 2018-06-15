# -*- coding: utf-8 -*-

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

from ccxt.async.bitsane import bitsane


class anybits (bitsane):

    def describe(self):
        return self.deep_extend(super(anybits, self).describe(), {
            'id': 'anybits',
            'name': 'Anybits',
            'countries': 'IE',  # Ireland
            'has': {
                'fetchCurrencies': True,
                'fetchTickers': True,
                'fetchOpenOrders': True,
                'fetchDepositAddress': True,
                'withdraw': True,
            },
            'urls': {
                'logo': 'https://user-images.githubusercontent.com/1294454/41388454-ae227544-6f94-11e8-82a4-127d51d34903.jpg',
                'api': 'https://anybits.com/api',
                'www': 'https://anybits.com',
                'doc': 'https://anybits.com/help/api',
                'fees': 'https://anybits.com/help/fees',
            },
            'api': {
                'public': {
                    'get': [
                        'assets/currencies',
                        'assets/pairs',
                        'ticker',
                        'orderbook',
                        'trades',
                    ],
                },
                'private': {
                    'post': [
                        'balances',
                        'order/cancel',
                        'order/new',
                        'order/status',
                        'orders',
                        'orders/history',
                        'deposit/address',
                        'withdraw',
                        'withdrawal/status',
                        'transactions/history',
                        'vouchers',
                        'vouchers/create',
                        'vouchers/redeem',
                    ],
                },
            },
            'fees': {
                'trading': {
                    'maker': 0.15 / 100,
                    'taker': 0.25 / 100,
                },
            },
        })
