import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PERCH-BUSD LP',
    lpAddresses: {
      97: '0x383489bD934B077Ac0b3A9325E73BF72D9835AdA',
      56: '0xA0B0923621b5CFa654145604E286CA813C3C661B',
      137: '0x72B54aa780D88684A24F53C09D6f85645780fa31',
      43114: '0x01868fd015Ee65f961696d56245F71f00EFadf2d',
    },
    tokenSymbol: 'PERCH',
    tokenAddresses: {
      97: '0x47572493C7DD70653940Dff6444897712a007EDC',
      56: '0x3bdbbf63fbed8550dd630f67fc5e4c2ac4ddc42b',
      137: '0xdBF2d59f590eD72e647d1ea1E99417995B9C9368',
      43114: '0x12e7fdd36b935934d8D38519E5acdD3D85506568',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'PERCH-AVAX LP',
    lpAddresses: {
      97: '0xa40f90E8e60928eB56FEa610D0591D776ab54CC6',
      56: '0xD99Caa5110Bf465B05cdef0690Db0771732d937F',
      137: '0xcD67C60265f8EcC27fbc68595C26565F4FF41f4c',
      43114: '0x7429c868197A25DCf54f52e5b9d130eE966Db936',
    },
    tokenSymbol: 'PERCH',
    tokenAddresses: {
      97: '0x47572493C7DD70653940Dff6444897712a007EDC',
      56: '0x3bdbbf63fbed8550dd630f67fc5e4c2ac4ddc42b',
      137: '0xdBF2d59f590eD72e647d1ea1E99417995B9C9368',
      43114: '0x12e7fdd36b935934d8D38519E5acdD3D85506568',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'PERCH-WETH LP',
    lpAddresses: {
      97: '0xa40f90E8e60928eB56FEa610D0591D776ab54CC6',
      56: '0xD99Caa5110Bf465B05cdef0690Db0771732d937F',
      137: '0xcD67C60265f8EcC27fbc68595C26565F4FF41f4c',
      43114: '0xD2958889C0C6D41C8bDd8b80aF7efbbF995E7eEb',
    },
    tokenSymbol: 'PERCH',
    tokenAddresses: {
      97: '0x47572493C7DD70653940Dff6444897712a007EDC',
      56: '0x3bdbbf63fbed8550dd630f67fc5e4c2ac4ddc42b',
      137: '0xdBF2d59f590eD72e647d1ea1E99417995B9C9368',
      43114: '0x12e7fdd36b935934d8D38519E5acdD3D85506568',
    },
    quoteTokenSymbol: QuoteToken.WETH,
    quoteTokenAddresses: contracts.weth,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'PERCH-WBTC LP',
    lpAddresses: {
      97: '0xa40f90E8e60928eB56FEa610D0591D776ab54CC6',
      56: '0xD99Caa5110Bf465B05cdef0690Db0771732d937F',
      137: '0xcD67C60265f8EcC27fbc68595C26565F4FF41f4c',
      43114: '0x180314AdA53D00DE0CD347e53B4b4Cca59238856',
    },
    tokenSymbol: 'PERCH',
    tokenAddresses: {
      97: '0x47572493C7DD70653940Dff6444897712a007EDC',
      56: '0x3bdbbf63fbed8550dd630f67fc5e4c2ac4ddc42b',
      137: '0xdBF2d59f590eD72e647d1ea1E99417995B9C9368',
      43114: '0x12e7fdd36b935934d8D38519E5acdD3D85506568',
    },
    quoteTokenSymbol: QuoteToken.WBTC,
    quoteTokenAddresses: contracts.wbtc,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'AVAX-BUSD LP',
    lpAddresses: {
      97: '0xa79fe8865fb3c3c053ee63ba8b7f90dda5c3f334',
      56: '0x83166DaF1a93F7C8B31c4e09Cc85316a37dC2451',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
      43114: '0xAa5928EcfEbc0bf9AF6993D6A84aeeE27364597c',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      43114: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PERCH',
    lpAddresses: {
      97: '0x383489bD934B077Ac0b3A9325E73BF72D9835AdA',
      56: '0xA0B0923621b5CFa654145604E286CA813C3C661B', // EGG-BUSD LP
      137: '0x72B54aa780D88684A24F53C09D6f85645780fa31',
      43114: '0x01868fd015Ee65f961696d56245F71f00EFadf2d'
    },
    tokenSymbol: 'PERCH',
    tokenAddresses: {
      97: '0x47572493C7DD70653940Dff6444897712a007EDC',
      56: '0x3bdbbf63fbed8550dd630f67fc5e4c2ac4ddc42b',
      137: '0xdBF2d59f590eD72e647d1ea1E99417995B9C9368',
      43114: '0x12e7fdd36b935934d8D38519E5acdD3D85506568'
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  }
]

export default farms
