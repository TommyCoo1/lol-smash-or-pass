<template>
  <MainLayout>
    <template #body>

      <div class="row justify-center">
        <q-card class="champion-card">
          <q-img :src="state.champion.img"
                 spinner-color="white"
          >
            <div class="absolute-bottom">
              <div class="text-h4">{{ state.champion.name }}</div>
              <div class="text-h6">{{ state.champion.title }}</div>
              <div class="text-subtitle2">{{ state.champion.blurb }}</div>
            </div>
          </q-img>
        </q-card>
      </div>
      <div class="q-pa-md q-gutter-y-sm">
        <div class="row justify-center">
          <q-card class="smash-pass-score-card bg-red-4 text-h6 text-white">
            <div class="row flex-center">
              Pass:
              {{ store.score.passes }}
            </div>
          </q-card>
          <div class="col-2">
            <div class="row justify-center text-h5">
              <p>Champ {{ store.championIndex }} of 162</p>
            </div>
          </div>
          <q-card class="smash-pass-score-card bg-green-4 text-h6 text-white">

            <div class="row flex-center">
              Smash:
              {{ store.score.smashes }}
            </div>
          </q-card>
        </div>
        <q-btn-group spread>
          <q-btn color="red"
                 label="Pass"
                 icon="thumb_down"
                 @click="choose(false)"
          />
          <q-btn color="green"
                 label="Smash"
                 icon="thumb_up"
                 @click="choose(true)"
          />
          <!--          define state variable for champion and give -->
          <!--          <q-btn color="black" label="Test" icon="favorite_border" @click="score.increment" />-->
        </q-btn-group>
        <div class="row justify-center">
          <q-btn color="grey"
                 label="Reset"
                 flat
                 @click="resetScore"
          />
          <q-btn color="grey"
                 flat
                 @click="switchMode">
            <span>{{ state.isDark ? 'Light Mode' : 'Dark Mode' }}</span>
          </q-btn>
<!--          <q-toggle v-model="state.isDark" @toggle="switchMode" ></q-toggle>-->
          <!--            <q-btn color="grey" label="Reset"-->
          <!--                   @click="resetScore"/>-->
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script setup
        lang="ts"
>
import MainLayout from '../layouts/MainLayout.vue'
import {scoreStore} from 'stores/scoreStore';
import {onBeforeMount, reactive} from 'vue';
import {Champion} from 'src/types';
import {api} from 'boot/axios';
import {AxiosResponse} from 'axios';
import {useQuasar} from 'quasar';
//
// import FinishDialog from '../components/FinishDialog.vue'
// import TestDialog from '../components/TestDialog.vue'
import {useRouter} from 'vue-router';

interface State {
  champion: Champion // | null,
  isDark: boolean
}

const state = reactive<State>({

  champion: {
    id: '',
    key: 0,
    name: '',
    title: '',
    blurb: '',
    img: ''
  },
  isDark: false
})
// const {dialog, notify} = useQuasar()
const store = scoreStore()
const router = useRouter()
const $q = useQuasar()
const dark = $q.dark

const switchMode = () => {
  state.isDark = !state.isDark
  $q.dark.set(state.isDark)
}

onBeforeMount(() => {
  fetchChampion()
  // $q.dark.toggle()
  dark.set(state.isDark)
})

// const fetchChampion = async () => {
//   const champ = state.champion
//   await api.post<Champion>('champion/next', {
//     id: state.champion.id,
//     key: state.champion.key,
//     name: state.champion.name,
//     title: state.champion.title,
//     blurb: state.champion.blurb,
//     img: state.champion.img
//   }).then(
//     champ => {
//       state.champion = champ.data
//     }
//   )
// }

async function fetchChampion() {
  const fetchedChampion: AxiosResponse<Champion> = await api.post<Champion>('champion/next',
    {
      id: state.champion.id,
      key: state.champion.key,
      name: state.champion.name,
      title: state.champion.title,
      blurb: state.champion.blurb,
      img: state.champion.img
    })
  state.champion = fetchedChampion.data
}

const choose = (smash: boolean) => {
  if (state.champion.id == 'Draven') {//TODO Tommy set to 'Zyra' 'Annie'
    resetScore()
    openFinish()
  } else {
    store.choose({id: state.champion.id, smash: smash})
    fetchChampion()
  }
}

const openFinish = () => {
  router.push({name: 'congrats'})
  // notify({
  //   message: 'Jim pinged you.',
  //   color: 'purple'
  // })
  // dialog({
  //   component: TestDialog
  // }).onOk(() => {
  //   alert('TEST')
  // })
  // dialog({
  //   title: 'Alert',
  //   message: 'Some message'
  // }).onOk(() => {
  //   // console.log('OK')
  // }).onCancel(() => {
  //   // console.log('Cancel')
  // }).onDismiss(() => {
  //   // console.log('I am triggered on both OK and Cancel')
  // })
}

const resetScore = () => {
  store.resetScore()
  state.champion = {
    id: '',
    key: 0,
    name: '',
    title: '',
    blurb: '',
    img: ''
  }
  fetchChampion()
}

</script>

<style lang="css"
       scoped
>
.champion-card {
  width: 100%;
  max-width: 20%;
}

.smash-pass-score-card {
  width: 100%;
  /*max-height: 100%;*/
  height: 50px;
  max-width: 13%;
}
</style>
