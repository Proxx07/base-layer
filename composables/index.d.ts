import type { CookieRef } from '#app';
import type { IRegion } from '@base-composables/useRegions/types';
import type { ComputedRef, Ref } from 'vue';

interface RegionsComposable {
  regions: ComputedRef<IRegion[]>
  loading: ComputedRef<boolean>
  activeRegion: ComputedRef<IRegion | undefined>
  currentRegionId: CookieRef<number>
  activeRegionCenterCoords: Ref<[number, number]>
  setRegionId: (value: number) => void
  getRegions: () => Promise<void>
}
export declare const useRegions: () => RegionsComposable;
