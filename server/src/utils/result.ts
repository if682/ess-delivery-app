import { Request, Response } from 'express';

export abstract class Result {
  msg: string;
  msgCode: string;
  code: number;

  constructor({
    msg,
    msgCode,
    code,
  }: {
    msg: string;
    msgCode: string;
    code: number;
  }) {
    this.msg = msg;
    this.msgCode = msgCode;
    this.code = code;
  }

  static transformRequestOnMsg(req: Request) {
    return `${req.method} ${req?.originalUrl}`;
  }
}

export class SuccessResult extends Result {
  data?: any;

  constructor({
    msg,
    msgCode,
    code,
    data,
  }: {
    msg: string;
    msgCode?: string;
    code?: number;
    data?: any;
  }) {
    super({ msg, msgCode: msgCode || 'success', code: code || 200 });
    this.data = data;
  }

  handleSuccess(res: Response) {
    return res.status(this.code).send(this);
  }
}

export class FailureResult extends Result {
  constructor({
    msg,
    msgCode,
    code,
  }: {
    msg: string;
    msgCode?: string;
    code?: number;
  }) {
    super({ msg, msgCode: msgCode || 'failure', code: code || 500 });
  }

  handleError(res: Response) {
    return res.status(this.code).send(this);
  }
}
