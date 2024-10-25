/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import * as beet from '@metaplex-foundation/beet';

/**
 * Arguments used to create {@link ClaimSeatLog}
 * @category Accounts
 * @category generated
 */
export type ClaimSeatLogArgs = {
  market: web3.PublicKey;
  trader: web3.PublicKey;
};
/**
 * Holds the data for the {@link ClaimSeatLog} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class ClaimSeatLog implements ClaimSeatLogArgs {
  private constructor(
    readonly market: web3.PublicKey,
    readonly trader: web3.PublicKey,
  ) {}

  /**
   * Creates a {@link ClaimSeatLog} instance from the provided args.
   */
  static fromArgs(args: ClaimSeatLogArgs) {
    return new ClaimSeatLog(args.market, args.trader);
  }

  /**
   * Deserializes the {@link ClaimSeatLog} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [ClaimSeatLog, number] {
    return ClaimSeatLog.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link ClaimSeatLog} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<ClaimSeatLog> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    );
    if (accountInfo == null) {
      throw new Error(`Unable to find ClaimSeatLog account at ${address}`);
    }
    return ClaimSeatLog.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'MNFSTqtC93rEfYHB6hF82sKdZpUDFWkViLByLd1k1Ms',
    ),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, claimSeatLogBeet);
  }

  /**
   * Deserializes the {@link ClaimSeatLog} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [ClaimSeatLog, number] {
    return claimSeatLogBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link ClaimSeatLog} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return claimSeatLogBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link ClaimSeatLog}
   */
  static get byteSize() {
    return claimSeatLogBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link ClaimSeatLog} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      ClaimSeatLog.byteSize,
      commitment,
    );
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link ClaimSeatLog} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === ClaimSeatLog.byteSize;
  }

  /**
   * Returns a readable version of {@link ClaimSeatLog} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      market: this.market.toBase58(),
      trader: this.trader.toBase58(),
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const claimSeatLogBeet = new beet.BeetStruct<
  ClaimSeatLog,
  ClaimSeatLogArgs
>(
  [
    ['market', beetSolana.publicKey],
    ['trader', beetSolana.publicKey],
  ],
  ClaimSeatLog.fromArgs,
  'ClaimSeatLog',
);