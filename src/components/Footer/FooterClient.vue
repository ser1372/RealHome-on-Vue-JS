<template>
<div class="col">
        <h3 class="footer__title">For client</h3>
        <ul class="footer__list footer__list_capitalize">
            <li v-for = "({name,path}, i) in footerMenuClient" :key = "i">
            <router-link :to = "path" class="footer__link"> {{ name }}</router-link>
            </li>
        </ul>
        </div>
</template>

<script>
export default{
    props:{
        footerMenuClient:{
            type: Array,
            required: true,
        },
    },
}
</script>