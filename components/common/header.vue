<template>
  <div class="header">
    <div class="map-title-space">
      <div class="map-time">
        <span>{{day}}</span>
        <span style="color: #00ceff">{{time}}</span>
      </div>
      <div class="map-time user">
        <span>欢迎您 :</span>
        <span style="color: #00ceff">{{user}}</span>
      </div>
    </div>
    <div class="map-title">
      <div class="title-left"></div>
      <div class="title-font">自然资源三维立体时空信息平台（西藏）</div>
      <div class="title-right"></div>
    </div>
    <div class="map-title-space map-title-right">
      <nuxt-link class="wrapper" to="/actions/model1">综合管理</nuxt-link>
      <nuxt-link class="wrapper" to="/actions/model2">成果资源</nuxt-link>
      <nuxt-link class="wrapper" to="/actions/model3">业务分析</nuxt-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: '测绘二院',
        day: '',
        time: '',
        activeTag: 0
      };
    },
    mounted() {
      setInterval(() => {
        this.createTime();
      }, 1000);
      window.addEventListener(
        'hashchange',
        () => {
          let currentPath = window.location.hash.slice(1);
          this.createActiveTag(currentPath);
        },
        false
      );
      this.createActiveTag(this.$route.name);
    },
    methods: {
      createTime() {
        let date = new Date();
        this.day = `${date.getFullYear()}年${('0' + (date.getMonth() + 1)).slice(-2)}月${('0' + date.getDate()).slice(-2)}日`;
        this.time = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
      },
      linkTo(name) {
        this.createActiveTag(name);
        this.$router.push({
          name: name,
          params: {
            dzData: this.dzData
          }
        });
      },
      createActiveTag(name) {
        /*if (name === '/publish') {
          this.activeTag = 0;
        } else if (name === '/analyze') {
          this.activeTag = 2;
        } else {
          this.activeTag = 1;
        }*/
      }
    }
  };
</script>

<!--suppress CssUnknownTarget -->
<style scoped>
  .header {
    position: relative;
    width: 100%;
    height: 66px;
    display: flex;
    z-index: 999;
    justify-content: space-between;
    background: rgba(0, 16, 47, 0.7);
  }

  .header > div {
    height: 80px;
  }

  .header .map-title {
    width: 70%;
  }

  .title-font {
    background: url("~assets/img/header/titlebg.png") no-repeat center center;
    background-size: 100% 90%;
    width: 60%;
    margin: 0 auto;
    text-align: center;
    line-height: 66px;
    font-size: 25px;
    color: #fff;
  }

  .title-left {
    background: url("~assets/img/header/lefttitle.png") no-repeat center center;
    margin-top: 20px;
    width: 220px;
    height: 28px;
    float: left;
  }

  .title-right {
    background: url("~assets/img/header/righttitle.png") no-repeat center center;
    width: 250px;
    height: 28px;
    float: right;
    margin-top: -48px;
  }

  .header .map-title-space {
    width: 30%;
    height: 60px;
    position: relative;
    top: 10px;
  }

  .header .map-title-space .map-time {
    position: absolute;
    left: 10px;
    top: 10px;
    color: white;
    text-align: left;
  }

  .header .map-title-space .user {
    left: 238px;
  }

  .header .map-title-right .wrapper {
    background: url("~assets/img/header/btn.png") no-repeat center center;
    width: 112px;
    height: 27px;
    text-align: center;
    text-decoration: none;
    float: left;
    line-height: 26px;
    margin-top: 10px;
    color: #ccc;
    cursor: pointer;
  }

  .header .map-title-right .wrapper span {
    font-size: 16px;
    color: rgb(247, 234, 234);
    text-align: center;
    line-height: 24px;
  }

  .header .map-title-right .wrapper .active-class {
    color: rgb(0, 254, 235);
  }

  button.wrapper {
    font-size: 16px;
    color: rgb(247, 234, 234);
    text-align: center;
    line-height: 24px;
    border: 0;
  }
</style>
