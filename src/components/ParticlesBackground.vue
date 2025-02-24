<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { computed, watch } from 'vue'

const mode = useColorMode()

const backgroundColor = computed(() => mode.value === 'dark' ? '#1a1a1a' : '#ffffff')
const particleColor = computed(() => mode.value === 'dark' ? '#ffffff' : '#000000')

let particlesContainer: any = null

const particlesLoaded = async (container: any) => {
    particlesContainer = container
    console.log("Particles container loaded", container)
}

const particlesOptions = computed(() => ({
    background: {
        color: {
            value: backgroundColor.value
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push'
            },
            onHover: {
                enable: true,
                mode: 'repulse'
            },
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 100,
                duration: 0.4,
                speed: 1,
                factor: 100,
                easing: "ease-out-quad"
            }
        }
    },
    particles: {
        color: {
            value: particleColor.value
        },
        links: {
            color: particleColor.value,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 1,
            straight: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        },
        number: {
            density: {
                enable: true,
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle'
        },
        size: {
            value: { min: 1, max: 5 }
        }
    },
    detectRetina: true
}))

// Watch for color mode changes
watch(mode, () => {
    if (particlesContainer) {
        particlesContainer.options.background.color.value = backgroundColor.value
        particlesContainer.options.particles.color.value = particleColor.value
        particlesContainer.options.particles.links.color = particleColor.value
        
        // Refresh the particles
        particlesContainer.refresh()
    }
})
</script>

<template>
    <div id="app">
        <vue-particles
            id="tsparticles"
            @particles-loaded="particlesLoaded"
            :options="particlesOptions"
        />
    </div>
</template>