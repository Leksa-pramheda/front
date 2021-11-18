<template>
  <div>
    <Nav />
    <InfoCard />
    <FormCard />
  </div>
  <!-- //<h1>TODO</h1> -->
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";
import FormCard from "@/components/FormCard.vue";
import Nav from "@/components/NavBar.vue";

export default {
  components: {
    InfoCard,
    FormCard,
    Nav,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.todos {
  background: radial-gradient(#60ceea, #6078ea, #60ceea);
  list-style-type: none;
  margin: 25px;
  padding: 0;
  display: inline-block;
  outline: 2px solid rgb(73, 240, 129);
  box-shadow: 0 0 1em black;
  vertical-align: middle;
  border-radius: 1em;
  min-width: 300px;
  max-width: 500px;

  align-items: center;
  /* margin-top: 10%; */
}

.first-info {
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  font-size: 20px;
  margin: 0;
  box-sizing: border-box;
  /* border-bottom: 2px solid rgb(73, 240, 129); */
}

.display {
  display: none;
  transition: 0.3s linear;
}
</style>
