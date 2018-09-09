import {RECEIVE_HOME_INFO,
        RECEIVE_SHIWU_INFO,
        RECEIVE_CATEGORY_INFO,
        RECEIVE_DETAILS_INFO} from './mutation-type'
export default {
  [RECEIVE_HOME_INFO](state,{homeInfo}){
    state.homeInfo = homeInfo
  },
  [RECEIVE_SHIWU_INFO](state,{shiWuInfo}){
    state.shiwuInfo = shiWuInfo
  },
  [RECEIVE_CATEGORY_INFO](state,{cateGoryInfo}){
    state.cateGoryInfo = cateGoryInfo
  },
  [RECEIVE_DETAILS_INFO](state,{details}){
    state.detailsInfo = details
  }
}
