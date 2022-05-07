<template>
  <Dialog :header="user._id ? 'Edit User' : 'Create user'" v-model:visible="show" :draggable="false" modal
    :style="{ width: '40vw' }">
    <div class="grid flex-column grid-nogutter">
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>First name:</label>
          </div>
          <div class="col-6 p-fluid pb-0">
            <InputText :class="{ 'p-invalid': v$.user.firstName.$invalid && submitted }" type="text" v-model="user.firstName"></InputText>
          </div>
        </div>
        <div class="text-center p-0">
          <span v-if="v$.user.firstName.$error && submitted">
            <span id="firstName-error" v-for="(error, index) of v$.user.firstName.$errors" :key="index">
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
        </div>
      </div>
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>Last name:</label>
          </div>
          <div class="col-6 p-fluid pb-0">
            <InputText :class="{ 'p-invalid': v$.user.lastName.$invalid && submitted }" type="text" v-model="user.lastName"></InputText>
          </div>
        </div>
        <div class="text-center p-0">
          <span v-if="v$.user.lastName.$error && submitted">
            <span id="lastName-error" v-for="(error, index) of v$.user.lastName.$errors" :key="index">
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
        </div>
      </div>
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>Email:</label>
          </div>
          <div class="col-6 p-fluid pb-0">
            <InputText :class="{ 'p-invalid': v$.user.email.$invalid && submitted }" type="text" v-model="user.email" :disabled="user._id ? true : false"></InputText>
          </div>
        </div>
        <div class="text-center p-0">
          <span v-if="v$.user.email.$error && submitted">
            <span id="email-error" v-for="(error, index) of v$.user.email.$errors" :key="index">
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
          <small v-else-if="(v$.user.email.$invalid && submitted) || v$.user.email.$pending.$response"
            class="p-error">{{
                v$.user.email.required.$message.replace('Value', 'Email')
            }}</small>
        </div>
      </div>
    </div>
    <template #footer>
      <Button label="Cancel" class="p-button-danger" @click="close" autofocus />

      <Button :label="user._id ? 'Update' : 'Create'" class="p-button-success" @click="addUpdateUser" iconPos="right"
        :loading="loading" autofocus />
    </template>
  </Dialog>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  name: "Add user",
  setup: () => ({ v$: useVuelidate() }),
  props: ["viewValue", "userData"],
  data() {
    return {
      show: false,
      loading: false,
      submitted: false,
      user: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  validations() {
    return {
      user: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        email: {
          required,
          email
        }
      }
    }
  },
  watch: {
    userData() {
      Object.assign(this.user, this.userData);
    },
    viewValue(val) {
      this.show = val;
    },
    show(val) {
      if (val == false) {
        this.close();
      }
    },
  },
  methods: {
    async addUpdateUser() {
      this.submitted = true;
      const result = await this.v$.$validate();
      if (result) {
        if (!this.user._id) {
          try {
            this.loading = true;
            await this.$store.dispatch("createUser", {
              ...this.user,
            });
            this.$toast.add({
              severity: "success",
              summary: "Create user",
              detail: "User was created successfully",
              life: 3000
            });
            this.loading = false;
            this.close(true);
          } catch (err) {
            this.$toast.add({
              severity: "error",
              summary: "Create user",
              detail: err.response.data.message,
              life: 3000
            });
            this.loading = false;
          }

        } else {
          this.loading = true;
          await this.$store.dispatch("updateUser", {
            ...this.user,
          });
          this.$toast.add({
            severity: "success",
            summary: "Create user",
            detail: "User was updated successfully",
            life: 3000
          });
          this.loading = false;
          this.close(true);
        }

      }
    },
    close(val) {
      this.submitted = false;
      this.$emit("closeDialog", val);
      this.user = {};
    },
  },
};
</script>

<style scoped>
.p-multiselect,
.p-dropdown {
  width: 100%;
}
</style>