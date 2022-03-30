// const _ = require('lodash')
const { ethers } = require('ethers');
const bn = ethers.BigNumber.from

const n = 3

function validate(address, n) {
    if (address[3] != address[address.length-1]) {
        return false
    }
    for (let i = 0; i < n-1; ++i) {
        if (address[2+i] != address[2+i+1]) {
            return false
        }
        if (address[address.length-1-i] != address[address.length-2-i]) {
            return false
        }
    }
    return true
}

let privateKey = bn(ethers.utils.randomBytes(32))
while (true) {
    privateKey = privateKey.add(1)
    const address = new ethers.Wallet(privateKey).address
    if (validate(address, n)) {
        console.log(address, privateKey.toHexString())
    }
}
