div
<script setup lang="ts">
import { useStore } from "@/store";
import { customerServices } from "@/services/customer.service";
import { ref, onMounted } from "vue";
import { IResponse } from "@/models/base.model";
import { useRoute, useRouter } from "vue-router";
import { IError } from "@/models/base.model";
import { ICustomer } from "@/models/customer.model";

const route = useRoute();
const router = useRouter();
const confirm = ref(false);
const dialogMsg = ref("");
const name = ref("");
const email = ref("");
const address = ref("");
const phone = ref("");
const genderId = ref();
const genderList = [
  { label: "Male", value: 1 },
  { label: "Female", value: 2 },
];

onMounted(async () => {
  useStore().$patch({
    title: route.params.id ? "Edit Customer" : "Create Customer",
  });
  if (route.params.id) await getCustomer(Number(route.params.id));
});
async function onSubmit() {
  const customer: ICustomer = {
    name: name.value,
    email: email.value,
    address: address.value,
    genderId: genderId.value?.value || genderId.value,
    phone: phone.value,
  };
  if (route.params.id) {
    updateCustomer(Number(route.params.id), customer);
  } else {
    createCustomer(customer);
  }
}
async function getCustomer(id: number) {
  await customerServices.getById(id).then((response: IResponse) => {
    const data: ICustomer = response.data;
    name.value = data.name;
    email.value = data.email;
    address.value = data.address;
    phone.value = data.phone;
    genderId.value = data.genderId;
  });
}
async function createCustomer(customer: ICustomer) {
  await customerServices
    .create(customer)
    .then(() => {
      useStore().$patch({
        dialog: true,
        dialogType: "success",
        dialogMsg: "Data created successfully!",
      });
      router.push("/customer");
    })
    .catch((err: IError) => {
      useStore().$patch({
        dialog: true,
        dialogType: "error",
        dialogMsg: err.message,
      });
    });
}

async function updateCustomer(id: number, customer: ICustomer) {
  console.log(customer);
  await customerServices
    .update(id, customer)
    .then(() => {
      useStore().$patch({
        dialog: true,
        dialogType: "update",
        dialogMsg: "Data update successfully!",
      });
      router.push("/customer");
    })
    .catch((err: IError) => {
      useStore().$patch({
        dialog: true,
        dialogType: "error",
        dialogMsg: err.message,
      });
    });
}
function validateEmail(email: string): boolean {
  return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
}
function onReset() {
  name.value = "";
  email.value = "";
  address.value = "";
  phone.value = "";
  genderId.value = null;
}
</script>
<template>
  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
        <span class="q-ml-sm">{{ dialogMsg }}</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <div class="flex flex-col justify-center">
      <div class="row justify-center py-2">
        <div class="col-lg-8 col-md-8 col-sm-10 col-xs-12">
          <q-input outlined v-model="name" label="Name" :rules="[(val) => (val && val.length > 0) || 'Name must be filled in.']" />
        </div>
      </div>
      <div class="row justify-center py-2">
        <div class="col-lg-8 col-md-8 col-sm-10 col-xs-12">
          <q-input outlined v-model="email" label="Email" :rules="[(val) => validateEmail(val) || 'Must be a valid email.']" />
        </div>
      </div>
      <div class="row justify-center py-2">
        <div class="col-lg-8 col-md-8 col-sm-10 col-xs-12">
          <q-input outlined v-model="address" label="Address" :rules="[(val) => (val && val.length > 0) || 'Address must be filled in.']" />
        </div>
      </div>
      <div class="row justify-center py-2">
        <div class="col-lg-8 col-md-8 col-sm-10 col-xs-12">
          <q-input outlined v-model="phone" label="Phone" :rules="[(val) => (val && val.length == 10) || 'Phone must be filled in.']" />
        </div>
      </div>
      <div class="row justify-center py-2">
        <div class="col-lg-8 col-md-8 col-sm-10 col-xs-12">
          <q-select outlined v-model="genderId" :options="genderList" label="Gender" map-options :rules="[(val) => val || 'Gender must be selected.']" />
        </div>
      </div>
    </div>
    <div class="row justify-center py-2">
      <div class="col-lg-8 col-md-8 col-sm-10 col-xs-12">
        <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">Save</button>
      </div>
    </div>
    <div></div>
  </q-form>
</template>

<style lang=""></style>
