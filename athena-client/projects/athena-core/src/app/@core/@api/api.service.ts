import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '@Env/environment';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

export enum ServerConnectionStatus {
  Initialising,
  Connected,
  Disconnected,
}

export interface IApiHandshakeResponse {
  status: number;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class APIService {
  apiUrl = ENVIRONMENT.API_URL;
  deviceHost = ENVIRONMENT.DEVICE_HOST;

  serverConnectionStatus$ = new BehaviorSubject<ServerConnectionStatus>(ServerConnectionStatus.Initialising);

  headers = new HttpHeaders({
    // 'x-access-token': this.accessToken,
  });

  constructor(private _httpClient: HttpClient) {
    this.apiHandshake();
    // const serverHandhshakeInterval$ = interval(30000);
    // serverHandhshakeInterval$.subscribe(() => {
    //   this.apiHandshake();
    // });
  }

  private apiHandshake(): Promise<void> {
    const handshakeUrl = this.constructApiUrl('handshake');
    return firstValueFrom(
      this._httpClient.get<IApiHandshakeResponse>(handshakeUrl, {
        headers: this.headers,
      })
    ).then((res) => {
      const serverIsAvailable = res.status === 200;
      if (!serverIsAvailable) {
        this.serverConnectionStatus$.next(ServerConnectionStatus.Disconnected);
      }
      console.info('API:', this.apiUrl, `\nENV: ${this.deviceHost}\nHandshake: ${res.status}\nAPI Available: ${serverIsAvailable ? 'Yes' : 'No'}`);
      return Promise.resolve();
    });
  }

  // private handshakeCheck(): Promise<boolean> {
  //   if (this.serverConnectionStatus$.value === ServerConnectionStatus.Connected) {
  //     return Promise.resolve(true);
  //   } else {
  //     return this.apiHandshake().then(() => {
  //       return Promise.resolve(this.serverConnectionStatus$.value === ServerConnectionStatus.Connected);
  //     })
  //   }
  // }

  get<T>(endpoint: string): Promise<T> {
    const getUrl = this.constructApiUrl(endpoint);
    return firstValueFrom(this._httpClient.get<T>(getUrl, { headers: this.headers })).catch((err) => {
      console.error(`Failed to Get ${endpoint}`);
      return Promise.reject();
    });
  }

  post<T>(endpoint: string, body: any): Promise<T> {
    const postUrl = this.constructApiUrl(endpoint);
    return firstValueFrom(this._httpClient.post<T>(postUrl, body, { headers: this.headers }))
      .then((savedExercise) => {
        return Promise.resolve(savedExercise);
      })
      .catch((e) => {
        console.log(`Error saving to ${endpoint}\n`, e);
        return Promise.reject();
      });
  }

  private constructApiUrl(endpoint: string): string {
    return `${this.apiUrl}${endpoint}`;
  }
}
