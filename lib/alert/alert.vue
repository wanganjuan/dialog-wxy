<template>
  <div class="mask-black-dialog">
    <div class="m-alert">
      <div class="alert-hd">
        <h1 v-html="title" v-if="!showpic"></h1>
        <i class="close-icon" @click.stop="cancelAlert" v-if="!hideCancel"></i>
      </div>
      <div class="alert-bd">
        <div v-html="mes"></div>
      </div>
      <div class="alert-ft">
        <a href="javascript:;" class="alert-btn primary" @click.stop="closeAlert">{{button}}</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      title: String,
      mes: String,
      callback: Function,
      button: String,
      showpic: Boolean,
      hideCancel: Boolean
    }
  }
</script>

<style lang="less" scoped>

.mask-black-dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

  @keyframes myshow {
    from {
      transform: scale(0, 0);
    }
    to {
      transform: scale(1, 1);
    }
  }

  .m-alert {
    width: 80%;
    min-height: 400px;
    background-color: #fff;
    border-radius: 10px;
    font-size: 15px;
    animation: myshow 0.5s;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
  }

  .alert-hd {
    height: 80px;
    line-height: 80px;
    text-align: center;
    position: relative;
    h1 {
      font-size: 36px;
      /* px */
      font-weight: normal;
      color: #f0554b;
    }
    .close-icon {
      position: absolute;
      height: 36px;
      width: 36px;
      top: 20px;
      right: 25px;
      background: url("./close.png") no-repeat center center;
      background-size: 36px;
    }
  }

  .alert-bd {
    text-align: left;
    padding: 0 20px;
    font-size: 32px;
    /* px */
    color: #4f4f4f;
    word-break: break-all;
    flex: 1;
    align-items: center;
    display: flex;
    text-align: center;

    div {
      width: 100%;
    }
  }

  .alert-ft {
    border-radius: 0 0 12px 12px;
    position: relative;
    background-color: #f0554b;
    color: #fff;
    height: 100px;
    line-height: 100px;
    margin-top: 14px;
    font-size: 32px;
    /* px */
    display: flex;
    > a {
      position: relative;
      text-align: center;
      display: block;
      flex: 1;
      padding: 0 2px;
      &.alert-btn.default {
        color: #d93035;
      }
      &.alert-btn.primary {
        color: #fff;
      }
    }
  }

  .photo {
    width: 248px;
    height: 200px;
    position: absolute;
    top: -72px;
    left: 50%;
    margin-left: -124px;

    img {
      height: 100%;
    }
  }
</style>
