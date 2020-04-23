export class Throwable404Error extends Error {
  constructor(msg?: string) {
    super(msg);
    this.name = 'Throwable404Error';
  }
}
