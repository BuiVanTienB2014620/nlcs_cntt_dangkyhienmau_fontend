<script>
import AFooter from "@/components/AFooter.vue";
import AHeader from "@/components/AHeader.vue";

export default {
  
    components: {
        
        AHeader,
      
        AFooter,
    },



};
</script>


<template>
    <div >
        <AHeader />
      
        
            <router-view />
       
        <AFooter />
    </div>
</template>
<style>
.page {
      max-width: 400px;
      margin: auto;
}
</style>