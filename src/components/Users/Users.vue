<template>
  <AddEditUser
    :viewValue="showUser"
    @closeDialog="close"
    :userData="userData"
  ></AddEditUser>
  <DataTable
    :value="users"
    :paginator="true"
    :rows="10"
    dataKey="id"
    :rowHover="true"
    showGridlines
    :loading="loading"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
    :rowsPerPageOptions="[10, 25, 50]"
    :currentPageReportTemplate="pagination"
  >
    <template #header>
      <div class="flex justify-content-between align-items-center">
        <h3 class="m-0">Users</h3>

        <Button label="Create user" @click="addUser"> </Button>
      </div>
    </template>
    <template #empty> No users found. </template>
    <Column field="_id" header="ID" sortable>
      <template #body="{ data }">
        {{ data._id }}
      </template>
    </Column>
    <Column field="firstName" header="First name" sortable>
      <template #body="{ data }">
        {{ data.firstName }}
      </template>
    </Column>
    <Column field="lastName" header="Last name" sortable>
      <template #body="{ data }">
        {{ data.lastName }}
      </template>
    </Column>
    <Column field="email" header="Email">
      <template #body="{ data }">
        {{ data.email }}
      </template>
    </Column>
    <Column field="role" header="Role">
      <template #body="{ data }">
        {{ data.admin ? "Admin" : "Client" }}
      </template>
    </Column>
    <Column
      header="Action"
      headerStyle="width: 10rem; text-align: center;"
      bodyStyle="text-align: center; overflow: visible"
    >
      <template #body="{ data }">
        <Button
          type="button"
          icon="pi pi-user-edit"
          @click="editUser(data)"
        ></Button>
      </template>
    </Column>
  </DataTable>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import AddEditUser from "./AddEditUser.vue";

export default {
  name: "Users",
  components: {
    AddEditUser,
  },
  data() {
    return {
      loading: false,
      showUser: false,
      userData: null,
    };
  },
  async mounted() {
    await this.getUsers();
  },
  computed: {
    ...mapState(["pagination"]),
    ...mapGetters(["users"]),
  },
  methods: {
    async getUsers() {
      this.loading = true;
      await this.$store.dispatch("users");
      this.loading = false;
    },
    addUser() {
      this.showUser = true;
    },
    async close(val) {
      if (val) {
        await this.getUsers();
      }
      this.showUser = false;
      this.userData = null;
    },
    editUser(data) {
      this.addUser();
      this.userData = data;
    },
  },
};
</script>

<style scoped>
:deep(.p-paginator-current) {
  margin-left: auto !important;
}
</style>