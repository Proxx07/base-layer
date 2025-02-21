/*
import type { Feature } from '@yandex/ymaps3-types';
import type { IMarker } from '~/composables/useRestaurants/types';

const setFeatureToMarker = (item: Feature): IMarker => {
  return {
    id: item.geometry?.coordinates.join() ?? `${Date.now()}`,
    title: item.properties.name,
    address: item.properties.description,
    coordinates: [item.geometry?.coordinates[0] ?? 0, item.geometry?.coordinates[1] ?? 0],
    iconSrc: '',
  };
};

export const yandexSearch = async (text: string): Promise<IMarker[]> => {
  try {
    const result = await ymaps3.search({ text });
    return result.map(i => setFeatureToMarker(i));
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  catch (e: any) {
    return [];
  }
};
*/
