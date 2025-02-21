export interface IRegion {
  id: number
  name: string
  startOfWorkingTime: number
  endOfWorkingTime: number
  deliveryDuration: number
  priceOfDelivery: number
  notWork: boolean
  notWorkReason: string
}
