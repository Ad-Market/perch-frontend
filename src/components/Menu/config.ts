import { MenuEntry } from '@pancakeswap-libs/uikit'
import { getCakeAddress } from '../../utils/addressHelpers'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/craters',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap'
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool'
      }
    ]
  },
  {
    label: 'Listing',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://cchain.explorer.avax.network/address/'.concat(getCakeAddress()),
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
/*      {
        label: 'Github',
        href: 'https://github.com/mumuswap/',
      }, */
      {
        label: 'Docs',
        href: 'https://mumuswapfinance.gitbook.io/mumuswap/',
      },
/*      {
        label: 'Roadmap',
        href: 'https://mumuswapfinance.gitbook.io/roadmap/',
      },
      {
        label: 'Blog',
        href: 'https://mumuswap.medium.com',
      }, */
    ],
  },
]

export default config
