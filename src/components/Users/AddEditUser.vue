<template>
  <Dialog
    :header="userId ? 'Edit User' : 'Create user'"
    v-model:visible="show"
    :draggable="false"
    :style="{ width: '35vw' }"
  >
    <div class="grid flex-column grid-nogutter">
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>First name:</label>
          </div>
          <div class="col-6">
            <InputText type="text" v-model="user.firstName"></InputText>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>Last name:</label>
          </div>
          <div class="col-6">
            <InputText type="text" v-model="user.lastName"></InputText>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>Email:</label>
          </div>
          <div class="col-6">
            <InputText type="text" v-model="user.email"></InputText>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>Address:</label>
          </div>
          <div class="col-6">
            <InputText type="text" v-model="user.address"></InputText>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <Button label="Cancel" class="p-button-danger" @click="close" autofocus />

      <Button
        label="Create"
        class="p-button-success"
        @click="createUser"
        autofocus
      />
    </template>
  </Dialog>
</template>

<script>
export default {
  name: "Add user",
  props: ["viewValue", "userIdValue"],
  data() {
    return {
      show: false,
      userId: null,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
      },
    };
  },
  watch: {
    viewValue(val) {
      this.show = val;
    },
    userIdValue(val) {
      this.userId = val;
    },
    show(val) {
      if (val == false) {
        this.close();
      }
    },
  },
  methods: {
    createUser() {
      console.log("create user");
    },
    close() {
      this.$emit("closeDialog");
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