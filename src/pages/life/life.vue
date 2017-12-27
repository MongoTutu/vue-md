<template>
    <div class="lift">
        <h1 @click="con()">{{ msg }}</h1>
        <h2>{{ title }}</h2>
        <input type="text" v-model="title">
    </div>
</template>

<script src="./life.js"></script>
<style scoped src="./life.scss"></style>
