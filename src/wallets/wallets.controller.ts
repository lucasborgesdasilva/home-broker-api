import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { WalletsService } from './wallets.service';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  @Post()
  create(@Body() createWalletDto: CreateWalletDto) {
    return this.walletsService.create(createWalletDto);
  }

  @Get()
  findAll() {
    return this.walletsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletsService.findOne(id);
  }

  @Post(':id/assets')
  CreateWalletAsset(
    @Param('id') id: string,
    @Body() data: { shares: number; assetId: string },
  ) {
    return this.walletsService.createWalletAsset({
      shares: data.shares,
      walletId: id,
      assetId: data.assetId,
    });
  }
}
