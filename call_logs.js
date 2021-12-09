// const _ = require('lodash')
const { ethers } = require('ethers');
// const bn = ethers.BigNumber.from
const { JsonRpcProvider } = require('@ethersproject/providers')
const abi = require('./Test.abi.json')

const url = 'http://localhost:9650/ext/bc/C/rpc'
const provider = new JsonRpcProvider({ url, timeout: 6000 })

const contract = new ethers.Contract('0x789a5FDac2b37FCD290fb2924382297A6AE65860', abi, provider)

const EVMPP = '0x5555555555555555555555555555555555555555'

contract.callStatic.debugI('a', 'b', {
    from: '0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC',
    accessList: [{ address: '0x5555555555555555555555555555555555555555' }],
})
.then(res => {
    console.log(res)
})
.catch(err => {
    // console.error(err)
    if (err.reason) {
        const result = JSON.parse(err.reason)
        console.error(result)
        result?.logs.map(console.log)
    }
})
