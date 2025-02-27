import { Bridge } from '../src/lib/bridge'
import { instantiateBridge } from './instantiate_bridge'
import { ContractReceipt } from 'ethers'

import args from './getCLargs'

if (!args.txid) {
  throw new Error('Include txid (--txid 0xmytxid)')
}

const l1Txn: string | ContractReceipt = args.txid as string

if (!l1Txn) {
  throw new Error('Need to set l1 txn hash')
}

;(async () => {
  const { bridge } = await instantiateBridge()
  const res = await bridge.redeemRetryableTicket(l1Txn)
  const rec = await res.wait()
  console.log('done:', rec)
  console.log(rec.status === 1 ? 'success!' : 'failed...')
})()
