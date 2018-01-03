<template>
    <div id="app">
        <div class="page-container">
            <md-app>
                <md-app-toolbar class="md-primary">
                    <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                        <md-icon>menu</md-icon>
                    </md-button>
                    <span class="md-title">Material Demo</span>
                </md-app-toolbar>

                <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
                    <md-toolbar class="md-transparent" md-elevation="0">
                        <span>ZhangTutu</span>

                        <div class="md-toolbar-section-end">
                            <md-button class="md-icon-button md-dense" @click="toggleMenu">
                                <md-icon>keyboard_arrow_left</md-icon>
                            </md-button>
                        </div>
                    </md-toolbar>

                    <md-list>
                        <md-list-item @click="toggleMenu">
                            <md-icon>move_to_inbox</md-icon>
                            <span class="md-list-item-text">Inbox</span>
                        </md-list-item>

                        <md-list-item @click="toggleMenu">
                            <md-icon>send</md-icon>
                            <span class="md-list-item-text">Sent Mail</span>
                        </md-list-item>

                        <md-list-item @click="toggleMenu">
                            <md-icon>delete</md-icon>
                            <span class="md-list-item-text">Trash</span>
                        </md-list-item>

                        <md-list-item @click="toggleMenu">
                            <md-icon>error</md-icon>
                            <span class="md-list-item-text">Spam</span>
                        </md-list-item>
                    </md-list>
                </md-app-drawer>
            </md-app>
        </div>

        <transition :name="toPage">
            <router-view class="app-Page md-scrollbar"></router-view>
        </transition>

        <div class="phone-viewport">
            <md-bottom-bar class="md-accent">
                <md-bottom-bar-item @click="navTo('/home')" md-label="Home" md-icon="home"></md-bottom-bar-item>
                <md-bottom-bar-item @click="navTo('/about')" md-label="Posts" md-icon="send"></md-bottom-bar-item>
                <md-bottom-bar-item @click="navTo('/news')" md-label="Posts" md-icon="delete"></md-bottom-bar-item>
                <md-bottom-bar-item @click="navTo('/life')" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
            </md-bottom-bar>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        name: "app",
        data: function () {
            return {
                menuVisible: false,
                toPage: "slide-right"
            };
        },
        computed: {
            ...mapGetters({
                page: 'page'
            })
        },
        watch: {
            $route(to, from) {
                var nav = this.page;
                if(nav.length == 0){
                    this.pagePush(from.path);
                }
                if (nav[nav.length - 2] == to.path) {
                    this.toPage = "slide-left";
                    this.pagePop();
                } else {
                    this.toPage = "slide-right";
                    this.pagePush(to.path);
                }
            }
        },
        methods: {
            toggleMenu() {
                this.menuVisible = !this.menuVisible
            },
            navTo(link) {
                this.$router.push(link);
            },
            // ...mapGetters({
            //     page: 'page'
            // }),
            ...mapMutations({
                pagePush : 'pagePush',
                pagePop : 'pagePop'
            })
        }
    };
</script>

<style>
    .md-app {
        min-height: 350px;
        width: 100%;
        top: 0;
        bottom: 56px;
        position: absolute;
        border: 1px solid rgba(#000, .12);
    }

    .phone-viewport {
        width: 100%;
        height: 56px;
        display: inline-flex;
        align-items: flex-end;
        overflow: hidden;
        border: 1px solid rgba(#000, .26);
        background: rgba(#000, .06);
        position: fixed;
        bottom: 0;
        box-shadow: 0 -1px 6px 1px #EEE;
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }

    .app-Page {
        position: fixed;
        width: 100%;
        padding: 10px;
        left: 0px;
        top: 55px;
        bottom: 56px;
        background: #FFF;
        overflow: auto;
    }

    .slide-right-enter-active,
    .slide-left-enter-active,
    .slide-right-leave-active,
    .slide-left-leave-active {
        transition: left 0.5s;
    }

    .slide-right-enter,
    .slide-left-leave-to {
        left: 100%;
    }

    .slide-right-enter-to,
    .slide-left-enter-to {
        left: 0px;
    }

    .slide-right-leave,
    .slide-left-leave {
        left: 0px;
    }

    .slide-right-leave-to,
    .slide-left-enter {
        left: -100%;
    }
</style>