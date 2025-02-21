import type { Languages } from '../../utils/types/locales';
import { createHash } from 'node:crypto';
import { joinURL } from 'ufo';
import { DEFAULT_LANGUAGE, lang } from '../../utils/constants';
import { getCurrentDateForHash } from '../../utils/dateForHash';

export default defineEventHandler(async (event) => {
  const {
    apiBaseUrl, apiUser: userName, apiPassword: password,
    apiPromoUrl, apiTgUrl, apiTgUser, apiTgPassword, apiTgSecret,
  } = useRuntimeConfig();

  if (event.path.includes('/promo/')) {
    const path = event.path.replace(/^\/api\/promo\//, 'api/promo/');
    const target = joinURL(apiPromoUrl, path);

    return proxyRequest(event, target);
  }

  if (event.path.includes('/tg/')) {
    const path = event.path.replace(/^\/api\/tg\//, 'api/');
    const target = joinURL(apiTgUrl, path);

    try {
      const key = getCurrentDateForHash();
      const toHashData = `${apiTgUser}${key.substring(0, 6)}${apiTgSecret}${key.substring(6, 12)}${apiTgPassword}`;
      const hash = createHash('sha256').update(toHashData).digest('hex');

      Object.assign(event.node.req.headers, { key, hash });
      return proxyRequest(event, target);
    }
    catch (error) {
      console.log(error);
    }
  }

  const path = event.path.replace(/^\/api\//, 'api/');
  const ln = getCookie(event, 'i18n_redirected') ?? DEFAULT_LANGUAGE;

  const resultPath = path.includes('?') ? `${path}&Language=${lang[ln as Languages]}` : `${path}?Language=${lang[ln as Languages]}`;

  const target = joinURL(apiBaseUrl, resultPath);
  let token = '';

  try {
    const result = await $fetch<{ token: string }>(`${apiBaseUrl}/api/account/token`, { method: 'POST', body: { userName, password } });
    token = result.token;
  }
  catch (err) {
    console.error(err);
  }

  Object.assign(event.node.req.headers, { Authorization: `Bearer ${token}` });
  return proxyRequest(event, target);
});
