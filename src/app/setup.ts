import { provideHttpClient } from "@angular/common/http";
import { provideZonelessChangeDetection } from "@angular/core";

export default [provideZonelessChangeDetection(), provideHttpClient()]