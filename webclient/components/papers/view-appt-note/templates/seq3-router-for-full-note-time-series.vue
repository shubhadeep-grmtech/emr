<template>
  <div>
    <contentDuringApptOfASingleCt :_apptId="_apptId" :_formDef="formDef"></contentDuringApptOfASingleCt>
  </div>
</template>

<script>
import contentDuringApptOfASingleCt from '@/components/papers/view-appt-note/templates/seq4-content-for-all-appts-of-a-single-ct.vue'
import allFormDefs from '@/components//non-temporal/form-manager/all-form-definations.js'

export default {
  components: {
    contentDuringApptOfASingleCt,
  },
  props: {
    _apptId: {
      type: Number,
      required: true,
    },
    _entity: {
      type: String,
    },
  },
  data: function () {
    return {
      formDef: {},
    }
  },
  created() {
    this.formDef = allFormDefs[this._entity]
  },
}
</script>
