<template>
  <section class="py-16 px-4 max-w-7xl mx-auto">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Fonctionnalités avancées</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(feature, index) in advancedFeatures" :key="index" 
           class="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500">
        <div class="flex items-start mb-4">
          <div class="text-2xl mr-4 text-blue-500">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-800">{{ feature.title }}</h3>
        </div>
        <p class="text-gray-600 pl-10">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const advancedFeatures = [
  { 
    icon: '🚀', 
    title: 'QR codes dynamiques', 
    description: 'Modifiez le contenu après création sans changer le QR code' 
  },
  { 
    icon: '📊', 
    title: 'Statistiques de scans', 
    description: 'Suivez le nombre et la localisation des scans avec un compte utilisateur' 
  },
  { 
    icon: '⏳', 
    title: 'Expiration automatique', 
    description: 'Désactivez vos QR codes après une date ou un nombre de scans' 
  },
  { 
    icon: '🌍', 
    title: 'Redirection intelligente', 
    description: 'Redirigez selon la langue, le pays ou l\'appareil du scanneur' 
  },
  { 
    icon: '📁', 
    title: 'Contenu multiple', 
    description: 'Un QR code peut contenir PDF, images ou plusieurs liens' 
  },
  { 
    icon: '🔒', 
    title: 'Accès sécurisé', 
    description: 'Protégez vos QR codes avec mot de passe ou accès privé' 
  }
]
</script>