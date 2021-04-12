import MyTable from './MyTable.vue'
import {isValidData} from 'common/util.js'

const cstTdType = {
  'ORDER': 'order',//序号
  'SHOW': 'show',//仅显示
  'EDIT': 'edit',//仅编辑
  'CHECKBOX': 'checkbox',//选择
  'ICON': 'icon',//图标
  'BUTTON': 'button',//按钮
  'SELECT': 'select',//下拉选择
  'MULTI_TEXT': 'multi_text',//多文本
  'MULTI_CHECKBOX': 'multi_checkbox',//多选标签
  'MULTI_SELECT': 'multi_select',//多选下拉
  'COO_EDIT': 'coo_edit',//交互编辑
}

//////////////////////////////////////////////////筛选窗口处理begin//////////////////////////////////////////////////////////
// export 获取可选项
function getCurOptions(pname, headList, filterMap, srcDataList, curDataList){
  const filterHeaderList = getFilterHeadList(headList)
  const curBeforeList = getDataListBeforeCurFilter(pname, filterMap, baseTableList(filterHeaderList, srcDataList))
  const curOptions_obj = getCurOptionsObject(pname, curBeforeList)
  setCheckedOptions(curOptions_obj, pname, baseTableList(filterHeaderList, curDataList))
  return {
    options: getOptions(curOptions_obj),
    curBeforeList
  }
}

// 需要处理的表头
function getFilterHeadList(headList){
  return headList.filter(headItem => {
    return headItem.showArrow
  })
}

// 重新构造的基础表格数据
function baseTableList(headList, dataList){
  const baseList = []
  let item
  for(let rowItem of dataList){
    item = {}
    item.id = rowItem.id
    for(let headItem of headList){
      item[headItem.pname] = getTdLabel(headItem.type, rowItem, headItem.pname)
    }
    baseList.push(item)
  }
  return baseList
}

function getTdLabel(tdType, rowItem, pname){
  let label = ''
  switch(tdType){
    case cstTdType.SHOW:
    case cstTdType.EDIT:
    case cstTdType.COO_EDIT:
      label = rowItem[pname]
      break
    case cstTdType.SELECT:
      label = rowItem[pname].label
      break 
  }
  return label
}

// 当前列全选时的表格（注意为构造后的基础数据）
function getDataListBeforeCurFilter(pname, filterMap, srcDataList){
  let dataList = srcDataList
  for(let key in filterMap){
    if(key === pname){
      continue
    }
    dataList = filterDataList(dataList, key, filterMap[key])
  }
  return dataList
}

// 当前显示的可选列表，先默认设置为“未勾选”
function getCurOptionsObject(pname, dataList){
  const curOptions = {}
  if(dataList.length > 0){
    dataList.forEach(rowItem => {
      curOptions[rowItem[pname]] = {
        label: rowItem[pname],
        check: false
      }
    });
  }
  return curOptions
}

// 当前表格中显示的行需要标记为“勾选”
function setCheckedOptions(curOptions, pname, curDataList){
  if(curDataList.length > 0){
    curDataList.forEach(rowItem => {
      curOptions[rowItem[pname]].check = true
    });
  }
}

function filterDataList(dataList, pname, checkArr){
  if(checkArr==null || checkArr.length===0){
    return dataList.slice(0)
  }
  return dataList.filter(rowItem => {
    return isMatchingText(rowItem[pname], checkArr) ? true : false
  })
}

function isMatchingText(str,checkArr){
  for(let item of checkArr){
    if(item.check && item.label === str){
      return true
    }
  }
  return false;
}

function getOptions(optionsObj){
  const options = []
  for(let label in optionsObj){
    options.push({
      label,
      check: optionsObj[label].check
    })
  }
  return options
}

// export 返回过滤项
function getFilterOptions(options){
  return options.filter(item => {
    return item.check
  })
}

// export 返回筛选结果
function getFilterDataList(pname, srcDataList, options, curBeforeList){
  const baseFilterList = filterDataList(curBeforeList, pname, options)
  const ids = getIds(baseFilterList)
  const newDataList = []
  let index
  srcDataList.forEach(rowItem => {
    index = ids.indexOf(rowItem.id)
    if(index >= 0){
      newDataList.push(rowItem)
      ids.splice(index, 1)
    }   
  });
  return newDataList
}

function getIds(dataList){
  return dataList.map(item => {
    return item.id
  })
}
//////////////////////////////////////////////////筛选窗口处理end//////////////////////////////////////////////////////////

//////////////////////////////////////////////////表格验证begin//////////////////////////////////////////////////////////
// function validDataForm(headList, datalist) {
//   let errorDatas = {};
//   let pnames;
//   for(let rowItem of datalist){
//     for(let headItem of headList){
      
//     }

    
//     pnames = [];
//     if(!isValidData(dataArr[i].username,VALID_ALL,1,50)){
//       pnames.push("username");
//     }
//     if(!isValidData(dataArr[i].phone,VALID_NUMBER,8,15)){
//       pnames.push("phone");
//     }
//     if(!isValidData(dataArr[i].company,VALID_ALL,1,100)){
//       pnames.push("company");
//     }
//     if(!isValidData(dataArr[i].post,VALID_ALL,1,100)){
//       pnames.push("post");
//     }
//     if(!isValidData(dataArr[i].account,VALID_ALL,1,50)){
//       pnames.push("account");
//     }
//     if(!isValidData(dataArr[i].password,VALID_NO_CHINESE,1,50)){
//       pnames.push("password");
//     }
//     if(pnames.length>0){
//       errorDatas[dataArr[i].id] = pnames;
//     }
//   }
//   return errorDatas;
// }
//////////////////////////////////////////////////表格验证end//////////////////////////////////////////////////////////

export{
  MyTable, cstTdType, getCurOptions, getFilterOptions, getFilterDataList
}