<template>
  <q-dialog
ref="dialogRef"
            persistent
            @hide="onDialogHide">
    <q-card>
      <q-card-section>
        <div class="text-h6">Alert</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate
        voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam
        exercitationem aut, natus minima, porro labore.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="OK" color="primary"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>


<script setup lang="ts">

import {useDialogPluginComponent} from 'quasar';

defineEmits([...useDialogPluginComponent.emits])

const {dialogRef, onDialogHide, onDialogOK} = useDialogPluginComponent()

 const showDialog = () => {
  dialogRef.value?.show()
}

</script>

<style scoped>

</style>
