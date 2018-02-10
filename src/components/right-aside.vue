<template lang="html">
<div class="right-aside">
    <div class="people-suggest">
        <h5>People you may know</h5>
        <a href="#">See All</a>
        <div class="suggest__list">
            <div class="suggest__item" v-for="human in peopleSuggest">
                <h5>{{human.name}}</h5>
                <div class="f-container">
                    <div class="suggest__photo">
                        <img :src="'../../static/img/users/' + human.photo" alt="">
                    </div>
                    <div class="suggest__details">
                        <p>{{human.role}}</p>
                        <p class="details__loc">{{human.location}}</p>
                        <a href="#">Add friend</a>
                    </div>
                </div>
            </div>
            <!-- <div class="suggest__item">
                <h5>Mary Carpenter</h5>
                <div class="f-container">
                    <div class="suggest__photo">
                        <img src="../../static/img/users/2.png" alt="">
                    </div>
                    <div class="suggest__details">
                        <p>Dentist (Practice Owner)</p>
                        <p class="details__loc">London, England</p>
                        <a href="#">Add friend</a>
                    </div>
                </div>
            </div>
            <div class="suggest__item">
                <h5>Danielle Salazar</h5>
                <div class="f-container">
                    <div class="suggest__photo">
                        <img src="../../static/img/users/3.png" alt="">
                    </div>
                    <div class="suggest__details">
                        <p>Dentist (Practice Owner)</p>
                        <p class="details__loc">Belgrade, Serbia</p>
                        <a href="#">Add friend</a>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
    <hr>
    <div class="featured-prod">
        <h5>Featured products</h5>
        <a href="#">See All</a>
        <div class="products__list">
            <div class="product__item" v-for="product in productsList">
                <h5>{{product.title}}</h5>
                <div class="f-container">
                    <div class="product__photo">
                        <img :src="'../../static/img/prod/' + product.img" alt="">
                    </div>
                    <div class="product__details">
                        <p>{{product.description}}</p>
                    </div>
                </div>
            </div>
            <!-- <div class="product__item">
                <h5>Product name</h5>
                <div class="f-container">
                    <div class="product__photo">
                        <img src="../../static/img/prod/2.png" alt="">
                    </div>
                    <div class="product__details">
                        <p>Product Short Description. The quick brown fox jumps over the lazy dog.</p>
                    </div>
                </div>
            </div> -->
            <hr>
            <div class="adv-right">
                <h4>Advertisement</h4>
                <img src="../../static/img/adv-right.png" alt="">
                <p>Ads By Denteez.com</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      peopleSuggest: [{
          name: 'Dennis Adams',
          role: '(Dentist) Practice Owner',
          location: 'London, England',
          photo: '1.png'
        },
        {
          name: 'Mary Carpenter',
          role: '(Dentist) Practice Owner',
          location: 'Belgrade, Serbia',
          photo: '2.png'
        },
        {
          name: 'Dennis Adams',
          role: '(Dentist) Practice Owner',
          location: 'Paris, France',
          photo: '3.png'
        }
      ],
      productsList: [{
          title: 'Product Name',
          description: 'Product Short Description. The quick brown fox jumps over the lazy dog',
          img: '1.png'
        },
        {
          title: 'Product Name',
          description: 'Product Short Description. The quick brown fox jumps over the lazy dog',
          img: '2.png'
        }
      ]
    };
  }
}
</script>

<style lang="scss">
$prime: #87b448;
$prime-dark: #73993d;
$text: #59606b;
$second: #e0e2e6;

.f-container {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.people-suggest {
    padding-top: 21px;
    & > h5 {
        color: #7c8695;
        font-family: ProximaReg;
        font-size: 14px;
        display: inline;
        width: 65%;
        margin-bottom: 28px;
    }
    & > a {
        color: $text;
        font-family: ProximaReg;
        font-size: 14px;
        display: inline-block;
        width: 33%;
        text-align: right;
        margin-bottom: 10px;
    }
    .suggest__item {
        position: relative;
        margin-bottom: 18px;

        h5 {
            width: 100%;
            font-family: ProximaReg;
            font-size: 16px;
            color: $text;
            margin-bottom: 4px;
        }
        .suggest__photo {
            width: 97px;
            img {
                width: 100%;
            }
        }
        .suggest__details {
            height: 100%;
            align-self: stretch;
            padding-left: 8px;
            font-family: ProximaReg;
            p {
                color: #7c8695;
                font-size: 14px;
                margin: 0;
                line-height: 18px;
                margin-bottom: -1px;
            }
            .details__loc {
                margin-top: 3px;
            }
            a {
                color: $text;
                font-size: 12px;
                display: inline-block;
                margin-top: 1px;
                font-weight: bold;
            }
        }
    }
}

.featured-prod {
    & > h5 {
        color: #7c8695;
        font-family: ProximaReg;
        font-size: 14px;
        display: inline;
        width: 65%;
        margin-bottom: 21px;
    }
    & > a {
        color: $text;
        font-family: ProximaReg;
        font-size: 14px;
        display: inline-block;
        width: 33%;
        text-align: right;
        margin-bottom: 14px;
    }
    .product__item {
        margin-bottom: 20px;
        h5 {
            width: 100%;
            font-family: ProximaReg;
            font-size: 16px;
            color: $text;
            margin-bottom: 5px;
            line-height: 15px;
            font-weight: bold;
        }
        .product__photo {
            min-width: 80px;
            width: 80px;
            img {
                display: block;
                width: 100%;
            }
        }
        .product__details {
            height: 100%;
            padding-left: 7px;
            font-family: ProximaReg;
            p {
                color: #7c8695;
                font-size: 14px;
                margin: 0;
                width: 90%;
                line-height: 16px;
            }
        }
    }
}

.adv-right {
    h4 {
        font-family: ProximaReg;
        color: #7c8695;
        font-size: 14px;
        margin-top: 21px;
        margin-bottom: 15px;
    }
    img {
        display: block;
        width: 100%;
    }
    p {
        font-size: 11px;
        font-family: ProximaReg;
        color: #7c8695;
        margin: 7px 0;
    }
}
</style>
