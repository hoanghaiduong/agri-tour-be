import { Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { ErrorMessages } from '../../exception/error.code';
import { ApiException } from '../../exception/api.exception';

export const UUIDQuery = (name: string) =>
  Query(
    name,
    new ParseUUIDPipe({
      version: '4',
      errorHttpStatusCode: 400,
      exceptionFactory: () => {
        throw new ApiException(ErrorMessages.INVALID_UUID);
      },
    }),
  );
export const UUIDParam = (name: string) =>
  Param(
    name,
    new ParseUUIDPipe({
      version: '4',
      errorHttpStatusCode: 400,
      exceptionFactory: () => {
        throw new ApiException(ErrorMessages.INVALID_UUID);
      },
    }),
  );