import {defineStore} from 'pinia';
import {ref} from 'vue';
import {choice} from 'src/types';

export const scoreStore = defineStore('counter', () => {
  const score = ref({
    choices: [] as choice[],
    currentId: '',
    smashes: 0,
    passes: 0
  })
  const smashIncrement = () => {
    score.value.smashes++;
  }
  const passIncrement = () => {
    score.value.passes++;
  }
  const setCurrentId = (currentId: string) => {
    score.value.currentId = currentId;
  }
  const choose = (choice: choice) => {
    score.value.choices.push(choice);
    if (choice.smash) {
      smashIncrement();
    } else {
      passIncrement();
    }
  }
  return {
    score,
    smashIncrement,
    passIncrement,
    setCurrentId,
    choose
  };
});
//
// export const scoreStore = defineStore('counter', {
//   state: () => ({
//     counter: 0,
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2,
//   },
//   actions: {
//     increment() {
//       this.counter++;
//     },
//   },
// });
