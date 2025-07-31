<!-- NavigationSection.vue -->
<template>
  <section>
    <nav class="bg-black h-16 fixed w-full text-white shadow-lg z-50">
      <div class="flex max-w-7xl mx-auto justify-between items-center h-full px-6">
        
        <!-- Logo + Liens -->
        <div class="flex items-center space-x-8">
          <div class="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            QrCode Pro
          </div>
          <div class="hidden lg:flex space-x-6">
            <router-link to="/" class="hover:text-blue-400 transition-colors">Catalog</router-link>
            <router-link to="/pricing" class="hover:text-blue-400 transition-colors">Pricing</router-link>
            <router-link to="/business" class="hover:text-blue-400 transition-colors">For Business</router-link>
          </div>
        </div>

        <!-- Boutons -->
        <div class="flex space-x-2">
          <ButtonPro 
            content="Sign in" 
            colors="bg-blue-600 text-white hover:bg-blue-700 border border-blue-500" 
          />
          <ButtonPro 
            content="Start now" 
            colors="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700" 
          />
        </div>

      </div>
    </nav>
  </section>
</template>

<script setup>
import ButtonPro from './ButtonPro.vue';
</script>