<template>
<div id="index-page">
  <navigation></navigation>
  <div class="container">
    <div class="row">
      <div class="col-md-3 l-aside">
        <left-aside></left-aside>
      </div>
      <div class="col main-content">
        <service-directory></service-directory>
      </div>
      <div class="col-md-3 r-aside">
        <right-aside></right-aside>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import navigation from '@/components/navigation'
import leftAside from '@/components/left-aside'
import rightAside from '@/components/right-aside'
import serviceDirectory from '@/components/service-directory'


export default {
  data() {
    return {}
  },
  components: {
    'navigation': navigation,
    'left-aside': leftAside,
    'right-aside': rightAside,
    'service-directory': serviceDirectory
  }
}
</script>

<style lang="scss">
,
.l-aside {
    flex: 0 0 240px;
    max-width: 26%;
}
.r-aside {
    flex: 0 0 240px;
    max-width: 26%;
}

.main-content {}

.f-container {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
</style>
