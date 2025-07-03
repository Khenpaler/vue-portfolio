<template>
  <section class="mt-16">
    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center dark:text-white">Technologies & Tools</h2>
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
      <div v-for="tech in technologies" :key="tech.name" class="flex flex-col items-center group">
        <img
          :src="tech.img"
          :alt="tech.name"
          class="w-16 h-16 object-contain mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl"
        />
        <span class="text-xs md:text-sm text-center dark:text-gray-200">{{ tech.name }}</span>
      </div>
    </div>
    <!-- Future: Add upload button here for admin use -->
  </section>
</template>

<script setup lang="ts">
import HTML from '@/assets/about/technologies/html.svg'
import CSS from '@/assets/about/technologies/css.svg'
import JavaScript from '@/assets/about/technologies/javascript.svg'
import C from '@/assets/about/technologies/c.svg'
import Python from '@/assets/about/technologies/python.svg'
import Java from '@/assets/about/technologies/java.svg'
import PHP from '@/assets/about/technologies/php.svg'
import Nextjs from '@/assets/about/technologies/nextjs.svg'
import ReactNative from '@/assets/about/technologies/react-native.svg'
import Firebase from '@/assets/about/technologies/firebase.svg'
import Tailwind from '@/assets/about/technologies/tailwindcss.svg'
import Vue from '@/assets/about/technologies/vue.svg'
import Django from '@/assets/about/technologies/django.svg'
import Laravel from '@/assets/about/technologies/laravel.svg'
import Flutter from '@/assets/about/technologies/flutter.svg'
import PostgreSQL from '@/assets/about/technologies/postgreSQL.svg'
import MySQL from '@/assets/about/technologies/mySQL.svg'
import Git from '@/assets/about/technologies/git.svg'
import GitHub from '@/assets/about/technologies/github.svg'
import Docker from '@/assets/about/technologies/docker.svg'
import Ngrok from '@/assets/about/technologies/ngrok.svg'
import Pusher from '@/assets/about/technologies/pusher.svg'
import Flespi from '@/assets/about/technologies/flespi.png'
import Figma from '@/assets/about/technologies/figma.svg'
import Canva from '@/assets/about/technologies/canva.svg'
import Capcut from '@/assets/about/technologies/capcut.svg'

const technologies = [
  {
    name: 'HTML',
    img: HTML,
  },
  {
    name: 'CSS',
    img: CSS,
  },
  {
    name: 'JavaScript',
    img: JavaScript,
  },
  {
    name: 'C',
    img: C,
  },
  {
    name: 'Python',
    img: Python,
  },
  {
    name: 'Java',
    img: Java,
  },
  {
    name: 'PHP',
    img: PHP,
  },
  {
    name: 'Next.js',
    img: Nextjs,
  },
  {
    name: 'React Native',
    img: ReactNative,
  },
  {
    name: 'Firebase',
    img: Firebase,
  },
  {
    name: 'Tailwind CSS',
    img: Tailwind,
  },
  {
    name: 'Vue.js',
    img: Vue,
  },
  {
    name: 'Django',
    img: Django,
  },
  {
    name: 'Laravel',
    img: Laravel,
  },
  {
    name: 'Flutter',
    img: Flutter,
  },
  {
    name: 'PostgreSQL',
    img: PostgreSQL,
  },
  {
    name: 'MySQL',
    img: MySQL,
  },
  {
    name: 'Git',
    img: Git,
  },
  {
    name: 'GitHub',
    img: GitHub,
  },
  {
    name: 'Docker',
    img: Docker,
  },
  {
    name: 'Ngrok',
    img: Ngrok,
  },
  {
    name: 'Pusher',
    img: Pusher,
  },
  {
    name: 'Flespi',
    img: Flespi,
  },
  {
    name: 'Figma',
    img: Figma,
  },
  {
    name: 'Canva',
    img: Canva,
  },
  {
    name: 'Capcut',
    img: Capcut,
  },
]
</script> 