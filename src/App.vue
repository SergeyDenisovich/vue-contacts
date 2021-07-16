<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: chocolate;
  border-radius: 10px;

  button:not([class$='delete-btn']) {
    padding: 0 16px;
    height: 36px;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    box-shadow: 0px 2px 4px -1px #000350;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #fafafad7;
    }
  }
}
</style>
