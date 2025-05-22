import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletAsset, WalletAssetSchema } from './entities/wallet-asset.entity';
import { Wallet, WalletSchema } from './entities/wallet.entity';
import { WalletsController } from './wallets.controller';
import { WalletsService } from './wallets.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Wallet.name, schema: WalletSchema },
      { name: WalletAsset.name, schema: WalletAssetSchema },
    ]),
  ],
  controllers: [WalletsController],
  providers: [WalletsService],
})
export class WalletsModule {}
