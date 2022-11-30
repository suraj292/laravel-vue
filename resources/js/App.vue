<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Post
                        </a>
                        <ul class="dropdown-menu">
                            <router-link class="dropdown-item" to="/post">Post All</router-link>
                            <router-link class="dropdown-item" to="/post/store">Post Create</router-link>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
