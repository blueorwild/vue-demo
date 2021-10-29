<template>
  <div>
    <div :style="{ minHeight: '30px', background: '#f0f2f5'}">
      <a-breadcrumb>
        <a-breadcrumb-item>antd</a-breadcrumb-item>
        <a-breadcrumb-item>Text</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div :style="{ margin: '24px', background: '#fff'}">
      <h1>Hello world</h1>
    </div>
    <div id="maliao"></div>
  </div>
</template>

<style>
#maliao {
    /* left: 17.5%;
    top: 10%; */
    width: 320px;
    height: 180px; 
    margin-left: 20px;
    /* position: absolute; */
    /* background-color: aqua; */
    background: url(../assets/maliao.jpg) no-repeat;
    background-size: 100%;
    /* width: 100%;
    height: 56.25vw;
    padding: 0;
    margin: 0; */
}
</style>
