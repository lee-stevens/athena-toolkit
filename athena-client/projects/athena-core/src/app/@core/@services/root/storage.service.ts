import { Injectable } from "@angular/core";

/** Any Session or Local storage actions should be done through here for easy reference management */
@Injectable({ providedIn: "root" })
export class StorageService {

  private serialize<T>(value: T): string {
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }
    return value as unknown as string;
  }

  private deserialize<T>(value: string | null): T {
    try {
      return value ? JSON.parse(value) : null;
    } catch {
      return value as unknown as T;
    }
  }

  getSessionStorageItem<T>(key: string): T {
    const item = sessionStorage.getItem(key);
    return this.deserialize<T>(item);
  }

  setSessionStorageItem<T>(key: string, value: T): void {
    const serializedValue = this.serialize(value);
    sessionStorage.setItem(key, serializedValue);
  }

  getLocalStorageItem<T>(key: string): T {
    const item = localStorage.getItem(key);
    return this.deserialize<T>(item);
  }

  setLocalStorageItem<T>(key: string, value: T): void {
    const serializedValue = this.serialize(value);
    localStorage.setItem(key, serializedValue);
  }
}
