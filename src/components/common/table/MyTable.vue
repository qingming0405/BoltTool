<template>
  <div class="my-table">
    <table ref="table">
      <thead ref="thead">
        <tr>
          <th v-for="(headItem,col) in headList" :key="col" pname="headItem.pname" :style="headItem.style">
            {{headItem.label}}
            <span :class="showArrow(headItem.showArrow)" @click="arrowClick(headItem.pname)"></span>
          </th>
        </tr>
      </thead>
      <tbody ref="tbody">
        <tr v-for="(rowItem, row) in curDataList" :key="row" :pid="rowItem.id" :class="[trBgColor(row), fontBold(rowItem.fontBold)]" @click="selectTr(rowItem, row)" @keydown="selectTr(rowItem, row)">
          <td v-for="(headItem, col) in headList" :key="col" :pname="headItem.pname" :style="headItem.style">
            <div v-if="headItem.type === cstTdType.ORDER">{{row + 1}}</div>
            <div v-else-if="headItem.type === cstTdType.SHOW">{{rowItem[headItem.pname]}}</div>
            <edit-div v-else-if="headItem.type === cstTdType.EDIT" :message="rowItem[headItem.pname]" @edit-change="tdEditChange($event, rowItem, headItem.pname)"></edit-div>
            <input v-else-if="headItem.type === cstTdType.CHECKBOX" type="checkbox" v-model="rowItem[headItem.pname]">
            <img v-else-if="headItem.type === cstTdType.ICON" :src="rowItem[headItem.pname]" alt="">
            <span v-else-if="headItem.type === cstTdType.BUTTON" class="td-button" @click="tdBtnClick(rowItem, headItem.pname)">{{rowItem[headItem.pname]}}</span>
            <div v-else-if="headItem.type === cstTdType.SELECT" @dblclick="tdDblClick($event, cstTdType.SELECT, rowItem, headItem.pname)">{{rowItem[headItem.pname].label}}</div>
            <div v-else-if="headItem.type === cstTdType.MULTI_TEXT" @dblclick="tdDblClick($event, cstTdType.MULTI_TEXT, rowItem, headItem.pname)">
              <span v-for="(textItem, index) in rowItem[headItem.pname]" :key="index" :class="fontBold(textItem.fontBold)">{{textItem.text}}</span>
            </div>
            <div v-else-if="headItem.type === cstTdType.MULTI_CHECKBOX" class="multi-checkbox">
              <label v-for="(checkItem, index) in rowItem[headItem.pname]" :key="index" class="check-label">
                <input type="checkbox" v-model="checkItem.check">
                {{checkItem.label}}
              </label>
            </div>
            <div v-else-if="headItem.type === cstTdType.MULTI_SELECT" @dblclick="tdDblClick($event, cstTdType.MULTI_SELECT, rowItem, headItem.pname)">
              {{rowItem[headItem.pname].label}}
            </div>
            <edit-div v-else-if="headItem.type === cstTdType.COO_EDIT" :message="rowItem[headItem.pname]" @edit-change="tdEditChange($event, rowItem, headItem.pname, true)"></edit-div>
            <div v-else>{{rowItem[headItem.pname]}}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EditDiv from './EditDiv.vue'

import {cstTdType, getCurOptions, getFilterOptions, getFilterDataList} from './MyTable.js'
import {isValidData} from 'common/util.js'

export default {
  name: 'MyTable',
  components: {
    EditDiv
  },
  props: {
    headList: {
      type: Array,
      default: []
    },
    dataList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      cstTdType,
      curDataList: [],
      curIndex: -1,
      filterMap: null,
    }
  },
  watch: {
    dataList: function(newValue, oldValue){
      this.curDataList = newValue.slice(0)
    },
    headList: function(newValue, oldValue){
      this.$nextTick(() => {
        this.setTbodyHeight()
      })
    }
  },
  created(){
    this.curDataList = this.dataList.slice(0)
  },
  mounted(){
    this.initFilterMap()
    this.setTbodyHeight()
  },
  computed: {
    
  },
  methods: {
    /***公共方法区 */
    initFilterMap(){
      this.filterMap = {}
      for(let headItem of this.headList){
        if(headItem.showArrow){
          this.filterMap[headItem.pname] = []
        }
      }
    },
    clearFilter() {
      this.curDataList = this.dataList.slice(0)
      this.initFilterMap()
    },
    setTbodyHeight(){
      let tableHeight = this.$refs.table.offsetHeight
      let theadHeight = this.$refs.thead.offsetHeight
      this.$refs.tbody.style.height = `${tableHeight-theadHeight}px`
    },
    getUpdateRows(){
      return this.curDataList.filter(rowItem => rowItem.needUpdate)
    },
    doValidData(){
      let isValid = true
      const updateRows = []
      this.curDataList.forEach((rowItem, index) => {
        if(rowItem.needUpdate){
          isValid = this.setValidRow(rowItem) && isValid
          updateRows.push(rowItem)
        }
      });
      return {
        isValid,
        updateRows
      }
    },
    setValidRow(rowItem){
      let isValid = true
      this.headList.forEach(headItem => {
        if(headItem.hasOwnProperty('valid') && headItem.valid != null){
          const {type, minLen, maxLen} = headItem.valid
          isValid = isValid && isValidData(rowItem[headItem.pname], type, minLen, maxLen)
        }
      });
      this.$set(rowItem, 'isValid', isValid)
      // rowItem.isValid = isValid
      return isValid
    },
    getCheckedRows(){
      return this.dataList.filter(rowItem => rowItem.checkRow)
    },
    getCheckedRowIds(){
      const checkedRowIds = []
      this.dataList.forEach(rowItem => {
        if(rowItem.checkRow){
          checkedRowIds.push(rowItem.id)
        }
      })
      return checkedRowIds
    },
    addRow(){

    },
    delRows(){

    },
    /***条件判定区 */
    showArrow(isShow){
      return isShow? 'arrow-icon' : ''
    },
    trBgColor(index){
      if(this.curDataList && this.curDataList.length>index && this.curDataList[index].hasOwnProperty('isValid')){
        if(!this.curDataList[index].isValid){
          return 'invalid-tr'
        }
      }
      else if(this.curIndex === index){
        return 'select-tr'
      }
      return ''
    },
    fontBold(fontBold){
      if(typeof fontBold !== 'undefined' && fontBold === 'font-bold'){
        return 'font-bold'
      }
      return ''
    },
    /***事件方法区 */
    selectTr(rowItem, index){
      this.curIndex = index
      rowItem['needUpdate'] = true
    },
    arrowClick(pname){
      const {options, curBeforeList} = getCurOptions(pname, this.headList, this.filterMap, this.dataList, this.curDataList)
      this.$filterbox({options}).then(res => {
        if(res){
          this.filterMap[pname] = res.options
          this.curDataList = getFilterDataList(pname, this.dataList, getFilterOptions(res.options), curBeforeList)
          this.curIndex = -1
        }
      })
    },
    tdEditChange(newValue, rowItem, pname, isCoo=false){
      rowItem[pname] = newValue
      if(isCoo){
        this.$emit('coo-td-edit-blur',rowItem, pname)
      }
    },
    tdBtnClick(rowItem, pname){
      this.$emit('td-btn-click',rowItem,pname)
    },
    tdDblClick(e, tdType, rowItem, pname){
      const styleObj = {
        //覆盖td
        unit: 'px',
        left: (e.clientX - e.offsetX - e.detail),
        top: (e.clientY - e.offsetY - e.detail),
        width: e.path[1].offsetWidth,
        height: e.path[1].offsetHeight,
      }
      switch(tdType){
        case cstTdType.SELECT:
          this.$select(Object.assign(
            {},
            rowItem[pname],
            {styleObj}
          )).then(res => {
            this.emitTdDblClickBack(rowItem,pname,res)
          })
          break
        case cstTdType.MULTI_TEXT:
          this.$emit('td-dbl-click', rowItem, pname)
          break
        case cstTdType.MULTI_SELECT:
          this.$multiselect(Object.assign(
            {},
            rowItem[pname],
            {styleObj}
          )).then(res => {
            this.emitTdDblClickBack(rowItem,pname,res)
          })
          break
      }
      
    },
    emitTdDblClickBack(rowItem,pname,result){
      this.$emit('td-dbl-click-back',rowItem,pname,result)
    }
  }
}
</script>

<style scoped>
  .my-table{
    width: calc(100% - 60px);
    height: calc(100% - 75px);
    margin: 0px 30px 30px 30px;
  }
  table{
    width: 100%;
    height: 100%;
    background: var(--bgcolor-table);
    border: 1px solid var(--border-table);
    border-collapse: collapse;
  }
  tbody{
    display: block;
    height: 100%;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  tbody::-webkit-scrollbar {
    display: none;
  }
  tr{
    display:table;
    width:100%;
    height: 50px;
    table-layout:fixed;
  }
  tr:nth-child(odd){
    background: var(--bgcolor-table);
  }
  tr:nth-child(even){
    background: var(--bgcolor-wall);
  }
  .select-tr,tr:hover{
    background: var(--bgcolor-hover) !important;
  }
  .invalid-tr{
    background: var(--color-warn) !important;
  }
  th,td{
    /* padding: 5px 15px; */
    border: 1px solid var(--border-table);
    text-align: center;
    outline: none;
    min-width: 30px;
  }
  th{
    font-size: var(--font-size-h2);
    color: var(--color-label);
    background-color: var(--bgcolor-th);
    position: relative;
  }
  th .arrow-icon{
    position: absolute;
    top: 24px;
    right: 5px;
  }
  td{
    position: relative;
    font-size: var(--font-size);
    color: var(--color-text);
    word-wrap: break-word;
    word-break: break-all;
  }
  .td-bgcolor1{
    background: var(--color-warn);
  }
  td div{
    font-size: inherit;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  td>div>span{
    margin: 0px 3px;
  }
  td img{
    width: 32px;
  }
  td .td-button{
    color: var(--color-hyper);
    cursor: pointer;
  }
  .multi-checkbox label{
    margin: 0px 5px;
  }
</style>