<template>
  <div class="edit-div" @dblclick="isEditChange">
    <textarea ref="textarea" v-if="isEdit" v-model="text" @blur="textBlur"></textarea>
    <div class="show-div" v-else>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'EditDiv',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      text: '',
      isEdit: false
    }
  },
  methods: {
    // 事件
    isEditChange(){
      this.isEdit = !this.isEdit
      this.$nextTick(() => {
        if(this.isEdit){ 
          this.initEdit()
        }
        else{
          this.removeEdit()
        }
      })
    },
    textBlur(){
      this.isEdit = false
      this.$nextTick(() => {
        this.removeEdit()
      })
    },
    // 方法
    initEdit(){
      this.text = this.message
      this.$refs.textarea.focus()
    },
    removeEdit(){
      this.$emit('edit-change', this.text)
    }
  }
}
</script>

<style scoped>
  .edit-div{
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: inherit;
  }
  .show-div{
    font-size: inherit;
  }
  textarea{
    font-size: inherit;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: none;
    outline: none;
    resize: none;
  }
</style>