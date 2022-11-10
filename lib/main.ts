import vue3DataTable from "./vue3-data-table.vue";

export default {
  install: (app: any, options: any) => {
    app.component("vue3-data-table", vue3DataTable);
  },
};
