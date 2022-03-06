<template>
  <div
    class="
      flex
      justify-content-center
      align-items-center
      justify-content-center
      h-screen
    "
  >
    <Card
      style="width: 25rem; margin-bottom: 2em"
      class="flex justify-content-center"
    >
      <template #content>
        <div class="grid flex-column">
          <div class="col">
            <div class="grid">
              <div class="col label">
                <label>Email:</label>
              </div>
              <div class="col">
                <InputText type="text" placeholder="Email"></InputText>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="grid">
              <div class="col label">
                <label>Password:</label>
              </div>
              <div class="col">
                <InputText type="password" placeholder="Password"></InputText>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex justify-content-center">

         <Button label="Login" style="width:80%" @click="login"/>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login");
    }
  }
};
</script>

<style scoped>
#app {
  height: 100vh;
}
</style>