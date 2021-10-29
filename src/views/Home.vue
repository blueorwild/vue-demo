<template>
  <a-layout id="components-layout-demo-top-side-2" style="background: #fff">
    <a-layout-header class="header">
      <div class="logo">Vue Demo</div>
      <!--
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :style="{ lineHeight: '64px' }"
      >
      
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
      
      </a-menu>
      -->
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="selectedKeys"
          :default-open-keys="openKeys"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" />antd</span>
            <a-menu-item key="1" @click="jmpTo('/Text')" >
              Text
            </a-menu-item>
            <a-menu-item key="2" @click="jmpTo('/Table')">
              Table
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" />echarts</span>
            <a-menu-item key="5" @click="jmpTo('/Bar')">
              Bar
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification" />antv</span>
            <a-menu-item key="9" @click="jmpTo('/Graph')">
              Graph
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 24px">
        <a-layout-content>
          <div :style="{ background: '#fff', minHeight: '580px' }">
            <!--定义路由出口-->
            <router-view/>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data () {
    // for browser update
    var openKeys, selectedKeys;
    switch (this.$route.path) {
      case '/Text' : case '/Home':
        openKeys = ['sub1'];
        selectedKeys = ['1'];
        break;
      case '/Table':
        openKeys = ['sub1'];
        selectedKeys = ['2'];
        break;
      case '/Bar':
        openKeys = ['sub2'];
        selectedKeys = ['5'];
        break;
      case '/Graph':
        openKeys = ['sub3'];
        selectedKeys = ['9'];
        break;
    };
    return {
      collapsed: false,
      openKeys: openKeys,
      selectedKeys: selectedKeys
    };
  },
  methods: {
      jmpTo (route) {
          console.log(this.$route.path)
          if (this.$route.path !== route) {
            //获取路由对象并切换
            this.$router.push(route)
          }
      }
  }
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 150px;
  height: 32px;
  /* background: rgba(255, 255, 255, 0.2); */
  background: rgba(110, 190, 255, 0.2);
  margin: 16px 20px;
  padding: 0;

  line-height: 32px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;

  float: left;
}
#components-layout-demo-top-side-2 .header {
    height: 64px;
    padding: 0;
    line-height: 64px;
    background: #001529;
}
</style>

