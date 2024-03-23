import { AxiosError } from 'axios';

export type RequestError = AxiosError<Record<string, string | Record<string, string>>>;
