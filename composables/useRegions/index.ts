import type { IRegion } from './types';
import { centerCoordsDefault } from './models';

export const useRegions = () => {
  const currentRegionId = useCookie<number>('region', { default: () => 0, maxAge: COOKIES_MAX_AGE });

  const { data, status, refresh } = useApi<IRegion[]>('/api/regions/List');

  const activeRegion = computed<IRegion | undefined> (() => data.value?.find(el => el.id === currentRegionId.value));

  const activeRegionCenterCoords = ref<[number, number]>(centerCoordsDefault);

  const loading = computed<boolean>(() => status.value === 'pending');

  const regions = computed<IRegion[]>(() => data.value || []);

  const setRegionId = (value: number) => {
    currentRegionId.value = value;
  };

  const getRegions = async () => {
    await refresh();
  };

  return {
    regions,
    loading,
    activeRegion,
    currentRegionId,
    activeRegionCenterCoords,
    setRegionId,
    getRegions,
  };
};
