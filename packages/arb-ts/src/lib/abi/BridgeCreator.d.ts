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

interface BridgeCreatorInterface extends ethers.utils.Interface {
  functions: {
    'createBridge(address,address,address)': FunctionFragment
    'delayedBridgeTemplate()': FunctionFragment
    'inboxTemplate()': FunctionFragment
    'outboxTemplate()': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'rollupEventBridgeTemplate()': FunctionFragment
    'sequencerInboxTemplate()': FunctionFragment
    'transferOwnership(address)': FunctionFragment
    'updateTemplates(address,address,address,address,address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'createBridge',
    values: [string, string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'delayedBridgeTemplate',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'inboxTemplate',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'outboxTemplate',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'rollupEventBridgeTemplate',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'sequencerInboxTemplate',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'updateTemplates',
    values: [string, string, string, string, string]
  ): string

  decodeFunctionResult(
    functionFragment: 'createBridge',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'delayedBridgeTemplate',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'inboxTemplate',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'outboxTemplate',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'rollupEventBridgeTemplate',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sequencerInboxTemplate',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'updateTemplates',
    data: BytesLike
  ): Result

  events: {
    'OwnershipTransferred(address,address)': EventFragment
    'TemplatesUpdated()': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TemplatesUpdated'): EventFragment
}

export class BridgeCreator extends BaseContract {
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

  interface: BridgeCreatorInterface

  functions: {
    createBridge(
      adminProxy: string,
      rollup: string,
      sequencer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    delayedBridgeTemplate(overrides?: CallOverrides): Promise<[string]>

    inboxTemplate(overrides?: CallOverrides): Promise<[string]>

    outboxTemplate(overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    rollupEventBridgeTemplate(overrides?: CallOverrides): Promise<[string]>

    sequencerInboxTemplate(overrides?: CallOverrides): Promise<[string]>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    updateTemplates(
      _delayedBridgeTemplate: string,
      _sequencerInboxTemplate: string,
      _inboxTemplate: string,
      _rollupEventBridgeTemplate: string,
      _outboxTemplate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  createBridge(
    adminProxy: string,
    rollup: string,
    sequencer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  delayedBridgeTemplate(overrides?: CallOverrides): Promise<string>

  inboxTemplate(overrides?: CallOverrides): Promise<string>

  outboxTemplate(overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  rollupEventBridgeTemplate(overrides?: CallOverrides): Promise<string>

  sequencerInboxTemplate(overrides?: CallOverrides): Promise<string>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  updateTemplates(
    _delayedBridgeTemplate: string,
    _sequencerInboxTemplate: string,
    _inboxTemplate: string,
    _rollupEventBridgeTemplate: string,
    _outboxTemplate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    createBridge(
      adminProxy: string,
      rollup: string,
      sequencer: string,
      overrides?: CallOverrides
    ): Promise<[string, string, string, string, string]>

    delayedBridgeTemplate(overrides?: CallOverrides): Promise<string>

    inboxTemplate(overrides?: CallOverrides): Promise<string>

    outboxTemplate(overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    rollupEventBridgeTemplate(overrides?: CallOverrides): Promise<string>

    sequencerInboxTemplate(overrides?: CallOverrides): Promise<string>

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>

    updateTemplates(
      _delayedBridgeTemplate: string,
      _sequencerInboxTemplate: string,
      _inboxTemplate: string,
      _rollupEventBridgeTemplate: string,
      _outboxTemplate: string,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >

    TemplatesUpdated(): TypedEventFilter<[], {}>
  }

  estimateGas: {
    createBridge(
      adminProxy: string,
      rollup: string,
      sequencer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    delayedBridgeTemplate(overrides?: CallOverrides): Promise<BigNumber>

    inboxTemplate(overrides?: CallOverrides): Promise<BigNumber>

    outboxTemplate(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    rollupEventBridgeTemplate(overrides?: CallOverrides): Promise<BigNumber>

    sequencerInboxTemplate(overrides?: CallOverrides): Promise<BigNumber>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    updateTemplates(
      _delayedBridgeTemplate: string,
      _sequencerInboxTemplate: string,
      _inboxTemplate: string,
      _rollupEventBridgeTemplate: string,
      _outboxTemplate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    createBridge(
      adminProxy: string,
      rollup: string,
      sequencer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    delayedBridgeTemplate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    inboxTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>

    outboxTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    rollupEventBridgeTemplate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    sequencerInboxTemplate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    updateTemplates(
      _delayedBridgeTemplate: string,
      _sequencerInboxTemplate: string,
      _inboxTemplate: string,
      _rollupEventBridgeTemplate: string,
      _outboxTemplate: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
