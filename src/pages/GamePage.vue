<template>
  <MainLayout>
    <template #body>

      <div class="row justify-center">
        <q-card class="my-card">
          <q-img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg">
            <div class="absolute-bottom">
              <div class="text-h6">TEST</div>
              <div class="text-subtitle2">by John Doe</div>
            </div>
          </q-img>
        </q-card>
      </div>
      <div class="q-pa-md q-gutter-y-md">
        <div class="row justify-center">
          <q-btn color="red" label="Pass" icon="warning "/>
          <div class="col-1"/>
          <q-btn color="green" label="Pass" icon="favorite_border"/>
          <!--          <q-btn color="black" label="Test" icon="favorite_border" @click="score.increment" />-->

        </div>
        <q-btn-group spread>
          <q-btn color="red" label="Pass" icon="warning "/>
          <q-btn color="green" label="Smash" icon="favorite_border"/>
          <!--          <q-btn color="black" label="Test" icon="favorite_border" @click="score.increment" />-->
        </q-btn-group>
      </div>

    </template>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import {scoreStore} from '../stores/scoreStore';

// Auswahl speichern im storage Champion
//
// Objekte Champions als Interface speichern interface exportieren, Champions enthalten bildadresse und alle Standard Attribute aus dem Champion Backend Objekt
//
// Beim Start der Anwendung alle Champion Objekte holen abfragen oder nur alle 20 Champions immer wieder abfragen
//
// Bei Smash bei Smash oder Pass Champion ID im storage speichern und zum nächsten Champion Wechsel

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

const score = scoreStore();


</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 20%
</style>
