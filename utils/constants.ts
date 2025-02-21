import type { Languages } from './types/locales';

export const DEFAULT_LANGUAGE: Languages = 'ru';

export const lang: Record<Languages, number> = {
  uz: 1,
  ru: 2,
  en: 3,
};

export const COOKIES_MAX_AGE = 30 * 24 * 3600;

export const SMS_LIMIT_SECONDS = 60;
export const smsLimitError = (lang: Languages, seconds: number): string => {
  if (lang === 'ru') return `Код подтверждения отправлен на ваш номер. \n Для повторной отправки подождите ${seconds} секунд`;
  if (lang === 'uz') return `Tasdiqlash kodi sizning raqamingizga yuborildi. \n Qayta yuborish uchun ${seconds} soniya kuting`;
  return `The confirmation code has been sent to your number. \n Please wait ${seconds} seconds to resend`;
};
