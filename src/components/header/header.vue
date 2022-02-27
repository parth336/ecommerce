<template>
    <div class="row">
        <div class="offset-3 col-9">
            <nav class="navbar fixed-top navbar-light bg-light" style="z-index:2">
                <div class="container-fluid">
                    <a class="navbar-brand" style="padding-left:11rem"><i class="fas fa-user-circle"></i> {{user.username}}</a>
                    <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-info" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    props: ["user"]
}
</script>