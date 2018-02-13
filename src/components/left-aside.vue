<template lang="html">
    <div class="aside">
        <ul class="aside__menu">
            <li>
                <img src="../../static/img/home.png" alt="">
                <a href="#">Feed</a></li>
            <li>
                <img src="../../static/img/ask.png" alt="">
                <a href="#">Ask a Colleague</a></li>
            <li>
                <img src="../../static/img/companies.png" alt="">
                <a href="#">Companies</a></li>
            <li>
                <img src="../../static/img/service.png" alt="">
                <a href="#">Service Directory</a></li>
        </ul>
        <div class="adv__left">
            <h4>Advertisement</h4>
            <img src="../../static/img/adv-left.png" alt="">
            <p>Ads By Denteez.com</p>
        </div>
        <hr>
        <div class="featured-companies">
            <h4>Featured Companies</h4><span>See All</span>
            <div class="companies__list">
                <div class="company__item" v-for="company in featuredCompanies">
                    <div class="item__img">
                        <img :src="'../../static/img/companies/'+ company.img" alt="">
                    </div>
                    <div class="item__details">
                        <h5>{{company.name}}</h5>
                        <p>{{company.type}}</p>
                        <p>{{company.location}}</p>
                        <a href="#">Follow Now</a>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <span class="d-block">Danteez Copyright 2015</span>
        <a href="#">Terms of use</a> <a href="#">Privacy Policy</a>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      featuredCompanies: [{
          name: 'Company Name',
          type: 'Manufacturer',
          location: 'Belgrade, Serbia',
          img: '1.png'
        },
        {
          name: 'Company Name',
          type: 'Service Provider',
          location: 'New York, USA',
          img: '2.png'
        },
        {
          name: 'Company Name',
          type: 'Supplier',
          location: 'London, England',
          img: '3.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$prime: #87b448;
$prime-dark: #73993d;
$text: #59606b;
$second: #e0e2e6;
.aside {

    hr {
        margin: 13px 0;
    }
    & > span {
        color: #b7bfcd;
        font-family: ProximaReg;
        font-size: 12px;
        line-height: 23px;
    }
    & > a {
        width: 50%;
        color: #b7bfcd;
        font-family: ProximaReg;
        font-size: 12px;
        padding-right: 21px;
    }
}

.aside__menu {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    margin-bottom: 18px;
    li {
        border-bottom: 1px solid $second;
        padding-top: 12px;
        padding-bottom: 12px;
        a {
            color: #59606b;
            font-size: 16px;
            line-height: 26px;
            font-family: ProximaReg;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
        }
        img {
            margin-right: 25px;
            display: block;
            width: 24px;
            height: 24px;
            float: left;
            object-fit: contain;
            object-position: center;
        }
    }
}
.adv__left {
    h4 {
        font-family: ProximaReg;
        color: #7c8695;
        font-size: 14px;
        margin-bottom: 16px;
    }
    img {
        display: block;
        width: 100%;
    }
    p {
        font-size: 11px;
        font-family: ProximaReg;
        color: #7c8695;
        margin: 5px 0;
    }
}
.featured-companies {
    & > h4 {
        display: inline-block;
        width: 65%;
        font-family: ProximaReg;
        font-size: 14px;
        color: #7c8695;
        margin: 0;
        padding: 0;
    }
    & > span {
        display: inline-block;
        width: 34%;
        text-align: right;
        color: $text;
        font-size: 14px;
        font-family: ProximaReg;
    }
    .company__item {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        margin-top: 14px;
        .item__img {
            width: 80px;
        }
        .item__details {
            padding-left: 7px;
            font-family: ProximaReg;
            margin-bottom: 5px;
            padding-left: 10px;

            h5 {
                margin: 0;
                color: $text;
                font-size: 16px;
                line-height: 15px;
                font-weight: bold;

                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            p {
                color: #7c8695;
                margin: 0;
                font-size: 14px;
                line-height: 19px;
                margin-top: 2px;

                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            a {
                font-size: 12px;
                color: black;
                line-height: 16px;
                display: inline-block;
            }
        }
    }
}
</style>
