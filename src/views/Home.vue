<template>
  <div class="home">
    <banner/>
    <smallBanner/>
    <packageList/>
    <compare/>
    <contactInPage>
      <div id="contact_us" class="contact_title normal">告诉我们你的疑问</div>
    </contactInPage>
  </div>
</template>

<script>

import banner from 'components/banner/index.vue'
import smallBanner from 'components/smallBanner/smallBanner.vue'
import contactInPage from 'components/contact/contactInPage.vue'
import packageList from 'components/PackageList/index.vue'
import compare from 'components/compare/index.vue'

export default {
  name: 'home',
  components: {
    banner,
    smallBanner,
    contactInPage,
    packageList,
    compare
  }
}
</script>
<style lang='scss' scoped>
.home {
  margin-top: 66px;
}
</style>
