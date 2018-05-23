import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export default class ConversaService {

  constructor(private http: Http) {
  }

  finalizar(id, answers) {
    return this.chamarApi(id, answers, 'https://dev-api.oiwarren.com/api/v2/suitability/finish');
  }

  enviarMensagem(id, answers) {
    return this.chamarApi(id, answers, 'https://dev-api.oiwarren.com/api/v2/conversation/message');
  }

  chamarApi(id, answers, url) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(url,
      JSON.stringify({
        'context': 'suitability',
        'id': id,
        'answers': answers,
      }),
      new RequestOptions({headers: headers})
    ).map(response => response.json());
  }

}
