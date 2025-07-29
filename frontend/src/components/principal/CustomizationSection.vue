<template>
  <section class="py-16 px-4 max-w-7xl mx-auto bg-blue-50 rounded-3xl my-12">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Options de personnalisation</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(option, index) in customizationOptions" :key="index" 
           class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div class="text-3xl mb-4 text-blue-500">{{ option.icon }}</div>
        <h3 class="text-lg font-semibold mb-2 text-gray-800">{{ option.title }}</h3>
        <p class="text-gray-600 text-sm">{{ option.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const customizationOptions = [
  { icon: '🎨', title: 'Couleurs', description: 'Personnalisez la couleur de fond et des points' },
  { icon: '📐', title: 'Taille', description: 'Ajustez la taille en pixels selon vos besoins' },
  { icon: '🔳', title: 'Formes', description: 'Carrés, cercles ou formes personnalisées' },
  { icon: '🖼️', title: 'Logo', description: 'Ajoutez votre logo au centre du QR code' },
  { icon: '🖍️', title: 'Style', description: 'Carré, arrondi, dégradé et plus' },
  { icon: '🌐', title: 'Format', description: 'Export en PNG, SVG ou Base64' },
  { icon: '🎭', title: 'Fond transparent', description: 'Idéal pour vos designs' },
  { icon: '🔄', title: 'Prévisualisation', description: 'Voir le résultat en temps réel' }
]
</script>