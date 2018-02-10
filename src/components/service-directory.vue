<template lang="html">
<div class="service">
    <div class="service__head">
        <div class="row align-items-center">
            <div class="col">
                <h2>Service Directory</h2>
            </div>
            <div class="col">
                <button>Add New Service</button>
            </div>
        </div>
    </div>
    <div class="service__list">
        <img src="img/loader.svg" alt="" class="loader">
        <div class="row">
<!--                            gen cats here-->
            <div class="col-md-6 col-lg-4" v-for="service in serviceList" :key="service.id">
                <div class="service__item">
                    <img :src="service.icon" alt="">
                    <h5>{{service.title}}</h5>
                </div>
            </div>
        </div>
    </div>
    <modal height="auto" name="error-modal">
      <h3>{{errors[0] ? errors[0].code : null}}</h3>
      <p>{{errors[0] ? errors[0].status : null}}</p>
    </modal>
</div>
</template>

<script>
import Vue from 'vue'
import VR from 'vue-resource'
import VModal from 'vue-js-modal'

Vue.use(VR);
Vue.use(VModal);

export default {
  data: function() {
    return {
      serviceList: [],
      fetchUrl: 'http://504080.com/api/v1/services/categories',
      authToken: 'a178410d7320829a8375de502368ef3e5303a114',
      errors: []
    };
  },
  methods: {
    fetchServices: function() {
      this.$http.get(this.fetchUrl, {
        headers: {
          'authorization': this.authToken
        }
      }).then(function(response) {
        console.log(response);
        if (response.status === 200) {
          this.serviceList = response.body.data
        }
      }, function(err) {
        if (err.status === 401) {
          this.errors.push({
            code: 401,
            status: 'Unauthorized - Access token is missing or expired. Please login or signup to use our service'
          })
          this.showModal();
        } else if (err.status === 500) {
          this.errors.push({
            code: 500,
            status: 'Server error - Something happens on serverside. Please contact administrator or try again later'
          })
          this.showModal();
        }
      });
    },
    showModal () {
     this.$modal.show('error-modal');
     var body = document.querySelector('body');
   },
   hideModal () {
     this.$modal.hide('error-modal');
   }
  },
  created: function() {
    this.fetchServices()
  }
}
</script>

<style lang="scss">
$prime: #87b448;
$prime-dark: #73993d;
$text: #59606b;
$second: #e0e2e6;

.v--modal{
  padding: 28px;
  text-align: center;
  h3{
    font-size: 5rem;
    font-family: ProximaLight;
    color: $prime;
    margin-top: 0;
    margin-bottom: 35px;
  }
  p{
    color: #aaa;
    font-family: ProximaReg;
    font-size: 1.2rem;
    margin: 0;
  }
}

.v--modal-overlay{
  background: rgba(0, 0, 0, 0.5);
}

.service {
    .service__head {
        padding-top: 9px;
        width: 100%;
        h2 {
            font-family: ProximaReg;
            font-size: 30px;
            margin: 0;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        button {
            white-space: nowrap;
            height: 30px;
            border: none;
            background-color: $prime;
            border-radius: 5px;
            color: white;
            font-size: 14px;
            font-family: ProximaReg;
            display: block;
            margin-left: auto;
            margin-right: 0;
            cursor: pointer;
            padding-left: 21px;
            padding-right: 21px;
        }
    }
}

.service__list {
  margin-top: 10px;
    .service__item {
        margin-bottom: 35px;
        img {
            border: 1px solid $second;
            display: block;
            width: 100%;
            padding: 21px;
            margin: 0 auto 18px;
            transition: background ease-in 0.2s;
            cursor: pointer;

        }
        h5 {
            font-family: ProximaReg;
            font-size: 14px;
            color: $text;
            font-weight: bold;
            text-align: center;
            transition: color ease 0.2s;
        }
        &:hover {
            img {
                background-color: #f4f7fb;
            }
            h5 {
                color: $prime;
            }
        }
    }
}
</style>
