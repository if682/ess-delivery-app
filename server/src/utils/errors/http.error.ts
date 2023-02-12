export abstract class HttpError extends Error {
  msg: string;
  status: number;
  msgCode: string;
  slug: string;

  constructor({
    status,
    msg,
    msgCode,
    slug,
  }: {
    status: number;
    msg: string;
    msgCode?: string;
    slug?: string;
  }) {
    super(msg);
    this.msg = msg;
    this.status = status;
    this.msgCode = msgCode || 'failure';
    this.slug = slug || 'http-error';
  }

  toString() {
    return `[${this.name}]: msg: ${this.msg}, msgCode: ${this.msgCode}, status: ${this.status}, stack: ${this.stack}`;
  }
}

export class BadRequestError extends HttpError {
  constructor({ msg, msgCode }: { msg: string; msgCode?: string }) {
    super({ status: 400, msg, msgCode, slug: 'bad-request' });
  }
}

export class UnauthorizedError extends HttpError {
  constructor({ msg, msgCode }: { msg: string; msgCode?: string }) {
    super({ status: 401, msg, msgCode, slug: 'unauthorized' });
  }
}

export class ForbiddenError extends HttpError {
  constructor({ msg, msgCode }: { msg: string; msgCode?: string }) {
    super({ status: 403, msg, msgCode, slug: 'forbidden' });
  }
}

export class NotFoundError extends HttpError {
  constructor({ msg, msgCode }: { msg: string; msgCode?: string }) {
    super({ status: 404, msg, msgCode, slug: 'not-found' });
  }
}

export class InternalServerError extends HttpError {
  constructor({ msg, msgCode }: { msg?: string; msgCode?: string } = {}) {
    super({
      status: 500,
      msg: msg || 'Internal Server Error',
      msgCode,
      slug: 'internal-server',
    });
  }
}

export class NotImplementedError extends HttpError {
  constructor({ msg, msgCode }: { msg?: string; msgCode?: string } = {}) {
    super({
      status: 501,
      msg: msg || 'Not Implemented Error',
      msgCode,
      slug: 'not-implemented',
    });
  }
}
