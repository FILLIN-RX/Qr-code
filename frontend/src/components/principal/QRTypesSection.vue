<template>
  <section class="py-16 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto" v-if="step === 1">
      <!-- Header -->
      <div class="text-center mb-12" >
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          1. Sélectionnez un type de code QR
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Choisissez le type de QR code qui correspond à vos besoins parmi notre large sélection
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Grid des types QR -->
        <div class="flex-1">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="(type, index) in qrTypes" :key="index" 
                 @click="selectQRType(type),goToStep2()"
                 :class="[
                   'relative bg-white rounded-lg border-2 p-4 cursor-pointer transition-all duration-200',
                   selectedType?.id === type.id 
                     ? 'border-blue-500 bg-blue-50 shadow-md' 
                     : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                 ]">
              
              <!-- Icône -->
              <div class="flex justify-center mb-3">
                <div :class="[
                  'w-12 h-12 rounded-lg flex items-center justify-center transition-colors',
                  selectedType?.id === type.id 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-blue-500'
                ]">
                  <div v-if="type.icon.includes('svg')" v-html="type.icon" class="w-6 h-6"></div>
                  <span v-else class="text-xl">{{ type.icon }}</span>
                </div>
              </div>
              
              <!-- Titre -->
              <h3 class="text-sm font-semibold text-center text-gray-900 mb-1">
                {{ type.title }}
              </h3>
              
              <!-- Description -->
              <p class="text-xs text-gray-600 text-center leading-tight">
                {{ type.description }}
              </p>
              
              <!-- Badge populaire -->
              <div v-if="type.popular" class="absolute -top-1 -right-1">
                <span class="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  ⭐
                </span>
              </div>
              
              <!-- Indicateur de sélection -->
              <div v-if="selectedType?.id === type.id" 
                   class="absolute top-2 right-2">
                <div class="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Téléphone avec aperçu -->
        <div class="lg:w-80 flex justify-center">
          <div class="relative">
            <!-- Téléphone -->
            <div class="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
              <div class="bg-black rounded-[2rem] p-1">
                <div class="bg-white rounded-[1.5rem] overflow-hidden" style="width: 280px; height: 580px;">
                  
                  <!-- Status bar -->
                  <div class="bg-white px-6 py-2 flex justify-between items-center">
                    <span class="text-sm font-semibold">9:41</span>
                    <div class="flex items-center space-x-1">
                      <div class="flex space-x-1">
                        <div class="w-1 h-1 bg-black rounded-full"></div>
                        <div class="w-1 h-1 bg-black rounded-full"></div>
                        <div class="w-1 h-1 bg-black rounded-full"></div>
                        <div class="w-1 h-1 bg-gray-400 rounded-full"></div>
                      </div>
                      <svg class="w-4 h-4" fill="black" viewBox="0 0 24 24">
                        <path d="M2 17h20v2H2zm1.15-4.05L4 11l.85 1.95L7 13l-1.15.05zm3.82-2.13l1.38-1.38c.09.46.27.91.54 1.3l-1.3 1.3c-.4-.27-.84-.45-1.3-.54z"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Contenu de l'écran -->
                  <div class="px-6 py-4 h-full bg-gray-50">
                    <div class="text-center mb-6">
                      <h3 class="text-lg font-bold text-gray-900 mb-2">
                        Sélectionnez un type de<br>code QR sur la gauche
                      </h3>
                    </div>

                    <!-- QR Code Preview -->
                    <div class="flex justify-center mb-6">
                      <div class="bg-white p-4 rounded-2xl shadow-lg border-2 border-gray-100">
                        <div class="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                          <div v-if="selectedType" class="text-center">
                            <!-- QR Code simulé -->
                            <div class="w-28 h-28 bg-black rounded-lg relative overflow-hidden">
                              <!-- Pattern QR code simulé -->
                              <div class="absolute inset-2 bg-white rounded-sm">
                                <div class="grid grid-cols-8 gap-0.5 h-full w-full p-1">
                                  <div v-for="i in 64" :key="i" 
                                       :class="Math.random() > 0.5 ? 'bg-black' : 'bg-white'"
                                       class="aspect-square rounded-[1px]"></div>
                                </div>
                                <!-- Logo au centre -->
                                <div class="absolute inset-0 flex items-center justify-center">
                                  <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                                    <div v-if="selectedType.icon.includes('svg')" 
                                         v-html="selectedType.icon" 
                                         class="w-4 h-4 text-blue-500"></div>
                                    <span v-else class="text-blue-500 text-xs">{{ selectedType.icon }}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div v-else class="text-gray-400 text-center">
                            <svg class="w-20 h-20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 4v6h6V4H4zm10 0v6h6V4h-6zM4 14v6h6v-6H4zm10 0v6h6v-6h-6z"/>
                            </svg>
                            <p class="text-xs">Aperçu QR Code</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Informations sur le type sélectionné -->
                    <div v-if="selectedType" class="bg-white rounded-xl p-4 shadow-sm">
                      <div class="flex items-center space-x-3 mb-3">
                        <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                          <div v-if="selectedType.icon.includes('svg')" v-html="selectedType.icon" class="w-5 h-5"></div>
                          <span v-else class="text-sm">{{ selectedType.icon }}</span>
                        </div>
                        <div>
                          <h4 class="font-semibold text-gray-900 text-sm">{{ selectedType.title }}</h4>
                          <p class="text-xs text-gray-600">{{ selectedType.description }}</p>
                        </div>
                      </div>
                      
                      <button @click="proceedToCreation" 
                              class="w-full bg-blue-500 text-white py-2.5 px-4 rounded-lg font-medium text-sm hover:bg-blue-600 transition-colors">
                        Créer ce QR Code
                      </button>
                    </div>
                    
                    <div v-else class="bg-white rounded-xl p-4 shadow-sm text-center">
                      <p class="text-sm text-gray-500 mb-3">Choisissez un type pour voir l'aperçu</p>
                      <button @click="$emit('create-qr-code', null)"
                              class="w-full bg-gray-300 text-gray-600 py-2.5 px-4 rounded-lg font-medium text-sm cursor-not-allowed">
                        Sélectionnez un type
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Bouton home -->
            <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <div class="w-12 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div v-if="step === 2" class="max-w-lg mx-auto">
      <QRCodeForm :selectedType="selectedType" @create-qr-code="$emit('create-qr-code', $event)" />
     </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import QRCodeForm from '../QRCodeForm.vue'
const step = ref(1)
// Définir les émissions d'événements
const emit = defineEmits(['qr-type-selected', 'create-qr-code'])

// État réactif
const selectedType = ref(null)

// Types de QR codes
const qrTypes = [
  { 
    id: 'url',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-2 0-9-1-9-9s7-9 9-9m0 9V3"/>
    </svg>`, 
    title: 'Site internet', 
    description: 'Renvoyez vers l\'URL de n\'importe quel site internet',
    popular: true 
  },
  { 
    id: 'pdf',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>`, 
    title: 'PDF', 
    description: 'Partagez un PDF' 
  },
  { 
    id: 'list',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
    </svg>`, 
    title: 'Liste de liens', 
    description: 'Partagez plusieurs liens' 
  },
  { 
    id: 'vcard',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>`, 
    title: 'vCard', 
    description: 'Partagez votre carte professionnelle électronique',
    popular: true 
  },
  { 
    id: 'business',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>`, 
    title: 'Entreprise', 
    description: 'Partagez des informations sur votre entreprise' 
  },
  { 
    id: 'video',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
    </svg>`, 
    title: 'Vidéo', 
    description: 'Partagez une vidéo' 
  },
  { 
    id: 'images',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>`, 
    title: 'Images', 
    description: 'Partagez plusieurs images' 
  },
  { 
    id: 'facebook',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>`, 
    title: 'Facebook', 
    description: 'Partagez votre page Facebook' 
  },
  { 
    id: 'instagram',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>`, 
    title: 'Instagram', 
    description: 'Partagez votre Instagram' 
  },
  { 
    id: 'social',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>`, 
    title: 'Réseaux sociaux', 
    description: 'Partagez vos réseaux sociaux' 
  },
  { 
    id: 'whatsapp',
    icon: `<svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>`, 
    title: 'WhatsApp', 
    description: 'Recevez des messages WhatsApp',
    popular: true 
  },
  { 
    id: 'audio',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728m-9.9-2.828a5 5 0 010-7.072M8.464 5.636a9 9 0 000 12.728M12 14a2 2 0 100-4 2 2 0 000 4z"/>
    </svg>`, 
    title: 'MP3', 
    description: 'Partagez un fichier audio' 
  },
  { 
    id: 'menu',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
    </svg>`, 
    title: 'Menu', 
    description: 'Créez un menu de restaurant' 
  },
  { 
    id: 'app',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
    </svg>`, 
    title: 'Applications', 
    description: 'Redirigez vers une boutique d\'applications' 
  },
  { 
    id: 'coupon',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 11-1-4V7a2 2 0 00-2-2H5z"/>
    </svg>`, 
    title: 'Bon de réduction', 
    description: 'Partagez un bon de réduction' 
  },
  { 
    id: 'wifi',
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
    </svg>`, 
    title: 'Wi-Fi', 
    description: 'Connectez-vous à un réseau Wi-Fi' 
  }
]

// Méthodes
const selectQRType = (type) => {
  selectedType.value = type
  emit('qr-type-selected', type)
}

const proceedToCreation = () => {
  emit('create-qr-code', selectedType.value)
}
function goToStep2() {
  if (selectedType.value) step.value = 2
}
</script>

<style scoped>
/* Animations fluides */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects professionnels */
.cursor-pointer:hover {
  transform: translateY(-1px);
}

/* Animation du QR code */
@keyframes qrGenerate {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

.grid > div {
  animation: qrGenerate 0.3s ease-out;
}

/* Responsive pour mobile */
@media (max-width: 768px) {
  .lg\:w-80 {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }
}
</style>