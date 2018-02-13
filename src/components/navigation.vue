<template lang="html">
<nav>
    <div class="container">
    <div class="nav__content">
        <div class="nav__item nav__logo">
            <router-link to="/">
                <img src="../../static/img/logo.png" alt="">
            </router-link>
        </div>
        <div class="nav__item nav__search">
            <input type="text" placeholder="Company name">
        </div>
        <div class="nav__item nav__notify">
            <ul>
                <li>
                    <img src="../../static/img/chat.png" alt="">
                </li>
                <li>
                    <img src="../../static/img/notifications.png" alt="">
                </li>
            </ul>
        </div>
        <div class="nav__item nav__profile">
            <div class="profile__wrapp">
                <div class="profile__photo">
                    <img src="../../static/img/profile.png" alt="">
                </div>
                <p class="profile__name">
                    <router-link to="/contacts">
                        <a href="#">Maximilian Beekeeper</a>
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</div>
</nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
$prime: #87b448;
$prime-dark: #73993d;
$text: #59606b;
$second: #e0e2e6;
nav {
    height: 66px;
    display: block;
    width: 100%;
    background-color: $prime;
    border-bottom: 2px solid #71973c;
    .nav__content {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        display: box;
        flex-wrap: nowrap;
        width: 100%;

    }
    .nav__item {
        width: 100%;
        height: 66px;
    }
    .nav__logo {
        height: 100%;
        align-self: center;
        width: auto;
        img {
            margin-bottom: 6px;
        }
    }
    .nav__search {
        padding-left: 30px;
        align-self: center;
        height: 34px;
        & > input {
            height: 34px;
            border: none;
            width: 100%;
            background-color: $prime-dark;
            border-radius: 2px;
            line-height: 34px;
            vertical-align: middle;
            background-image: url("../../static/img/search.svg");
            background-repeat: no-repeat;
            background-size: 16px;
            background-position: 10px;
            padding-left: 35px;
            color: white;
            &::placeholder {
                color: white;
                opacity: 1;
                font-family: ProximaReg;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
    .nav__notify {
        height: 100%;
        align-self: center;
        width: auto;
        padding-right: 21px;
        padding-left: 21px;
        ul {
            text-align: right;
            white-space: nowrap;
            display: block;
            text-align: center;
            padding: 0;
            margin: 0;

            list-style: none;
            padding-left: 10px;
            li {
                display: inline-block;
                padding-left: 10px;
                padding-right: 10px;
                cursor: pointer;
                img[src*='chat'] {
                    width: 26px;
                }
                img[src*='notifications'] {
                    width: 24px;
                }
            }
        }
    }
    .nav__profile {
        width: auto;
        .profile__wrapp {
            white-space: nowrap;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            display: box;
            flex-wrap: nowrap;
            flex-direction: row;
            height: 100%;
            align-items: center;
            justify-content: right;
            .profile__photo {
                img {
                    width: 32px;
                }
            }
            .profile__name {
                a {
                    color: white;
                    width: 100%;
                    overflow: hidden;

                }
            }
            p {
                width: auto;
                padding-left: 11px;
                line-height: 32px;
                font-size: 16px;
                font-family: ProximaReg;
                margin: 0;
                color: white;
            }
        }
    }

}
</style>
