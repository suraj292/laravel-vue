<template>
    <div>
        <ol>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="about">About</router-link>
            </li>
            <li>
                <router-link to="contact">Contact</router-link>
            </li>
        </ol>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
