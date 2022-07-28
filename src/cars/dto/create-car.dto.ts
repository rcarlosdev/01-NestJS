/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;
  @IsString()
  readonly model: string;
}
