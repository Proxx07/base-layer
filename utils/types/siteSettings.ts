import type { Languages } from './locales';

interface IAbout {
  BottomText: string
  Img: string
  TopText: string
}

export interface ISiteSettings {
  callCanterPhone: string
  email: string

  addressEn: string
  addressRu: string
  addressUz: string

  legalNameEn: string
  legalNameRu: string
  legalNameUz: string

  phonesEn: string[]
  phonesRu: string[]
  phonesUz: string[]

  AboutUs: Record<Languages, IAbout>

  SiteSettings: {
    Logo: string
    Marker: string
    Colors: Record<string, string>
  }

  socials: Array<{
    name: string
    link: string
  }>

  Offer: Record<Languages, string>

  OrderMaxSum?: number

  /* PromoProducts?: Array<{ ProductId: string, MaxCount: number }> */
}
