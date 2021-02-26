/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface FaucetFactoryContract
  extends Truffle.Contract<FaucetFactoryInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<FaucetFactoryInstance>;
}

export interface FaucetDeployed {
  name: "FaucetDeployed";
  args: {
    owner: string;
    faucet: string;
    0: string;
    1: string;
  };
}

export interface FaucetRegistered {
  name: "FaucetRegistered";
  args: {
    index: BN;
    faucet: string;
    0: BN;
    1: string;
  };
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

type AllEvents = FaucetDeployed | FaucetRegistered | OwnershipTransferred;

export interface FaucetFactoryInstance extends Truffle.ContractInstance {
  deployFaucet: {
    (
      _owner: string,
      _uri: string,
      _adapter_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _owner: string,
      _uri: string,
      _adapter_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    sendTransaction(
      _owner: string,
      _uri: string,
      _adapter_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _owner: string,
      _uri: string,
      _adapter_address: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  faucetExists(
    arg0: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  faucets(
    arg0: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getAccountFaucets(
    _from: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string[]>;

  getAllFaucets(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  getFaucets(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  getFaucetsWithData(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: string[]; 1: BN[]; 2: BN[] }>;

  initialize: {
    (_owner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(_owner: string, txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(
      _owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    deployFaucet: {
      (
        _owner: string,
        _uri: string,
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _owner: string,
        _uri: string,
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      sendTransaction(
        _owner: string,
        _uri: string,
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _owner: string,
        _uri: string,
        _adapter_address: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    faucetExists(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    faucets(
      arg0: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    getAccountFaucets(
      _from: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string[]>;

    getAllFaucets(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

    getFaucets(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

    getFaucetsWithData(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: string[]; 1: BN[]; 2: BN[] }>;

    initialize: {
      (_owner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _owner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _owner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _owner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
