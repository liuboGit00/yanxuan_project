import {reqHomeInfo,
        reqShiwuInfo,
        reqCategoryInfo} from '../api/index'
import {RECEIVE_HOME_INFO,
        RECEIVE_SHIWU_INFO,
        RECEIVE_CATEGORY_INFO,
        RECEIVE_DETAILS_INFO} from './mutation-type'

export default {
  async getHomeInfo({commit}){
    const result = await reqHomeInfo()
    const homeInfo = result.data
    commit(RECEIVE_HOME_INFO,{homeInfo})
  },
  async getShiWuInfo({commit}){
    const result = await reqShiwuInfo()
    const shiWuInfo = result.data
    commit(RECEIVE_SHIWU_INFO,{shiWuInfo})
  },
  async getcateGoryInfo({commit}){
    const result = await reqCategoryInfo()
    const cateGoryInfo = result.data
    commit(RECEIVE_CATEGORY_INFO,{cateGoryInfo})
  },
  getDetailsInfo({commit,state},index){
    const details = state.cateGoryInfo[index]
    commit(RECEIVE_DETAILS_INFO,{details})
  }
}
