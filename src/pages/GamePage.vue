<template>
  <MainLayout>
    <template #body>

      <div class="row justify-center">
        <q-card class="champion-card">
          <q-img :src="state.champion.img"
                 spinner-color="white">
            <div class="absolute-bottom">
              <div class="text-h6">{{ state.champion.title }}</div>
              <div class="text-subtitle2">{{ state.champion.blurb }}</div>
            </div>
          </q-img>
        </q-card>
      </div>
      <div class="q-pa-md q-gutter-y-md">
        <div class="row justify-center">
          <!--          <q-btn color="red" label="Pass" icon="warning "/>-->
          <q-card class="smash-pass-score-card bg-red-5 text-h6 text-white"> Pass:
            {{ store.score.passes }}
          </q-card>
          <div class="col-2">
            <!--            <q-card class="champion-index-card bg-grey text-h6 text-white" square=true>Champion-->
            <!--              {{ store.score.championIndex }} of 162-->
            <!--            </q-card>-->
          </div>
          <!--          <q-btn color="green" label="Smash" icon="favorite_border"/>-->
          <!--          <q-btn color="black" label="Test" icon="favorite_border" @click="score.increment" />-->
          <q-card class="smash-pass-score-card bg-green-5 text-h6 text-white"> Smash:
            {{ store.score.smashes }}
          </q-card>
        </div>
        <q-btn-group spread>
          <q-btn color="red" label="Pass" icon="warning "
                 @click="choose(false)"/>
          <q-btn color="green" label="Smash" icon="favorite_border"
                 @click="choose(true)"/>
          <!--          define state variable for champion and give -->
          <!--          <q-btn color="black" label="Test" icon="favorite_border" @click="score.increment" />-->
        </q-btn-group>
      </div>

    </template>
  </MainLayout>
</template>

<script setup
        lang="ts">
import MainLayout from '../layouts/MainLayout.vue'
import {scoreStore} from '../stores/scoreStore';
import {onBeforeMount, reactive} from 'vue';
import {Champion} from 'src/types';
import {api} from 'boot/axios';

interface State {
  champion: Champion // | null
}

const state = reactive<State>({
  // champion: null

  champion: {
    id: '',
    key: 0,
    name: '',
    title: '',
    blurb: '',
    img: ''
  }
})
const store = scoreStore();

// Beim Start der Anwendung /next champion holen
// (alle Champion Objekte holen abfragen oder nur alle 20 Champions immer wieder abfragen, nur )
//
// Bei Smash bei Smash oder Pass Champion ID im storage speichern und zum nächsten Champion Wechsel mit next und übergabe champion id

let test = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg' +
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg' +
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_0.jpg' +
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akshan_0.jpg' +
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Alistar_0.jpg' +
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg' +
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Anivia_0.jpg' +
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Annie_0.jpg' +
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aphelios_0.jpg' +
  'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_0.jpg'

onBeforeMount(() => {
  fetchChampion()
})

const fetchChampion = () => {
  // console.log(state.champion)
  // const champion = JSON.stringify({
  //   champion: state.champion
  // })
  // const champion = JSON.stringify({
  //   id: state.champion.id,
  //   key: state.champion.key,
  //   name: state.champion.name,
  //   title: state.champion.title,
  //   blurb: state.champion.blurb,
  //   img: state.champion.img
  // })
  // console.log(state.champion)
  const champ = state.champion
  api.post<Champion>('champion/next', {
    champion: champ
  }).then(
    champ => {
      const oldChamp = state.champion
      const newChamp = champ.data
      console.log('This is the old champ:')
      console.log(oldChamp)
      console.log('This is the new champ:' + newChamp)
      console.log(newChamp)
      state.champion = champ.data
    }
  )
}

const choose = (smash: boolean) => {
  store.choose({id: state.champion.id, smash: smash})
  fetchChampion()
}

</script>

<style lang="css" scoped>
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

.champion-index-card {
  width: 100%;
  /*max-height: 100%;*/
  height: 50px;
  max-width: 100%;
}
</style>
