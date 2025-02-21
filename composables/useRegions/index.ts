import type { CookieRef } from '#app';
import type { ComputedRef, Ref } from 'vue';
import type { IRegion } from './types';
import { centerCoordsDefault } from './models';

interface RegionsComposable {
  regions: ComputedRef<IRegion>[]
  loading: ComputedRef<boolean>
  activeRegion: ComputedRef<IRegion | undefined>
  currentRegionId: CookieRef<number>
  activeRegionCenterCoords: Ref<[number, number]>
  setRegionId: (value: number) => void
  getRegions: Promise<void>
}

export const useRegions = (): RegionsComposable => {
  const currentRegionId = useCookie<number>('region', { default: () => 0, maxAge: COOKIES_MAX_AGE });

  const { data, status, refresh } = useApi<IRegion[]>('/api/regions/List');

  const activeRegion = computed<IRegion | undefined> (() => data.value?.find(el => el.id === currentRegionId.value));

  const activeRegionCenterCoords = ref<[number, number]>(centerCoordsDefault);

  const loading = computed(() => status.value === 'pending');

  const regions = computed(() => data.value || []);

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
