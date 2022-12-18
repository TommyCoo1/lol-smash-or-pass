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
      <div class="q-pa-md">
        <q-btn-group spread>
          <q-btn color="green" label="Smash" icon="favorite_border" />
          <q-btn color="red" label="Pass" icon="warning" />
        </q-btn-group>
      </div>

    </template>
  </MainLayout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'

// Auswahl speichern im storage Champion
//
// Objekte Champions als Interface speichern interface exportieren, Champions enthalten bildadresse und alle Standard Attribute aus dem Champion Backend Objekt
//
// Beim Start der Anwendung alle Champion Objekte holen abfragen oder nur alle 20 Champions immer wieder abfragen
//
// Bei Smash bei Smash oder Pass Champion ID im storage speichern und zum nächsten Champion Wechsel

export default {
  components: {MainLayout}
}
let x = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg" +
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg" +
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_0.jpg" +
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akshan_0.jpg" +
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Alistar_0.jpg" +
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg" +
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Anivia_0.jpg" +
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Annie_0.jpg" +
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aphelios_0.jpg" +
  "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_0.jpg"


</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 20%
</style>
