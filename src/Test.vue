<template>
  <div>
    {{ fo }}
  </div>
</template>

<script>
import * as _ from 'lodash'

export default {
  props: ['foo', 'bar'],
  data  () {
    return{
      test:'test',
      a: function(){
        return
      }
    }
  }
}
</script>