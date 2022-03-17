<template>
  <div class="home">
   <h2>Popis Commiteva</h2> 
    <div class="card" v-for="commit in commitovi" :key="commit.sha" @click="handleClick(commit.sha)">
      <h1>{{commit.commit.author.name}}</h1>
      <p>{{commit.commit.message}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Home",
  async mounted() {
    await this.fetchCommits()
  },
  data() {
    return {
      commitovi: []
    }
  },
  methods: {
    async fetchCommits() {
      const res = await axios.get('https://api.github.com/repos/vuejs/vue/commits')
      const data = res.data
      console.log(data)
      this.commitovi =  data;
    },
    handleClick(id) {
      this.$router.push({name: 'Commitevi', params: {shaid: id}})
    }
  }
};
</script>

<style lang="scss" scoped>
h2{color: rgb(255, 255, 255);
font-size: 40px;
width: 100%;
background-color: #2f0258;
padding: 2rem;
margin-top:-1rem ;

}
.card {
border: 3px solid white;
  width: 50%;
  box-sizing: border-box;
padding: 1rem;
  border-radius: 10px;
  margin: 1em;
  transition: all 250ms ease-in;
  color: white;
  background-color: #2f0258;
    &:hover {
      background-color: #4b0394;
      cursor: pointer;
      transition: all 250ms ease-in;
  }
}


.home{
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


</style>
