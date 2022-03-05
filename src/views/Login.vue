<template>
<div class="flex justify-content-center align-items-center justify-content-center h-screen">
  <Card style="width: 25rem; margin-bottom: 2em" class="flex  justify-content-center">
            <template #content>
                <div class="grid flex-column">
                  <div class="col">
                    
                    <InputText type="text" placeholder="Email"></InputText>
                  </div>
                  <div class="col">
                <InputText type="password" placeholder="Password"></InputText>

                  </div>
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
      password: ""
    }
  }
}
</script>

<style scoped>
 #app {
   height: 100vh;
 }
</style>