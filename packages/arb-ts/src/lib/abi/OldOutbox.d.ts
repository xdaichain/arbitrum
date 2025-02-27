/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface OldOutboxInterface extends ethers.utils.Interface {
  functions: {
    'OUTBOX_VERSION()': FunctionFragment
    'beacon()': FunctionFragment
    'bridge()': FunctionFragment
    'calculateItemHash(address,address,uint256,uint256,uint256,uint256,bytes)': FunctionFragment
    'calculateMerkleRoot(bytes32[],uint256,bytes32)': FunctionFragment
    'executeTransaction(uint256,bytes32[],uint256,address,address,uint256,uint256,uint256,uint256,bytes)': FunctionFragment
    'initialize(address,address)': FunctionFragment
    'isMaster()': FunctionFragment
    'l2ToL1BatchNum()': FunctionFragment
    'l2ToL1Block()': FunctionFragment
    'l2ToL1EthBlock()': FunctionFragment
    'l2ToL1OutputId()': FunctionFragment
    'l2ToL1Sender()': FunctionFragment
    'l2ToL1Timestamp()': FunctionFragment
    'outboxEntryExists(uint256)': FunctionFragment
    'outboxes(uint256)': FunctionFragment
    'outboxesLength()': FunctionFragment
    'processOutgoingMessages(bytes,uint256[])': FunctionFragment
    'rollup()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'OUTBOX_VERSION',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'beacon', values?: undefined): string
  encodeFunctionData(functionFragment: 'bridge', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'calculateItemHash',
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'calculateMerkleRoot',
    values: [BytesLike[], BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'executeTransaction',
    values: [
      BigNumberish,
      BytesLike[],
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string]
  ): string
  encodeFunctionData(functionFragment: 'isMaster', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'l2ToL1BatchNum',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'l2ToL1Block',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'l2ToL1EthBlock',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'l2ToL1OutputId',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'l2ToL1Sender',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'l2ToL1Timestamp',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'outboxEntryExists',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'outboxes',
    values: [BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'outboxesLength',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'processOutgoingMessages',
    values: [BytesLike, BigNumberish[]]
  ): string
  encodeFunctionData(functionFragment: 'rollup', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'OUTBOX_VERSION',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'beacon', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'bridge', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'calculateItemHash',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'calculateMerkleRoot',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'executeTransaction',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isMaster', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'l2ToL1BatchNum',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'l2ToL1Block', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'l2ToL1EthBlock',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'l2ToL1OutputId',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'l2ToL1Sender',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'l2ToL1Timestamp',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'outboxEntryExists',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'outboxes', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'outboxesLength',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'processOutgoingMessages',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'rollup', data: BytesLike): Result

  events: {
    'OutBoxTransactionExecuted(address,address,uint256,uint256)': EventFragment
    'OutboxEntryCreated(uint256,uint256,bytes32,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'OutBoxTransactionExecuted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OutboxEntryCreated'): EventFragment
}

export class OldOutbox extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: OldOutboxInterface

  functions: {
    OUTBOX_VERSION(overrides?: CallOverrides): Promise<[BigNumber]>

    beacon(overrides?: CallOverrides): Promise<[string]>

    bridge(overrides?: CallOverrides): Promise<[string]>

    calculateItemHash(
      l2Sender: string,
      destAddr: string,
      l2Block: BigNumberish,
      l1Block: BigNumberish,
      l2Timestamp: BigNumberish,
      amount: BigNumberish,
      calldataForL1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    calculateMerkleRoot(
      proof: BytesLike[],
      path: BigNumberish,
      item: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    executeTransaction(
      outboxIndex: BigNumberish,
      proof: BytesLike[],
      index: BigNumberish,
      l2Sender: string,
      destAddr: string,
      l2Block: BigNumberish,
      l1Block: BigNumberish,
      l2Timestamp: BigNumberish,
      amount: BigNumberish,
      calldataForL1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    initialize(
      _rollup: string,
      _bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    isMaster(overrides?: CallOverrides): Promise<[boolean]>

    l2ToL1BatchNum(overrides?: CallOverrides): Promise<[BigNumber]>

    l2ToL1Block(overrides?: CallOverrides): Promise<[BigNumber]>

    l2ToL1EthBlock(overrides?: CallOverrides): Promise<[BigNumber]>

    l2ToL1OutputId(overrides?: CallOverrides): Promise<[string]>

    l2ToL1Sender(overrides?: CallOverrides): Promise<[string]>

    l2ToL1Timestamp(overrides?: CallOverrides): Promise<[BigNumber]>

    outboxEntryExists(
      batchNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    outboxes(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>

    outboxesLength(overrides?: CallOverrides): Promise<[BigNumber]>

    processOutgoingMessages(
      sendsData: BytesLike,
      sendLengths: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    rollup(overrides?: CallOverrides): Promise<[string]>
  }

  OUTBOX_VERSION(overrides?: CallOverrides): Promise<BigNumber>

  beacon(overrides?: CallOverrides): Promise<string>

  bridge(overrides?: CallOverrides): Promise<string>

  calculateItemHash(
    l2Sender: string,
    destAddr: string,
    l2Block: BigNumberish,
    l1Block: BigNumberish,
    l2Timestamp: BigNumberish,
    amount: BigNumberish,
    calldataForL1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  calculateMerkleRoot(
    proof: BytesLike[],
    path: BigNumberish,
    item: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  executeTransaction(
    outboxIndex: BigNumberish,
    proof: BytesLike[],
    index: BigNumberish,
    l2Sender: string,
    destAddr: string,
    l2Block: BigNumberish,
    l1Block: BigNumberish,
    l2Timestamp: BigNumberish,
    amount: BigNumberish,
    calldataForL1: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  initialize(
    _rollup: string,
    _bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  isMaster(overrides?: CallOverrides): Promise<boolean>

  l2ToL1BatchNum(overrides?: CallOverrides): Promise<BigNumber>

  l2ToL1Block(overrides?: CallOverrides): Promise<BigNumber>

  l2ToL1EthBlock(overrides?: CallOverrides): Promise<BigNumber>

  l2ToL1OutputId(overrides?: CallOverrides): Promise<string>

  l2ToL1Sender(overrides?: CallOverrides): Promise<string>

  l2ToL1Timestamp(overrides?: CallOverrides): Promise<BigNumber>

  outboxEntryExists(
    batchNum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>

  outboxes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  outboxesLength(overrides?: CallOverrides): Promise<BigNumber>

  processOutgoingMessages(
    sendsData: BytesLike,
    sendLengths: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  rollup(overrides?: CallOverrides): Promise<string>

  callStatic: {
    OUTBOX_VERSION(overrides?: CallOverrides): Promise<BigNumber>

    beacon(overrides?: CallOverrides): Promise<string>

    bridge(overrides?: CallOverrides): Promise<string>

    calculateItemHash(
      l2Sender: string,
      destAddr: string,
      l2Block: BigNumberish,
      l1Block: BigNumberish,
      l2Timestamp: BigNumberish,
      amount: BigNumberish,
      calldataForL1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    calculateMerkleRoot(
      proof: BytesLike[],
      path: BigNumberish,
      item: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    executeTransaction(
      outboxIndex: BigNumberish,
      proof: BytesLike[],
      index: BigNumberish,
      l2Sender: string,
      destAddr: string,
      l2Block: BigNumberish,
      l1Block: BigNumberish,
      l2Timestamp: BigNumberish,
      amount: BigNumberish,
      calldataForL1: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    initialize(
      _rollup: string,
      _bridge: string,
      overrides?: CallOverrides
    ): Promise<void>

    isMaster(overrides?: CallOverrides): Promise<boolean>

    l2ToL1BatchNum(overrides?: CallOverrides): Promise<BigNumber>

    l2ToL1Block(overrides?: CallOverrides): Promise<BigNumber>

    l2ToL1EthBlock(overrides?: CallOverrides): Promise<BigNumber>

    l2ToL1OutputId(overrides?: CallOverrides): Promise<string>

    l2ToL1Sender(overrides?: CallOverrides): Promise<string>

    l2ToL1Timestamp(overrides?: CallOverrides): Promise<BigNumber>

    outboxEntryExists(
      batchNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>

    outboxes(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    outboxesLength(overrides?: CallOverrides): Promise<BigNumber>

    processOutgoingMessages(
      sendsData: BytesLike,
      sendLengths: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>

    rollup(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    OutBoxTransactionExecuted(
      destAddr?: string | null,
      l2Sender?: string | null,
      outboxEntryIndex?: BigNumberish | null,
      transactionIndex?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        destAddr: string
        l2Sender: string
        outboxEntryIndex: BigNumber
        transactionIndex: BigNumber
      }
    >

    OutboxEntryCreated(
      batchNum?: BigNumberish | null,
      outboxEntryIndex?: null,
      outputRoot?: null,
      numInBatch?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, string, BigNumber],
      {
        batchNum: BigNumber
        outboxEntryIndex: BigNumber
        outputRoot: string
        numInBatch: BigNumber
      }
    >
  }

  estimateGas: {
    OUTBOX_VERSION(overrides?: CallOverrides): Promise<BigNumber>

    beacon(overrides?: CallOverrides): Promise<BigNumber>

    bridge(overrides?: CallOverrides): Promise<BigNumber>

    calculateItemHash(
      l2Sender: string,
      destAddr: string,
      l2Block: BigNumberish,
      l1Block: BigNumberish,
      l2Timestamp: BigNumberish,
      amount: BigNumberish,
      calldataForL1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    calculateMerkleRoot(
      proof: BytesLike[],
      path: BigNumberish,
      item: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    executeTransaction(
      outboxIndex: BigNumberish,
      proof: BytesLike[],
      index: BigNumberish,
      l2Sender: string,
      destAddr: string,
      l2Block: BigNumberish,
      l1Block: BigNumberish,
      l2Timestamp: BigNumberish,
      amount: BigNumberish,
      calldataForL1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    initialize(
      _rollup: string,
      _bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    isMaster(overrides?: CallOverrides): Promise<BigNumber>

    l2ToL1BatchNum(overrides?: CallOverrides): Promise<BigNumber>

    l2ToL1Block(overrides?: CallOverrides): Promise<BigNumber>

    l2ToL1EthBlock(overrides?: CallOverrides): Promise<BigNumber>

    l2ToL1OutputId(overrides?: CallOverrides): Promise<BigNumber>

    l2ToL1Sender(overrides?: CallOverrides): Promise<BigNumber>

    l2ToL1Timestamp(overrides?: CallOverrides): Promise<BigNumber>

    outboxEntryExists(
      batchNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    outboxes(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    outboxesLength(overrides?: CallOverrides): Promise<BigNumber>

    processOutgoingMessages(
      sendsData: BytesLike,
      sendLengths: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    rollup(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    OUTBOX_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>

    beacon(overrides?: CallOverrides): Promise<PopulatedTransaction>

    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>

    calculateItemHash(
      l2Sender: string,
      destAddr: string,
      l2Block: BigNumberish,
      l1Block: BigNumberish,
      l2Timestamp: BigNumberish,
      amount: BigNumberish,
      calldataForL1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    calculateMerkleRoot(
      proof: BytesLike[],
      path: BigNumberish,
      item: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    executeTransaction(
      outboxIndex: BigNumberish,
      proof: BytesLike[],
      index: BigNumberish,
      l2Sender: string,
      destAddr: string,
      l2Block: BigNumberish,
      l1Block: BigNumberish,
      l2Timestamp: BigNumberish,
      amount: BigNumberish,
      calldataForL1: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    initialize(
      _rollup: string,
      _bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    isMaster(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l2ToL1BatchNum(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l2ToL1Block(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l2ToL1EthBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l2ToL1OutputId(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l2ToL1Sender(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l2ToL1Timestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>

    outboxEntryExists(
      batchNum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    outboxes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    outboxesLength(overrides?: CallOverrides): Promise<PopulatedTransaction>

    processOutgoingMessages(
      sendsData: BytesLike,
      sendLengths: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    rollup(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
