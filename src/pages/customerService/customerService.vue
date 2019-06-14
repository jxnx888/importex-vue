<template>
    <div class="customerService">
      <contact-info></contact-info>
       <footerBar></footerBar>
    </div>
</template>

<script>
  import footerBar from '../../common/footer/footerBar'
  import ContactInfo from "./components/contactInfo";
    export default {
        name: "customerService",
      components:{
        ContactInfo,
        footerBar
      }
    }
</script>

<style scoped>

</style>
