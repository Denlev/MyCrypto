import { WalletName } from './wallet';
import { TAssetType } from './asset';

export interface Account {
  address: string;
  network: string;
  assets: AssetBalanceObject[];
  wallet: WalletName;
  balance: string;
  transactions: TransactionData[];
  dPath: string;
  timestamp: number;
}

export interface ExtendedAccount extends Account {
  uuid: string;
}

export interface TransactionData {
  txHash: string;
  stage: string;
  label: string;
  date: number;
  from: string;
  to: string;
  value: number;
  data: string;
  fiatValue: { USD: string };
  assetType: TAssetType;
}

export interface AssetBalanceObject {
  uuid: string;
  balance: string;
  timestamp: number;
}