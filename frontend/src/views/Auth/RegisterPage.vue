<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-light">Create New Account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST" @click.prevent="submitRegister">
                <div>
                    <label for="fullName" class="block text-sm font-medium leading-6 dark:text-light">Full Name</label>
                    <div class="mt-2">
                        <input id="fullName" name="fullName" type="text" required v-model="fullName"  rules="[v => !!v || 'Item is required']"
                            class="block w-full rounded-md border-0 bg-white/5 py-1.5 dark:text-light shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium leading-6 dark:text-light">Email address</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required v-model="email"
                            class="block w-full rounded-md border-0 bg-white/5 py-1.5 dark:text-light shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium leading-6 dark:text-light">Mobile Number</label>
                    <div class="mt-2">
                        <vue-tel-input v-model="phoneNumber" v-on:country-changed="countryChanged"></vue-tel-input>

                        <!-- <input id="full_name" name="full_name" type="text" required
                            class="block w-full rounded-md border-0 bg-white/5 py-1.5 dark:text-light shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" /> -->
                    </div>
                </div>


                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 dark:text-light">Password</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            v-model="password"
                            class="block w-full rounded-md border-0 bg-white/5 py-1.5 dark:text-light shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="confirmPassword" class="block text-sm font-medium leading-6 dark:text-light">Confirm
                            Password</label>
                    </div>
                    <div class="mt-2">
                        <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="current-password"
                            required v-model="confirmPassword"
                            class="block w-full rounded-md border-0 bg-white/5 py-1.5 dark:text-light shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 dark:text-light shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign
                        Up</button>
                </div>
            </form>


            <p class="mt-10 text-center text-sm text-gray-400">
                Already a member?
                {{ ' ' }}
                <a href="#" class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"> Sign-In
                </a>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const fullName = ref("");
const contry = ref("");
const phoneNumber = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");


const countryChanged = (country: any) => {
    contry.value = country?.dialCode
}

const submitRegister = (event : any) => {


}


</script>


