import type { UseFetchOptions } from 'nuxt/app';
// import type { IPromoError } from '~/composables/usePromo/types';

export function useApi<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
  const headers = useRequestHeaders(['cookie']);
  // const lang = useCookie<Languages>('i18n_redirected');
  return useFetch(url,
    {
      $fetch,

      onResponseError(event) {
        if (import.meta.server || event.response._data.error || (!event.response.ok && typeof event.response._data === 'string')) return;
        if (!event.error) {
          if (typeof event.request === 'string' && event.request.includes('/promo/GetByPhone')) return;
          if (event.request === '/api/promo/GetByName' && event.response._data.statusCode === 502) {
            return console.error('Промокоды недоступны');
          }
          return console.log(event.response.statusText);
        }
        else {
          if (typeof event.error.message === 'string') return console.log(event.error.message);
        }
      },

      onResponse(event) {
        if (import.meta.server) return;
        if (!event.response.ok && typeof event.response._data === 'string') {
          console.log(event.response._data);
          return;
        }
        if (event.response._data.error) {
          // const error: string | IPromoError = event.response._data.error;
          const error = event.response._data.error;
          if (typeof error === 'string') return console.error(error);
          if (error.message && typeof error.message === 'string') return console.log(error.message);
          if (error.message.ru) {
            console.log(error.message.ru);
          }
        }
      },

      ...options,
      headers,
      watch: false,
      immediate: false,
    },
  );
}
