<template>
  <Dialog header="Create alarm" v-model:visible="show" :draggable="false" modal :style="{ width: '30vw' }">
    <div class="grid flex-column grid-nogutter">
      <div class="col-12">
        <div class="grid">
          <div class="col-3 label">
            <label>User:</label>
          </div>
          <div class="col-9 pb-0">
            <Dropdown v-model="userSelected" :class="{ 'p-invalid': v$.userSelected.$invalid && submitted }"
              :options="users" placeholder="Select a user" :loading="loading">
              <template #value="slotProps">
                <div v-if="slotProps.value.firstName">
                  {{ slotProps.value.firstName }} {{ slotProps.value.lastName }}

                </div>
                <div v-else>
                  {{ slotProps.placeholder }}
                </div>
              </template>
              <template #option="slotProps">
                {{ slotProps.option.firstName }} {{ slotProps.option.lastName }}
              </template>
            </Dropdown>
          </div>
        </div>
        <div class="text-center p-0 mb-3">
          <span v-if="v$.userSelected.$error && submitted">
            <span id="userSelected-error" v-for="(error, index) of v$.userSelected.$errors" :key="index">
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
        </div>
      </div>
      <div class="col-12">
        <div class="grid">
          <div class="col-3 label">
            <label>Alarm name:</label>
          </div>
          <div class="col p-fluid">
            <InputText :class="{ 'p-invalid': v$.name.$invalid && submitted }" type="text" v-model="name"></InputText>
          </div>
        </div>
        <div class="text-center p-0 mb-3">
          <span v-if="v$.name.$error && submitted">
            <span id="name-error" v-for="(error, index) of v$.name.$errors" :key="index">
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
        </div>
      </div>
      <div class="col-12">
        <div class="grid">
          <div class="col-3 label">
            <label>Sensors:</label>
          </div>
          <div class="col pb-0 p-fluid">
            <!-- <MultiSelect :class="{ 'p-invalid': v$.selectedSensor.$invalid && submitted }" v-model="selectedSensor"
              :options="sensors" optionLabel="name" :showToggleAll="false" placeholder="Select sensors"
              :loading="loading" /> -->
            <Chips v-model="selectedSensor" :class="{ 'p-invalid': v$.selectedSensor.$invalid && submitted }" />
          </div>
        </div>
        <div class="text-center p-0">
          <span v-if="v$.selectedSensor.$error && submitted">
            <span id="selectedSensor-error" v-for="(error, index) of v$.selectedSensor.$errors" :key="index">
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
        </div>
      </div>
    </div>
    <template #footer>
      <Button label="Cancel" class="p-button-danger" @click="close" autofocus />

      <Button label="Create" class="p-button-success" @click="createAlarm" autofocus iconPos="right"
        :loading="loadingCreate" />
    </template>
  </Dialog>
</template>

<script>
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { mapGetters } from 'vuex';
export default {
  name: "Add alarm",
  setup: () => ({ v$: useVuelidate() }),
  props: ["viewValue"],
  data() {
    return {
      show: false,
      userSelected: {},
      selectedSensor: [],
      name: "",
      loading: false,
      submitted: false,
      loadingCreate: false
    };
  },
  validations() {
    return {
      userSelected: {
        required
      },
      selectedSensor: {
        required
      },
      name: {
        required
      }
    }
  },
  computed: {
    ...mapGetters(['users', "sensors"])
  },
  watch: {
    viewValue(val) {
      this.show = val;
    },
    async show(val) {
      if (val == false) {
        this.close();
      } else {
        this.loading = true;
        await Promise.all([this.$store.dispatch("users")])
        this.loading = false;
      }
    },
  },
  methods: {
    async createAlarm() {
      this.submitted = true;
      const result = await this.v$.$validate();
      if (result) {
        this.loadingCreate = true;
        await this.$store.dispatch("createAlarm", { userId: this.userSelected._id, name: this.name, sensors: this.selectedSensor });
        this.$toast.add({
          severity: "success",
          summary: "Create alarm",
          detail: "Alarm was created successfully",
          life: 3000
        });
        this.loadingCreate = false;
        this.close(true);
      }
    },
    close(val) {
      this.submitted = false;
      this.userSelected = {};
      this.selectedSensor = [];
      this.name = "";
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