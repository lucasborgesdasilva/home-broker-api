import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import crypto from 'crypto';
import { HydratedDocument } from 'mongoose';

//O HydratedDocument é um tipo do Mongoose que representa um documento que foi carregado do banco de dados e que tem os métodos do Mongoose disponíveis.
export type AssetDocument = HydratedDocument<Asset>;

@Schema({ timestamps: true }) //O timeStamps adiciona os campos createdAt e updatedAt automaticamente.
export class Asset {
  @Prop({ default: () => crypto.randomUUID() })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  symbol: string;

  @Prop()
  image: string;

  @Prop()
  price: number;

  //Estão aqui, mas não são obrigatórios. Pois o Mongoose adiciona automaticamente esses campos.
  createdAt!: Date; //A exclamação serve apenas para modelagem.
  updatedAt!: Date;
}

//O SchemaFactory é uma função do Mongoose que cria um schema a partir de uma classe.
export const AssetSchema = SchemaFactory.createForClass(Asset);
