<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-4xl font-bold text-center mb-12">
      My Projects
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
        @view-image="openModal(project.imageUrl)"
      />
    </div>

    <!-- Add Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" @click="closeModal">
      <div class="relative">
        <img 
          :src="selectedImage" 
          alt="Project Preview" 
          class="max-h-[90vh] max-w-[90vw] object-contain"
        >
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { ref } from 'vue';
import transittrackImage from '@/assets/projects/transittrack.png';
import eventwiseImage from '@/assets/projects/eventwise.png';
import pokusImage from '@/assets/projects/pokus.png';
import scholarAttendanceImage from '@/assets/projects/scholar-attendance.png';
import khenkentImage from '@/assets/projects/business_barber.png';
// Add state for modal
const selectedImage = ref<string | undefined>(undefined);
const isModalOpen = ref(false);

// Add functions to handle modal
const openModal = (imageUrl: string) => {
  selectedImage.value = imageUrl;
  isModalOpen.value = true;
};

const closeModal = () => {
  selectedImage.value = undefined;
  isModalOpen.value = false;
};

// Example projects data
const projects = [
    {
        title: "<b>TransitTrack</b>: CATRANCO Fleet Management System",
        description: "A fleet management system for Canitoan Transport Cooperative to track buses, employees, maintenance scheduling, and fuel monitoring.",
        imageUrl: transittrackImage,
        techStack: [
            {
                name: "Next.js",
            },
            {
                name: "Tailwindcss",
            },
            {
                name: "React Native",
            },
            {
                name: "Typescript",
            },
            {
                name: "Laravel",
            },
            {
                name: "MySQL",
            },
            {
                name: "Pusher",
            },
            {
                name: "Flespi",
            },
            {
                name: "Sinotrack",
            }

        ]
    },
    {
        title: "<b>Event Wise</b>",
        description: "A comprehensive event management system designed to handle the scheduling, organization, and tracking of events. It allows users to create, manage, and attend events, with features such as notifications, ticketing, and detailed event information.",
        imageUrl: eventwiseImage,
        techStack: [
            {
                name: "Next.js",
            },
            {
                name: "Tailwindcss",
            },
            {
                name: "React Native",
            },
            {
                name: "Laravel",
            }
        ]
    },
    {
        title: "<b>POKUS</b>: Student Companion",
        description: "An app to help students with study scheduling and time management.",
        imageUrl: pokusImage,
        techStack: [
            {
                name: "React Native",
            },
            {
                name: "Firebase",
            }
        ]
    },
    {
        title: "<b>Scholar Attendance Monitoring System</b>",
        description: "A system designed for monitoring student attendance, with functionalities for recording, tracking, and generating reports on student attendance patterns.",
        imageUrl: scholarAttendanceImage,
        techStack: [
            {
                name: "Lumen Laravel",
            }
        ]
    },
    {
        title: "<b>Kent & Kent's Barber Shop</b>",
        description: "A web-based system for managing barber shop operations, allowing users to schedule appointments, track services, and manage client information.",
        imageUrl: khenkentImage,
        techStack: [
            {
                name: "HTML",
            },
            {
                name: "CSS",
            },
            {
                name: "JavaScript",
            }
        ]
    }
  // Add more projects as needed
];
</script>
