<template>
  <section class="py-16 px-4 max-w-7xl mx-auto">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Types de QR codes disponibles</h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(type, index) in qrTypes" :key="index" 
           class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <div class="text-4xl mb-4 text-blue-500">{{ type.icon }}</div>
        <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ type.title }}</h3>
        <p class="text-gray-600">{{ type.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const qrTypes = [
  { icon: '🔗', title: 'Lien URL', description: 'Redirige vers un site web ou une page spécifique' },
  { icon: '📞', title: 'Numéro de téléphone', description: 'Appel direct depuis un mobile' },
  { icon: '📧', title: 'Email', description: 'Ouvre le client mail avec destinataire pré-rempli' },
  { icon: '💬', title: 'Message SMS', description: 'Pré-rempli avec numéro et message' },
  { icon: '📶', title: 'Connexion Wi-Fi', description: 'Se connecte automatiquement au réseau' },
  { icon: '👤', title: 'Carte de visite', description: 'vCard ou MeCard pour contacts' },
  { icon: '📍', title: 'Localisation GPS', description: 'Ouvre la carte avec la position' },
  { icon: '📅', title: 'Événement', description: 'Ajout direct à l\'agenda' },
  { icon: '🧾', title: 'Texte brut', description: 'Affiche un texte ou données JSON' }
]
</script>