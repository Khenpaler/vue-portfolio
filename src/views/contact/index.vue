<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import { useToast } from 'vue-toastification';

const toast = useToast();

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const loading = ref(false);
const error = ref('');
const success = ref(false);

const submitForm = async () => {
  loading.value = true;
  error.value = '';
  success.value = false;

  try {
    await emailjs.send(
      'service_t58sigm', // Replace with your EmailJS service ID
      'template_8ffwfkl', // Replace with your EmailJS template ID
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message,
      },
      'UNdNG9DNyX7rde5xm' // Replace with your EmailJS public key
    );
    
    success.value = true;
    formData.value = { name: '', email: '', subject: '', message: '' };
    toast.success("Message sent successfully!");
  } catch (e) {
    error.value = 'Failed to send message. Please try again later.';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="max-w-2xl mx-auto p-8">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Get in Touch</h1>
    
    <form @submit.prevent="submitForm" class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <label for="name" class="font-semibold text-gray-700 dark:text-gray-200">Name</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          required
          placeholder="Enter your name"
          class="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 bg-white dark:bg-gray-800 
                 border-gray-300 dark:border-gray-600
                 text-gray-900 dark:text-gray-100
                 placeholder-gray-500 dark:placeholder-gray-400"
        >
      </div>

      <div class="flex flex-col gap-2">
        <label for="email" class="font-semibold text-gray-700 dark:text-gray-200">Email</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          placeholder="Enter your email"
          class="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 bg-white dark:bg-gray-800 
                 border-gray-300 dark:border-gray-600
                 text-gray-900 dark:text-gray-100
                 placeholder-gray-500 dark:placeholder-gray-400"
        >
      </div>

      <div class="flex flex-col gap-2">
        <label for="subject" class="font-semibold text-gray-700 dark:text-gray-200">Subject</label>
        <input
          type="text"
          id="subject"
          v-model="formData.subject"
          required
          placeholder="Enter subject"
          class="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 bg-white dark:bg-gray-800 
                 border-gray-300 dark:border-gray-600
                 text-gray-900 dark:text-gray-100
                 placeholder-gray-500 dark:placeholder-gray-400"
        >
      </div>

      <div class="flex flex-col gap-2">
        <label for="message" class="font-semibold text-gray-700 dark:text-gray-200">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          required
          placeholder="Enter your message"
          rows="5"
          class="p-3 border rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                 bg-white dark:bg-gray-800 
                 border-gray-300 dark:border-gray-600
                 text-gray-900 dark:text-gray-100
                 placeholder-gray-500 dark:placeholder-gray-400"
        ></textarea>
      </div>

      <div v-if="error" class="text-red-500 text-center">{{ error }}</div>

      <button 
        type="submit" 
        :disabled="loading"
        class="bg-blue-500 dark:bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold 
               hover:bg-blue-600 dark:hover:bg-blue-700 
               transition-colors duration-300 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800
               disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ loading ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </div>
</template>