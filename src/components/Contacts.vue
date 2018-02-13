<template>
<div id="contacts-page">
    <div class="contacts__head">
        <div class="row">
            <div class="col">
                <a href="index.html"><img class="head__logo" src="img/logo.png" alt=""></a>
            </div>
            <div class="col">
                <button class="head__btn">Log In Now</button>
            </div>
        </div>
        <div class="head__text">
            <h2>Home of Dentistry</h2>
            <p>Denteez was created by dentists for dentistry in order make the life of everyone involved in dentistry easier.</p>
        </div>
    </div>
    <section class="form-area">
        <form enctype="multipart/form-data" action="http://504080.com/api/v1/support" method="post">
            <div class="form-wrapp">
                <label for="">Enquiry Type *</label>
                <select @change="watchSelect()" name="enquiry_type" id="">
          <option v-for="type in enqTypes" :value="type.name">{{type.name}}</option>
        </select>
                <input class="detail_input" placeholder="Other" name="other-details" type="text">
                <div class="row">
                    <div class="col">
                        <label for="">Name</label>
                        <input required name="user_name" type="text" placeholder="Dentist">
                    </div>
                    <div class="col">
                        <label for="">Email *</label>
                        <input name="email" type="email" placeholder="rachelm@gmail.com">
                    </div>
                </div>
                <label for="">Subject *</label>
                <input name="subject" type="text">
                <div class="textarea-labels">
                    <label for="">Description *</label>
                    <label id="content-counter" for=""><span>{{taLength}}</span>/1000</label>
                </div>
                <textarea v-model="textareaContent" maxlength="1000" pattern="[A-Za-zА-Яа-яЁё]{1000}" name="description" id="" rows="7"></textarea>
                <div class="drop-photo-area">
                    <h5>Add photo</h5>
                    <p>Minimum size of 300x300 jpeg ipg png 5mb</p>
                    <input @change="imgValid()" accept="image/jpeg,image/png" type="file" name="file" class="img-input" />
                </div>
                <img id="upload-preview" src="" alt="">
            </div>
            <button type="submit" class="sbmt-btn">Submit</button>
        </form>
    </section>
</div>
</template>

<script>
import Vue from 'vue'
import VR from 'vue-resource'
import $ from 'jquery'
Vue.use(VR);

export default {
    data() {
        return {
            enqTypesFetchUrl: 'http://504080.com/api/v1/directories/enquiry-types',
            enqTypes: [],
            textareaContent: '',
            sendDataUrl: 'http://504080.com/api/v1/support'
        }
    },
    methods: {
        fetchEnqTypes() {
            this.$http.get(this.enqTypesFetchUrl).then(function(response) {
                this.enqTypes = response.body.data;
            }, function(err) {
                console.log(err);
            })
        },
        watchSelect() {
            if ($('select').val() == 'Other') {
                $('.detail_input').slideDown(200)
            } else {
                $('.detail_input').slideUp(200)
            }
        },
        imgValid() {
            var input = $('.img-input')[0];
            if (input.files && input.files[0]) {
                if (input.files[0].type.match('image.*')) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        if (e.total < 5242880) {
                            $('#upload-preview').attr('src', e.target.result);
                            $('.drop-photo-area').hide()
                        } else {
                            console.log('Файл не должен весить больше 5мб');
                        }
                    }
                    reader.readAsDataURL(input.files[0]);
                } else {
                    console.log('К загрузке доступно только изображение');
                }
            } else {
                console.log('Загрузка отменена');
            }
        },
    },
    created: function() {
        this.fetchEnqTypes();
    },
    computed: {
        taLength() {
            return this.textareaContent.length;
        }
    }
}
</script>

<style lang="scss">
$prime: #87b448;
$prime-dark: #73993d;
$text: #59606b;
$second: #e0e2e6;

.contacts__head {
    position: relative;
    z-index: 2;
    height: 65vh;
    width: 100%;
    position: relative;
    font-family: ProximaLight;
    background-image: url("../../static/img/contacts_header.png");
    background-position: center;
    background-size: cover;
    .head__logo {
        display: block;
        margin-left: 50px;
        margin-top: 40px;
        margin-right: auto;
    }
    .head__btn {
        display: block;
        margin-left: auto;
        margin-right: 50px;
        margin-top: 40px;
        background-color: $prime;
        border-radius: 4px;
        border: none;
        color: white;
        padding: 7px 14px;
    }
    .head__text {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        h2 {
            font-size: 48px;
            margin-bottom: 21px;
        }
        p {
            width: 25%;
            margin: 0 auto;
            font-size: 20px;
        }
    }
}

.form-area {
    background-image: url("../../static/img/bg.png");
    background-position: center;
    background-size: cover;
    padding-bottom: 100px;
    .form-wrapp {
        position: relative;
        z-index: 5;
        display: block;
        max-width: 970px;
        width: 100%;
        margin: 0 auto;
        background-color: white;
        border-radius: 5px;
        margin-top: -100px;
        padding: 20px;
        border: 1px solid #dbdbdb;
        .detail_input {
            display: none;
        }
        select {
            display: block;
            width: 100%;
            margin-bottom: 28px;
            border: none;
            border-radius: 4px;
            padding: 7px 14px;
            height: 50px;
            line-height: 50;
            border: 1px solid #dbdbdb;
        }
        label {
            display: block;
            font-family: ProximaReg;
            font-size: 16px;
            color: $text;
        }
        input {
            height: 50px;
            line-height: 50px;
            display: block;
            width: 100%;
            border-radius: 5px;
            border: 1px solid #dbdbdb;
            padding: 7px 14px;
            margin-bottom: 21px;
        }
        .textarea-labels {
            label {
                display: inline-block;
                width: 49%;
                &:last-child {
                    text-align: right;
                }
            }
        }
        textarea {
            border-radius: 3px;
            background-color: white;
            display: block;
            width: 100%;
            border-radius: 3px;
            border: 1px solid #dbdbdb;
            padding: 7px 14px;
            margin-bottom: 21px;
        }
        .drop-photo-area {
            display: inline-block;
            background-color: #f7f7f7;
            width: 200px;
            height: 200px;
            padding: 21px;
            text-align: center;
            border-radius: 5px;
            border: 1px solid #dbdbdb;
            font-family: ProximaReg;
            padding-top: 40px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        #upload-preview {
            object-fit: contain;
            object-position: center;
            height: 200px;
            width: 200px;
        }
    }
    .sbmt-btn {
        display: block;
        height: 50px;
        line-height: 50px;
        background-color: $prime;
        color: white;
        border: none;
        border-radius: 5px;
        width: 970px;
        margin-top: 21px;
        margin-left: auto;
        margin-right: auto;
        font-family: ProximaReg;
        font-size: 16px;
    }
}

.loaded-img {
    height: 200px;
    width: 200px;
    object-fit: contain;
    object-position: center;
    border-radius: 5px;
}

.img-input {
    position: absolute;
    display: block;
    width: 200px;
    height: 200px !important;
    top: 0;
    left: 0;
    padding: 0 !important;
    opacity: 0;
    cursor: pointer;
}

.contacts__about {
    padding: 100px 50px;
    h2 {
        font-family: ProximaLight;
        text-align: center;
        margin-bottom: 50px;
    }
    p {
        font-family: ProximaLight;
        width: 80%;
        margin: 0 auto;
        font-size: 16px;
    }
}

.contacts__footer {
    padding: 30px 0;
    font-family: ProximaReg;
    font-size: 12px;
    border-top: 1px solid #dbdbdb;
    color: #b7bfcd;
    h5 {
        font-family: ProximaReg;
        font-size: 12px;
        margin: 0 0 0 28px;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: block;
        text-align: right;
        li {
            display: inline-block;
            margin-right: 28px;
            a {
                color: #b7bfcd;
            }
        }
    }
}
</style>
