<template>
  <Dialog
    header="Create alarm"
    v-model:visible="show"
    :draggable="false"
    modal
    :style="{ width: '40vw' }"
  >
    <div class="grid flex-column grid-nogutter">
      <div class="col-12">
        <div class="grid">
          <div class="col-3 label">
            <label>User:</label>
          </div>
          <div class="col-9">
            <Dropdown
              v-model="userSelected"
              :options="users"
              optionLabel="firstName"
              optionValue="_id"
              placeholder="Select a user"
              :loading="loading"
            />
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="grid">
          <div class="col-3 label">
            <label>Sencors:</label>
          </div>
          <div class="col">
            <MultiSelect
              v-model="selectedCensor"
              :options="censors"
              optionLabel="name"
              :showToggleAll="false"
              placeholder="Select censors"
              :loading="loading"
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
import { mapGetters } from 'vuex';
export default {
  name: "Add alarm",
  props: ["viewValue"],
  data() {
    return {
      show: false,
      userSelected: {},
      selectedCensor: [],
      loading: false,
      censors: [
        {
          name: "Motion",
          code: 1,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['users'])
  },
  watch: {
    viewValue(val) {
      this.show = val;
    },
   async show(val) {
      if (val == false) {
        this.close();
      }else {
        this.loading = true;
        await Promise.all([this.$store.dispatch("users"), this.$store.dispatch("sensors")])
        this.loading = false;
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