<template>
 <div class="min-h-screen bg-gray-50">
  <NavigationSection />
    <HeroSection />
    <QRTypesSection />
    <CustomizationSection />
    <AdvancedFeaturesSection />
   
    
    
  </div>
</template>
<script setup>
import NavigationSection from './components/principal/NavigationSection.vue';
import QrCode from './components/principal/QrCode.vue'
import AdvancedFeaturesSection from './components/principal/AdvancedFeaturesSection.vue';
import HeroSection from './components/principal/HeroSection.vue';
import QRTypesSection from './components/principal/QRTypesSection.vue';
import CustomizationSection from './components/principal/CustomizationSection.vue';




</script>