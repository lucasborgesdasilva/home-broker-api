import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { WalletAsset } from './entities/wallet-asset.entity';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel(Wallet.name) private walletService: Model<Wallet>,
    @InjectModel(WalletAsset.name)
    private walletAssetService: Model<WalletAsset>,
  ) {}

  create(createWalletDto: CreateWalletDto) {
    return this.walletService.create(createWalletDto);
  }

  findAll() {
    return this.walletService.find();
  }

  findOne(id: string) {
    return this.walletService.findById(id);
  }

  createWalletAsset(data: {
    walletId: string;
    assetId: string;
    shares: number;
  }) {
    return this.walletAssetService.create({
      wallet: data.walletId,
      asset: data.assetId,
      shares: data.shares,
    });
  }
}
