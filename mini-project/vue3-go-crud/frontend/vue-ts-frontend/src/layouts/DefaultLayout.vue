<script setup lang="ts">
import { ref, onMounted } from "vue";
import { routes } from "@/routers/routes";
import { useStore } from "@/store";
import { useRouter } from "vue-router";
const store = useStore();
onMounted(() => {
  if (!store.getToken) useRouter().push("/login");
});
const drawer = ref(false);
</script>
<template>
  <q-dialog v-model="store.dialog" persistent transition-show="scale" transition-hide="scale">
    <q-card class="text-center text-primary" style="width: 400px" v-if="store.dialogType === 'success' || store.dialogType === 'update'">
      <q-card-section>
        <div class="text-3xl font-bold">{{ store.dialogType.toUpperCase() }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">{{ store.dialogMsg }}</q-card-section>

      <q-card-actions align="right" class="bg-white text-primary">
        <q-btn color="primary" label="Close" v-close-popup />
      </q-card-actions>
    </q-card>
    <q-card class="text-center text-red" style="width: 400px" v-if="store.dialogType === 'error'">
      <q-card-section>
        <div class="text-3xl font-bold">{{ store.dialogType.toUpperCase() }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">{{ store.dialogMsg }}</q-card-section>

      <q-card-actions align="right" class="bg-white text-primary">
        <q-btn color="red" label="Close" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <div>
    <q-layout view="lHh Lpr lff" container style="height: 100vh" class="shadow-2">
      <q-header elevated class="bg-primary">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>{{ store.getTitle }}</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
        <div style="height: 150px" class="bg-secondary absolute-top flex align-middle text-white">
          <div class="text-white text-2xl m-auto">Logo</div>
        </div>
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <div v-for="item in routes">
              <q-item clickable v-ripple :to="item.path">
                <q-item-section avatar>
                  <q-icon :name="item.iconName" />
                </q-item-section>

                <q-item-section> {{ item.name }} </q-item-section>
              </q-item>
            </div>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <slot />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
