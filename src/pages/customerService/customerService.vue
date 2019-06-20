<template>
    <div class="customerService">
      <top-nav></top-nav>
      <contact-info></contact-info>
       <footerBar></footerBar>
    </div>
</template>

<script>
  import footerBar from '../../common/footer/footerBar'
  import ContactInfo from "./components/contactInfo";
  import TopNav from "./components/topNav";

  export default {
        name: "customerService",
      components:{
        TopNav,
        ContactInfo,
        footerBar
      }
    }
</script>

<style scoped>

</style>
