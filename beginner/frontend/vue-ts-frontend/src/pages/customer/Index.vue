<script setup lang="ts">
import { useStore } from "@/store";
import { customerServices } from "@/services/customer.service";
import { QTableColumn } from "quasar";
import { ref, onMounted } from "vue";
import { ICustomerResponse } from "@/models/customer.model";
import { IError, IResponseData } from "@/models/base.model";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const currentPage = ref(Number(route.params.page) || 1);
const deleteDialog = ref(false);
const deleteId = ref<number | null>(null);
const totalPage = ref(1);
const rows = ref<ICustomerResponse[]>([]);
const columns: QTableColumn[] = [
  {
    name: "customerId",
    required: true,
    label: "CustomerID",
    align: "center",
    field: "customerId",
    sortable: false,
  },
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: "name",
    sortable: false,
  },
  { name: "email", align: "left", label: "Email", field: "email" },
  { name: "phone", label: "Phone", field: "phone", align: "center" },
  { name: "action", label: "Action", field: "action", align: "center", headerClasses: "w-[200px]" },
];
const pagination = ref({
  rowsPerPage: Number(route.params.pageSize) || 5,
});
onMounted(async () => {
  useStore().$patch({
    title: "Customer",
  });
  await getCustomer(currentPage.value, pagination.value.rowsPerPage);
});

async function onChangePage(page: number) {
  router.push(`/customer/page/${page}/pageSize/${pagination.value.rowsPerPage}`);
  await getCustomer(page, pagination.value.rowsPerPage);
}

async function getCustomer(page: number, pageSize: number) {
  await customerServices.gets(page, pageSize).then((response: IResponseData) => {
    if (currentPage.value > 1 && response.data.length === 0) {
      router.push(`/customer/page/${1}/pageSize/${pagination.value.rowsPerPage}`);
    }
    rows.value = response.data;
    const page = response.pagination;
    currentPage.value = page.currentPage;
    totalPage.value = page.totalPage;
  });
}
function deleteCustomer(id: number | null) {
  if (id === null) return;
  customerServices
    .delete(id)
    .then(() => {
      getCustomer(currentPage.value, pagination.value.rowsPerPage);
      useStore().$patch({
        dialog: true,
        dialogType: "success",
        dialogMsg: "Data deleted successfully.",
      });
    })
    .catch((err: IError) => {
      useStore().$patch({
        dialog: true,
        dialogType: "error",
        dialogMsg: err.message,
      });
    });
}
function confirmDelete(id: number) {
  deleteId.value = id;
  deleteDialog.value = true;
}
</script>
<template>
  <q-dialog v-model="deleteDialog" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="error" text-color="red" />
        <span class="q-ml-sm text-2xl text-red-600">Are you sure you want to delete this data?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Cancel" color="grey" v-close-popup @click="deleteId = null" />
        <q-btn label="Confirm" color="red" v-close-popup @click="deleteCustomer(deleteId)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <div class="flex justify-end mb-2">
    <q-btn :to="`/customer/add`" class="mx-1" color="secondary" label="Create" />
  </div>
  <div>
    <div class="q-pa-xs">
      <q-table
        :dense="$q.screen.lt.md"
        bordered
        table-colspan="1"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :hide-bottom="false"
        :hide-pagination="true"
        no-data-label="Data not found"
        v-model:pagination="pagination"
      >
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <div class="flex justify-center">
              <q-btn :to="`/customer/edit/${props.row.customerId}`" class="mx-1" color="primary" label="Edit" />
              <q-btn class="mx-1" color="red" label="Delete" @click="confirmDelete(props.row.customerId)" />
            </div>
          </q-td> </template
      ></q-table>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="currentPage"
        color="purple"
        :max="totalPage"
        :max-pages="6"
        boundary-numbers
        boundary-links
        direction-links
        @update:model-value="onChangePage"
      />
    </div>
  </div>
</template>

<style lang=""></style>
