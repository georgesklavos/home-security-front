<template>
  <Dialog
    header="Create alarm"
    v-model:visible="show"
    :draggable="false"
    :style="{ width: '35vw' }"
  >
    <div class="grid flex-column grid-nogutter">
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>User:</label>
          </div>
          <div class="col-6">
            <Dropdown
              v-model="userSelected"
              :options="users"
              optionLabel="name"
              optionValue="code"
              placeholder="Select a user"
            />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="grid">
          <div class="col-3 label">
            <label>Sencors:</label>
          </div>
          <div class="col-6">
            <MultiSelect
              v-model="selectedCensor"
              :options="censors"
              optionLabel="name"
              :showToggleAll="false"
              placeholder="Select censors"
            />
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <Button label="Cancel" class="p-button-danger" @click="close" autofocus />

      <Button
        label="Create"
        class="p-button-success"
        @click="createAlarm"
        autofocus
      />
    </template>
  </Dialog>
</template>

<script>
export default {
  name: "Add alarm",
  props: ["viewValue"],
  data() {
    return {
      show: false,
      userSelected: {},
      selectedCensor: [],
      censors: [
        {
          name: "Motion",
          code: 1,
        },
      ],
      users: [
        {
          name: "testuser",
          code: 1,
        },
      ],
    };
  },
  watch: {
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
    createAlarm() {
      console.log("create alarm");
    },
    close() {
      this.$emit("closeDialog");
    },
  },
};
</script>

<style scoped>
.p-multiselect, .p-dropdown{
    width: 100%;
}
</style>