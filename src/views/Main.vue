<template>
  <div style="margin-bottom: 4rem">
    <Menubar :model="items">
      <template #end>
         <!-- <ul class="p-menubar-root-list" role="menubar"> -->
          <div class="p-menuitem"> 
            <a href="/logout" class="p-menuitem-link" role="menuitem" style="border-radius:6px !important;">
              <span class="p-menuitem-icon pi pi-fw pi-sign-out"></span>
              <span class="p-menuitem-text">Logout</span>
            </a>
          </div>
        <!-- </ul>  -->
      </template>
    </Menubar>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      items: [
        {
          label: "Dashboard",
          to: "dashboard",
          icon: "pi pi-fw pi-home",
        },
        {
          label: "Users",
          to: "users",
          icon: "pi pi-fw pi-user",
        },
        {
          label: "Alarms",
          to: "alarms",
          icon: "pi pi-fw pi-unlock",
        },
        // {
        //   label: "Logout",
        //   icon: "pi pi-fw pi-sign-out",
        // },
      ],
    };
  },
};
</script>
