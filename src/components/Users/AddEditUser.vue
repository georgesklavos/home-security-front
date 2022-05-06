<template>
  <Dialog
    :header="user._id ? 'Edit User' : 'Create user'"
    v-model:visible="show"
    :draggable="false"
    modal
    :style="{ width: '40vw' }"
  >
    <div class="grid flex-column grid-nogutter">
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>First name:</label>
          </div>
          <div class="col-6 p-fluid">
            <InputText type="text" v-model="user.firstName"></InputText>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>Last name:</label>
          </div>
          <div class="col-6 p-fluid">
            <InputText type="text" v-model="user.lastName"></InputText>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>Email:</label>
          </div>
          <div class="col-6 p-fluid">
            <InputText
              type="text"
              v-model="user.email"
              :disabled="user._id ? true : false"
            ></InputText>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <Button label="Cancel" class="p-button-danger" @click="close" autofocus />

      <Button
        :label="user._id ? 'Update' : 'Create'"
        class="p-button-success"
        @click="addUpdateUser"
        iconPos="right"
        :loading="loading"
        autofocus
      />
    </template>
  </Dialog>
</template>

<script>
export default {
  name: "Add user",
  props: ["viewValue", "userData"],
  data() {
    return {
      show: false,
      loading: false,
      user: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
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
      if (!this.user._id) {
        try {
          this.loading = true;
          await this.$store.dispatch("createUser", {
            password: "12345",
            ...this.user,
          });
          this.$toast.add({
            severity: "success",
            summary: "Create user",
            detail: "User was created successfully",
          });
        } catch {
          this.$toast.add({
            severity: "success",
            summary: "Create user",
            detail: "An error has occured",
          });
        }
        this.loading = false;
        this.close(true);
      }
    },
    close(val) {
      this.user = {};
      this.$emit("closeDialog", val);
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