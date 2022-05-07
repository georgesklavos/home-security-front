<template>
  <div class="
      flex
      justify-content-center
      align-items-center
      justify-content-center
      h-screen
    ">
    <Card style="width: 25rem; margin-bottom: 2em" class="flex justify-content-center">
      <template #title>
        Login
      </template>
      <template #content>
        <div class="grid flex-column">
          <div class="col">
            
              <div class="grid">
                <div class="col label">
                  <label>Email:</label>
                </div>
                <div class="col">
                  <InputText :class="{ 'p-invalid': v$.email.$invalid && submitted }" type="text" placeholder="Email"
                    v-model="email"></InputText>
                </div>
              </div>
                <div class="text-center p-0">
                  <span v-if="v$.email.$error && submitted">
                  <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
                <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">{{
                    v$.email.required.$message.replace('Value', 'Email')
                }}</small>
                </div>
            </div>
          <div class="col">
            <div class="grid">
              <div class="col label">
                <label>Password:</label>
              </div>
              <div class="col">
                <InputText type="password" :class="{ 'p-invalid': v$.password.$invalid && submitted }" placeholder="Password" v-model="password"></InputText>
              </div>
            </div>
            <div class="text-center p-0">
                  <span v-if="v$.password.$error && submitted">
                  <span id="password-error" v-for="(error, index) of v$.password.$errors" :key="index">
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
                </div>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="flex justify-content-center">
          <Button label="Login" style="width: 80%" @click="login" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  name: "Login",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      email: "",
      password: "",
      submitted: false
    };
  },
  validations() {
    return {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  mounted() {
    console.log(this.v$);
    // console.log(process.env);
  },
  methods: {
    async login() {
      this.submitted = true;
      const result = await this.v$.$validate();
      console.log(result);
      if (result) {
        try {
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
          this.$router.push({ name: "main" })
        } catch {
          this.$toast.add({
            severity: "error",
            summary: "Login error",
            detail: "Email or password is incorrect",
          });
        }
      }
    },
  },
};
</script>

<style scoped>
#app {
  height: 100vh;
}
</style>