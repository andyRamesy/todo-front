<template>
  <div>
    <BreadCrumb :items="breadcrumb" />
    <!-- <a-breadcrumb>
		<a-breadcrumb-item><router-link to="/">Home</router-link></a-breadcrumb-item> |
		<a-breadcrumb-item><router-link to="/todos">todos</router-link></a-breadcrumb-item>
    </a-breadcrumb>
	<router-view /> -->
  </div>
  <!-- <nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/todos">todos</router-link>
	</nav> -->
</template>

<script>
import BreadCrumb from "./components/BreadCrumb.vue";
export default {
  components: {
    BreadCrumb,
  },
  computed: {
	breadcrumb(){
		return [
			{
				label : "Home",
				url : "/"
			},
			{
				label : "Todos",
				url : "/todos"
			},
			{
				label : "next"
			}
		]
	}
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
