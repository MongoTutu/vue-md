<template>
    <div class="hello">
        <md-tabs class="md-accent" md-alignment="right">
            <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
            <md-tab id="tab-pages" md-label="Pages" to="/life"></md-tab>
            <md-tab id="tab-posts" md-label="Posts" to="/"></md-tab>
            <md-tab id="tab-favorites" md-label="Favorites" to="/life"></md-tab>
        </md-tabs>
        <tu-header msg="Hello" name="you"></tu-header>
        <h1>
            link to some where
        </h1>
    </div>
</template>

<script src="./home.js"></script>
<style lang="scss" scoped src="./home.scss"></style>
