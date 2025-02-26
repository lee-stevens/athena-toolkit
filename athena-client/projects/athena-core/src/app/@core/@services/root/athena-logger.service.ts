import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AthenaLoggerService {
  static log(message: string, context?: string): void {
    console.log(`[${context || 'Athena'}] ${message}`);
  }

  static warn(message: string, context?: string): void {
    console.warn(`[${context || 'Athena'}] ${message}`);
  }

  static error(message: string, context?: string): void {
    console.error(`[${context || 'Athena'}] ${message}`);
  }

  static debug(message: string, context?: string): void {
    console.debug(`[${context || 'Athena'}] ${message}`);
  }
}
