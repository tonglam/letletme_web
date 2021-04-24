import  {get, post}  from "./https"

// common
export const qryEntryInfoData = (entry: number) => get('common/qryEntryInfoData', entry)
export const postQryEntryInfoData = (params: unknown) => post('common/qryEntryInfoData', params)