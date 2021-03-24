export class NestResponse {
  status: number;
  header: Object;
  body: Object;

  constructor(resposta: NestResponse) {
    Object.assign(this, resposta);
  }
}
