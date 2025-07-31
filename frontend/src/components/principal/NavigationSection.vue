<template>
    <section>
        <nav class="bg-black h-14 fixed w-full  text-white">
            <div class="flex max-w-7xl mx-auto justify-between">
                <div class=" space-x-6 items-center flex">
                    <div class="font-bold ">
                        QrCode
                    </div>
                    <div class="grid lg:grid-cols-3 space-x-1">
                        <router-link >Catalog</router-link>
                        <router-link >Pricing</router-link>
                        <router-link >For bussiness</router-link>

                    </div>
                </div>
                <div class="items-end">
                   <ButtonPro content="sign in" :colors="blue" />
                    <ButtonPro content="start now" />
                </div>
            </div>
        </nav>
    </section>

</template>
<script setup>
import ButtonPro from './ButtonPro.vue';
</script>