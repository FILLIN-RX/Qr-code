<template>
    
        <button :class="{colors}" class="p-2   font-mono bg-blue-50 m-2 rounded-xl"> {{ content }}</button>
    
    
</template>
<script setup>


 const props =defineProps( {
    content : String,
    colors : ""
})

</script>