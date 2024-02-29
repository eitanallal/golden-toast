import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidUsernamePasswordException extends HttpException {
  constructor() {
    super('Invalid Username/Password combination', HttpStatus.BAD_REQUEST);
  }
}
