<template>
  <div class="header-wrapper">
    <el-menu mode="horizontal" @select="handleSelect">
      <el-submenu v-for="(subMenu, index) in menuList" :key="index" :index="subMenu.menuId">
        <template slot="title">
          {{subMenu.title}}
        </template>
        <el-menu-item v-for="(menuItem, i) in subMenu.children" :key="i" :index="menuItem.menuId">
          {{menuItem.title}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="logo">
      <a class="navbar-brand" href="http://www.windit.com.cn/" target="_blank">
        <img src="~assets/img/image/logo.png" alt="logo">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      menuList: [
        {
          menuId: 'set',
          title: '设置',
          children: [
            {
              menuId: 'dguSet',
              title: 'DGU设置',
            },
            {
              menuId: 'dguState',
              title: 'DGU状态',
            },
            {
              menuId: 'boltSet',
              title: '螺栓设置',
            }
          ]
        },
        {
          menuId: 'view',
          title: '视图',
          children: [
            {
              menuId: 'customSet',
              title: '自定义设置',
            },
            {
              menuId: 'wave',
              title: '波形分析',
            }
          ]
        },
        {
          menuId: 'help',
          title: '帮助',
          children: [
            {
              menuId: 'version',
              title: '版本信息',
            },
            {
              menuId: 'contact',
              title: '联系我们',
            },
            {
              menuId: 'helpDoc',
              title: '帮助文档',
            }
          ]
        },
      ],
    }
  },
  mounted() {
    
  },
  methods: {
    handleSelect(key, keyPath) {
      if(key === 'helpDoc') {
        alert('下载后台的帮助文档');
      }
      else if(key === 'dguState') {
        const router_test = this.$router.resolve({
            name: "set/dguState",
        });
        console.log(router_test);
        window.open(router_test.href+router_test.location.name, '_blank')
        console.log('Dgu状态');
      }
      else {
        const path = '/' + keyPath.join('/')
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-wrapper {
    height: 60px;
    display: flex;
    justify-content: space-between;

    .logo {
      img {
        width: auto;
        height: 100%;
      }
    }
  }
</style>