<template>
<div class="poravnaj">
  <div class="roditelj" v-if="commit">
    <div class="naslov">SHA: {{shaid}}</div>
    <div class="tekst"> Ime autora: {{commit.commit.author.name}} </div>
    <div class="tekst"> Email autora: {{commit.commit.author.email}} </div>
    <div class="tekst"> Datum commita:  {{ new Date(commit.commit.author.date).toDateString()}} </div>
    <button @click="goHome">Vrati me doma</button>  
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Commitevi',
  data() {
    return {
      shaid: this.$route.params.shaid,
      commit: null
    }
  },
  async mounted() {
    await this.fetchCommit();
  },
  methods: {
    async fetchCommit() {
      const res = await axios.get(`https://api.github.com/repos/vuejs/vue/commits/${this.shaid}`)
      const data = res.data
      this.commit = data
      console.log(data)
    },
    goHome() {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style>
body{background-color:rgb(165, 165, 165);}

.roditelj{display: flex;
flex-direction: column;
color: white;
background-color:#2f0258 ;
width: 50%;
padding: 3rem;
border: 3px solid white;
border-radius: 10px;
gap: 0.5rem;}

.naslov{font-size: 25px;
font-weight: bold;
color:white}

.poravnaj{
  margin-top: 9rem;
  display: flex;
  justify-content: center;
}

button {
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 1em;
  width: 200px;
  align-self: center;
  margin-top: 1em;
  font-size: 16px;
  font-weight: 700;
}
</style>