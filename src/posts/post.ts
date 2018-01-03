import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class Post {
  constructor(private http: HttpClient) { }

  getPosts(url: string): Observable<any> {
    return this.http.get(url);
  }
}
