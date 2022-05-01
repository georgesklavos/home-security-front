<template>
<AddAlarm :viewValue="showAddAlarm" @closeDialog="close"></AddAlarm>
  <DataTable
    :value="alarms"
    :paginator="true"
    :rows="10"
    dataKey="id"
    :rowHover="true"
    showGridlines
    :filters="filters"
    :loading="loading"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    :rowsPerPageOptions="[10, 25, 50]"
    :currentPageReportTemplate="pagination"
  >
    <template #header>
      <div class="flex justify-content-between align-items-center">
        <h3 class="m-0">Alarms</h3>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
         <Button label="Create alarm" @click="addAlarm">

         </Button>
        </span>
      </div>
    </template>
    <template #empty> No alarms found. </template>
    <Column field="id" header="ID" sortable>
      <template #body="{ data }">
        {{ data._id }}
      </template>
    </Column>
    <Column field="user" header="User ID" sortable>
      <template #body="{ data }">
        {{ data.userId }}
      </template>
    </Column>
    <Column field="status" header="Status" sortable>
      <template #body="{ data }">
        {{ data.active ? "Active" : "Inactive" }}
      </template>
    </Column>
  </DataTable>
</template>

<script>
import { FilterMatchMode } from "primevue/api";
import { mapGetters, mapState } from "vuex";
import AddAlarm from "./AddAlarm.vue";

export default {
  name: "Alarms",
  components: {
    AddAlarm
  },
  data() {
    return {
      loading: false,
      showAddAlarm: false,
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
    };
  },
 async mounted() {
   await this.$store.dispatch("alarms");
  },
  computed: {
    ...mapState(["pagination"]),
    ...mapGetters(["alarms"])
  },
  methods: {
      addAlarm() {
          this.showAddAlarm = true;
      },
      close() {
        this.showAddAlarm = false;
      }
  }
};
</script>

<style scoped>
:deep(.p-paginator-current) {
  margin-left: auto !important;
}
</style>