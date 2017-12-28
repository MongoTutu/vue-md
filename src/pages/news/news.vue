<template>
    <div>
        <md-dialog-alert :md-active.sync="first" md-content="Your post has been deleted!" md-confirm-text="Cool!" />
    
        <md-dialog-alert :md-active.sync="second" md-title="Post created!" md-content="Your post <strong>Material Design is awesome</strong> has been created."
        />
    
        <md-button class="md-accent md-raised" @click="first = true">Alert</md-button>
        <md-button class="md-primary md-raised" @click="second = true">Alert</md-button>
        <md-button class="md-primary md-raised" @click="add">addCount</md-button>
        <md-button class="md-primary md-raised" @click="hello">hello</md-button>
        1 {{$store.state.name}} {{ count }}
        <div>
            {{$store.state.page}}
        </div>
    </div>
</template>

<script src="./home.js"></script>
<style lang="scss" scoped src="./home.scss"></style>
