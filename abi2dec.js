const _ = require('lodash');
const { ethers } = require('ethers');
const util = require('util');

const abi = require('./abi/Aggregator2.json').abi
const iface = new ethers.utils.Interface(abi)

const args = process.argv.slice(2)

const params = iface.decodeFunctionData("aggregate", args[0])

console.log(util.inspect(bns(params), {showHidden: false, depth: null, colors: true}))

function bns(o) {
  const n = _.cloneDeep(o)
  for (let k in o) {
    if (!o.hasOwnProperty(k)) {
      continue
    }
    if (o[k]?._isBigNumber) {
      n[k] = o[k].toString()
    } else if (typeof o[k] == "object") {
      n[k] = bns(o[k]);
    } else {
      n[k] = o[k]
    }
  }
  return n
}
