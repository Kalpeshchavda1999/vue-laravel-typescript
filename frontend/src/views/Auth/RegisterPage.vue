<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight dark:text-light">{{
                $t('create_new_account') }}
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST" @click.prevent="submitRegister">
                <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="fullName">
                    <label for="fullName" class="block text-sm font-medium leading-6 dark:text-light">{{ $t('full_name')
                    }}</label>
                    <div class="mt-2">
                        <input id="fullName" name="fullName" type="text" required v-model="field.value"
                            @keyup="handleChange" rules="[v => !!v || 'Item is required']" @blur="handleBlur"
                            class="block w-full rounded-md border-0 bg-white/5 py-1.5 dark:text-light shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                        <p v-if="errorMessage" class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errorMessage }}</p>
                    </div>

                </Field>
                <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="email">
                    <label for="email" class="block text-sm font-medium leading-6 dark:text-light">{{ $t('email_address')
                    }}</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" required v-model="field.value"
                            @blur="handleBlur" @change="handleChange"
                            class="block w-full rounded-md border-0 bg-white/5 py-1.5 dark:text-light shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                        <p v-if="errorMessage" class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errorMessage }}</p>
                    </div>
                </Field>

                <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="phoneNumber">
                    <label class="block text-sm font-medium leading-6 dark:text-light">{{ $t('mobile_number') }}</label>
                    <div class="mt-2">
                        <vue-tel-input v-on:country-changed="countryChanged" v-model="field.value" @blur="handleBlur"
                            @keyup="handleChange"></vue-tel-input>
                        <p v-if="errorMessage" class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errorMessage }}</p>
                    </div>
                </Field>


                <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="password">
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 dark:text-light">{{ $t('password')
                        }}</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            v-model="field.value" @blur="handleBlur" @keyup="handleChange"
                            class="block w-full rounded-md border-0 bg-white/5 py-1.5 dark:text-light shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                        <p v-if="errorMessage" class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errorMessage }}</p>

                    </div>
                </Field>

                <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="confirmPassword">
                    <div class="flex items-center justify-between">
                        <label for="confirmPassword" class="block text-sm font-medium leading-6 dark:text-light">{{
                            $t('confirm_password') }}</label>
                    </div>
                    <div class="mt-2">
                        <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="current-password"
                            required v-model="field.value" @blur="handleBlur" @keyup="handleChange"
                            class="block w-full rounded-md border-0 bg-white/5 py-1.5 dark:text-light shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
                        <p v-if="errorMessage" class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errorMessage }}</p>
                    </div>
                </Field>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 dark:text-light shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">{{
                            $t('sign_up') }}</button>
                </div>
            </form>


            <p class="mt-10 text-center text-sm text-gray-400">
                {{ $t('already_a_member') }}?
                {{ ' ' }}
                <a href="#" class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"> {{ $t('sign_in') }}
                </a>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { computed, ref } from "vue";
import { Field, useForm } from 'vee-validate'
import { useRouter } from "vue-router";
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { useI18n } from 'vue-i18n';
import axiosInstance from '@/libs/axiosInstance'
import { toast } from 'vue3-toastify';

const fullName = ref("");
const contry = ref("");
const phoneNumber = ref("");
const email = ref("");
const password = ref("");
const loading = ref(false);
const router = useRouter();
const country = ref("");
const countryChanged = (country: any) => {
    contry.value = country?.dialCode
}

const VALIDATION_TEXT = {
    NAME_REQUIRED: useI18n().t('name_required'),
    EMAIL_REQUIRED: useI18n().t('email_required'),
    EMAIL_EXISTS: useI18n().t('email_exists'),
    PHONE_NUMBER_VALIDATE: useI18n().t('phone_number_validate'),
    PASSWORD_LENGTH: useI18n().t('password_leanth'),
    PASSWORD_CONTAINS_EMAIL: useI18n().t('password_contatins_email'),
    PASSWORD_MATCH: useI18n().t('password_match'),
}

const zodSchema = z.object({
    fullName: z.string().min(2, VALIDATION_TEXT.NAME_REQUIRED),
    email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
    phoneNumber: z.string().min(10, VALIDATION_TEXT.PHONE_NUMBER_VALIDATE),
    password: z.string().min(8, VALIDATION_TEXT.PASSWORD_LENGTH),
    confirmPassword: z.string(),
}).superRefine(async (data, ctx) => {

    if (data.email !== "") {

        // // const test = await axiosInstance.get('test');

        // ctx.addIssue({
        //     code: z.ZodIssueCode.custom,
        //     message: VALIDATION_TEXT.EMAIL_EXISTS,
        //     path: ['email'],
        // })
    }

    if (data.email !== "") {

        // // const test = await axiosInstance.get('test');

        // ctx.addIssue({
        //     code: z.ZodIssueCode.custom,
        //     message: VALIDATION_TEXT.EMAIL_EXISTS,
        //     path: ['email'],
        // })
    }

    if (data.password.includes(data.email)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: VALIDATION_TEXT.PASSWORD_CONTAINS_EMAIL,
            path: ['password'],
        })
    }
    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: VALIDATION_TEXT.PASSWORD_MATCH,
            path: ['confirmPassword'],
        })
    }
})

type FormInput = z.infer<typeof zodSchema>
const validationSchema = toTypedSchema(zodSchema)

const initialValues = computed<FormInput>(() => ({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
}))

const { handleSubmit, isSubmitting } = useForm({
    validationSchema,
    initialValues,
})

const submitRegister = handleSubmit(async (values: any) => {
    loading.value = true
    email.value = values.email
    password.value = values.password
    fullName.value = values.fullName
    const phoneNumberRegex = /(\+\d+)\s(\d+)/;
    const matches = values.phoneNumber.match(phoneNumberRegex);

    if (matches) {
        country.value = matches[1]; // +91
        phoneNumber.value = matches[2]; // 123456789
    }
    try {
        const response = await axiosInstance.post('/api/register', {
            email: email.value,
            password: password.value,
            fullName: fullName.value,
            phoneNumber: phoneNumber.value,
            contry: contry.value,
        });

        console.log(response);


    } catch (e: any) {
        console.log('error', e)
        toast.error(e.message, {
            position: toast.POSITION.TOP_LEFT,
        });
    } finally {
        loading.value = false
    }
})

</script>


