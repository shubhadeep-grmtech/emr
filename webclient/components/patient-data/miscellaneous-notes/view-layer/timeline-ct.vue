<!-- Reference implementation -->
<template>
  <timeLineView :_formDef="formDef"></timeLineView>
</template>

<script>
import timeLineView from '@/components//papers/view-appt-note/templates/generic-timeline-structure.vue'
import { miscellaneousNotesFormDef } from '@/components/patient-data/miscellaneous-notes/db/client-side/structure/miscellaneous-notes-of-a-patient-table.js'

export default {
  components: { timeLineView },
  data: function () {
    return {
      formDef: miscellaneousNotesFormDef,
    }
  },
}
</script>
