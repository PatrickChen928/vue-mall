<template>
  <div class="w">
    <div class="loading-wrapper" v-if="waiting">
      <div class="loading">
        <Spin>
          <Icon type="ios-loading" size=36 class="demo-spin-icon-load"></Icon>
          <div class="text">正在等待支付结果，请勿重复支付</div>
        </Spin>
      </div>
    </div>
    <div class="success_wrapper" v-else>
      <y-shelf title="支付成功" style="text-align: center">
        <div slot="content" class="content">
          <p>恭喜你支付成功，总共花费 <span class="price"><em style="font-size: 18px">¥</em>{{price}}</span> 元</p>
          <div style="margin-top: 20px;">
            <router-link to="/user">
              <y-button text="查看订单" style="width: 150px;height: 50px;line-height: 48px;font-size: 20px"
                        classStyle="main-btn"></y-button>

            </router-link>
            <router-link to="/home">
              <y-button text="继续选购" style="width: 150px;height: 50px;line-height: 48px;font-size: 20px"
                        classStyle="main-btn"></y-button>

            </router-link>
          </div>
        </div>
      </y-shelf>
    </div>
  </div>
</template>
<script>
  import YShelf from '/components/shelf'
  import YButton from '/components/YButton'
  export default {
    data () {
      return {
        price: 10,
        waiting: true
      }
    },
    components: {
      YShelf,
      YButton
    },
    mounted () {
      this.price = this.$route.query.price
      setTimeout(() => {
        this.waiting = false;
      }, 2000)
    }
  }
</script>
<style lang="scss" scoped>
  .content {
    padding: 150px 0;
    font-size: 30px;
  }
  .loading-wrapper {
    position: relative;
    height: 200px;
  }
  .loading {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    text-align: center;
    .text {
      margin-top: 20px;
      font-size: 24px;
    }
    .demo-spin-icon-load{
      animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
      from { transform: rotate(0deg);}
      50%  { transform: rotate(180deg);}
      to   { transform: rotate(360deg);}
    }
    .loader {
      width: 100px;
      height: 100px;
    }
  }
  .success_wrapper {
    animation: success_ani 1s;
    @keyframes success_ani {
      from { transform: scale(0)}
      to   { transform: scale(1)}
    }
  }
  .btn {

  }
   span.price {
    color: #d44d44;
    font-weight: 700;
    line-height: 20px;
    text-align: right;
  }
</style>
