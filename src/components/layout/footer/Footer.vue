<template>
    <footer class="pb-4" :class="{ 'bg-gray-100 dark:bg-gray-800': true }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="pt-4 border-t text-center">
                <p class="text-primary dark:text-gray-300">&copy; {{ currentYear }} Khen Harold Paler. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

const currentYear = new Date().getFullYear();

</script>
