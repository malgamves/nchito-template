<template>
  <c-box bg="white">
    <n-hero />
    <n-job-posts :data="jobs" />
  </c-box>
</template>

<script>
import { jobQuery } from '~/graphql/query'

export default {
  data () {
    return {
      jobs: [],
      query: ''
    }
  },
  apollo: {
    jobs: {
      query: jobQuery,
      /* variables () {
        return {
          Page: this.title
        }
      }, */
      prefetch: true
    }
  }
}
</script>
