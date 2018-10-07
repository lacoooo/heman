<template>
  <div id="app">
    <Navigation/>

    <router-view/>

    <!-- <copyrightindex v-if="$route.name==='/'" /> -->

    <copyrighthref v-if="showFooter"/>

    <!-- <bottomBar/> -->
<!-- --------------------------------------------- -->

    <toast/>

    <help></help>

  </div>
</template>

<script>

// import bottomBar from 'components/BottomBar/index.vue'
import Navigation from 'components/Navigation/Navigation.vue'
import toast from 'components/toast/index.vue'
import copyrighthref from 'components/Copyright/copyrighthref.vue'
import help from 'components/help/help.vue'

export default {
  name: 'app',
  data: () => ({

  }),
  methods: {
    getHelpQuery() {
      const query = this.$queryString.parse(location.search)
      if (!query['help'] || query['help'] == 'back') return
      const help = query['help'].split('~')
      this.$store.dispatch('helpShow', { current: { index: help[0], subIndex: help[1] } })
    }
  },
  created() {
    this.getHelpQuery()
  },
  mounted () {

  },
  watch: {

  },
  computed: {
    showFooter() {
      const n = this.$route.name
      if (n == 'home' || n == 'vip' || n == 'about' || n == 'me') return true
    }
  },
  components: {
    Navigation,
    toast,
    // bottomBar,
    copyrighthref,
    help,
  }
}
</script>

<style lang="scss" scoped>

</style>
