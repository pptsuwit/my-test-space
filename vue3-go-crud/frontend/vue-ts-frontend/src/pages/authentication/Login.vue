<!-- copyright -->
<!-- https://jasonwatmore.com/post/2022/04/12/vue-3-veevalidate-form-validation-example-composition-api -->

<script setup lang="ts">
import { ref } from "vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useRouter } from "vue-router";

import { authService } from "@/services/auth.service";
import { ILoginResponse } from "@/models/auth.model";
import { IError } from "@/models/base.model";
const router = useRouter();
import { useStore } from "@/store";

const email = ref("");
const password = ref("");

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(1).required(),
});

async function onSubmit() {
  await authService
    .login(email.value, password.value)
    .then(async (response: ILoginResponse) => {
      const { token } = response.data;
      localStorage.setItem(import.meta.env.VITE_TOKEN_NAME as string, token);

      useStore().$patch({
        token: token,
      });
      router.push("/");
    })
    .catch((err: IError) => {
      console.log(err);
      // setModal(true);
      // setModalMessage(getModalMessage("error", err));
    });
}
</script>
<template>
  <section class="min-h-screen flex items-center justify-center">
    <div class="container px-4 py-5 mx-auto md:flex md:items-center md:justify-center">
      <div class="md:w-8/12 lg:w-7/12 xl:w-6/12 md:pr-4">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="w-full" alt="Phone image" />
      </div>
      <div class="md:w-8/12 xl:w-6/12 md:pl-4">
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
          <div class="mb-4">
            <Field
              name="email"
              placeholder="Email"
              v-model="email"
              type="text"
              class="w-full p-4 border border-gray-300 rounded-lg"
              :class="{ 'border-red-500': errors.email }"
            />
            <div class="text-red-500">{{ errors.email }}</div>
          </div>
          <div class="mb-4">
            <Field
              name="password"
              placeholder="Password"
              v-model="password"
              type="password"
              class="w-full p-4 border border-gray-300 rounded-lg"
              :class="{ 'border-red-500': errors.password }"
            />
            <div class="text-red-500">{{ errors.password }}</div>
          </div>

          <div class="flex justify-end items-center mb-4">
            <div class="text-end w-full md:w-1/2">
              <router-link to="/forgot-password"> Forgot password? </router-link>
            </div>
          </div>
          <div>
            <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">Sign in</button>
          </div>
        </Form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
