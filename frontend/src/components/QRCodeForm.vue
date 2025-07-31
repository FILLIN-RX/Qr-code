<!-- QRFormPage.vue -->
<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-2xl mx-auto px-4">
      <!-- Header with progress -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-6">
          <button 
            @click="goBack"
            class="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Retour
          </button>
          
          <div class="text-sm text-gray-500">
            Étape 2 sur 3
          </div>
        </div>

        <!-- Progress bar -->
        <div class="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div class="bg-blue-500 h-2 rounded-full transition-all duration-300" style="width: 66.67%"></div>
        </div>

        <!-- Title and selected type -->
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">
            Configurez votre QR Code
          </h1>
          <div class="flex items-center justify-center space-x-3 mb-6">
            <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
              <div v-if="selectedType.icon.includes('svg')" v-html="selectedType.icon" class="w-4 h-4"></div>
              <span v-else class="text-sm">{{ selectedType.icon }}</span>
            </div>
            <span class="text-lg text-gray-700">{{ selectedType.title }}</span>
          </div>
        </div>
      </div>

      <!-- Main form card -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <form @submit.prevent="handleSubmit">
          
          <!-- URL Form -->
          <div v-if="selectedType.id === 'url'" class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                URL du site web *
              </label>
              <input 
                v-model="formData.url" 
                type="url" 
                placeholder="https://exemple.com" 
                class="form-input"
                required 
              />
              <p class="text-xs text-gray-500 mt-1">
                Assurez-vous que l'URL commence par http:// ou https://
              </p>
            </div>
          </div>

          <!-- Wi-Fi Form -->
          <div v-else-if="selectedType.id === 'wifi'" class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Nom du réseau (SSID) *
              </label>
              <input 
                v-model="formData.ssid" 
                type="text" 
                placeholder="Mon_WiFi"
                class="form-input"
                required 
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Mot de passe
              </label>
              <input 
                v-model="formData.password" 
                type="password" 
                placeholder="Mot de passe du réseau"
                class="form-input"
              />
              <p class="text-xs text-gray-500 mt-1">
                Laissez vide si le réseau n'a pas de mot de passe
              </p>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Type de sécurité
              </label>
              <select v-model="formData.security" class="form-input">
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">Aucune sécurité</option>
              </select>
            </div>
          </div>

          <!-- Email Form -->
          <div v-else-if="selectedType.id === 'email'" class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Adresse email *
              </label>
              <input 
                v-model="formData.email" 
                type="email" 
                placeholder="contact@exemple.com"
                class="form-input"
                required 
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Sujet
              </label>
              <input 
                v-model="formData.subject" 
                type="text" 
                placeholder="Sujet du message"
                class="form-input"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea 
                v-model="formData.message" 
                placeholder="Tapez votre message ici..."
                rows="4"
                class="form-input resize-none"
              ></textarea>
            </div>
          </div>

          <!-- vCard Form -->
          <div v-else-if="selectedType.id === 'vcard'" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Prénom *
                </label>
                <input 
                  v-model="formData.firstName" 
                  type="text" 
                  placeholder="Jean"
                  class="form-input"
                  required 
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Nom *
                </label>
                <input 
                  v-model="formData.lastName" 
                  type="text" 
                  placeholder="Dupont"
                  class="form-input"
                  required 
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Entreprise
              </label>
              <input 
                v-model="formData.company" 
                type="text" 
                placeholder="Mon Entreprise"
                class="form-input"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input 
                  v-model="formData.phone" 
                  type="tel" 
                  placeholder="+33 6 12 34 56 78"
                  class="form-input"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  v-model="formData.email" 
                  type="email" 
                  placeholder="jean.dupont@exemple.com"
                  class="form-input"
                />
              </div>
            </div>
          </div>

          <!-- WhatsApp Form -->
          <div v-else-if="selectedType.id === 'whatsapp'" class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Numéro de téléphone *
              </label>
              <input 
                v-model="formData.phone" 
                type="tel" 
                placeholder="+33612345678"
                class="form-input"
                required 
              />
              <p class="text-xs text-gray-500 mt-1">
                Format international avec l'indicatif pays (ex: +33 pour la France)
              </p>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Message pré-rempli
              </label>
              <textarea 
                v-model="formData.message" 
                placeholder="Bonjour, je vous contacte via votre QR Code..."
                rows="3"
                class="form-input resize-none"
              ></textarea>
            </div>
          </div>

          <!-- Generic text form for other types -->
          <div v-else class="space-y-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">
                Contenu *
              </label>
              <textarea 
                v-model="formData.text" 
                placeholder="Entrez le contenu de votre QR Code..."
                rows="4"
                class="form-input resize-none"
                required
              ></textarea>
            </div>
          </div>

          <!-- Customization Section -->
          <div class="mt-8 pt-8 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">
              Personnalisation
            </h3>
            
            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Couleur du QR Code
                </label>
                <div class="flex items-center space-x-3">
                  <input 
                    v-model="formData.color" 
                    type="color" 
                    class="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
                  />
                  <span class="text-sm text-gray-600 font-mono">{{ formData.color }}</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Couleur de fond
                </label>
                <div class="flex items-center space-x-3">
                  <input 
                    v-model="formData.background" 
                    type="color" 
                    class="w-12 h-12 rounded-lg border-2 border-gray-300 cursor-pointer"
                  />
                  <span class="text-sm text-gray-600 font-mono">{{ formData.background }}</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Navigation buttons -->
      <div class="flex justify-between items-center">
        <button 
          @click="goBack"
          class="btn-secondary"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Précédent
        </button>

        <button 
          @click="handleSubmit"
          :disabled="!isFormValid || isLoading"
          class="btn-primary"
          :class="{ 'opacity-50 cursor-not-allowed': !isFormValid || isLoading }"
        >
          <span v-if="isLoading" class="flex items-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Génération...
          </span>
          <span v-else class="flex items-center">
            Générer le QR Code
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  selectedType: { type: Object, required: true }
})

const emit = defineEmits(['go-back', 'qr-generated'])

const isLoading = ref(false)

const formData = ref({
  // URL
  url: '',
  
  // Wi-Fi
  ssid: '',
  password: '',
  security: 'WPA',
  
  // Email
  email: '',
  subject: '',
  message: '',
  
  // vCard
  firstName: '',
  lastName: '',
  company: '',
  phone: '',
  
  // WhatsApp
  // phone and message already defined above
  
  // Generic
  text: '',
  
  // Customization
  color: '#000000',
  background: '#ffffff'
})

const isFormValid = computed(() => {
  const type = props.selectedType.id
  
  switch (type) {
    case 'url':
      return formData.value.url.trim() !== ''
    case 'wifi':
      return formData.value.ssid.trim() !== ''
    case 'email':
      return formData.value.email.trim() !== ''
    case 'vcard':
      return formData.value.firstName.trim() !== '' && formData.value.lastName.trim() !== ''
    case 'whatsapp':
      return formData.value.phone.trim() !== ''
    default:
      return formData.value.text.trim() !== ''
  }
})

const goBack = () => {
  emit('go-back')
}

const generateQRText = () => {
  const type = props.selectedType.id
  
  switch (type) {
    case 'url':
      return formData.value.url
      
    case 'wifi':
      return `WIFI:S:${formData.value.ssid};T:${formData.value.security};P:${formData.value.password};;`
      
    case 'email':
      const subject = formData.value.subject ? `?subject=${encodeURIComponent(formData.value.subject)}` : ''
      const body = formData.value.message ? `${subject ? '&' : '?'}body=${encodeURIComponent(formData.value.message)}` : ''
      return `mailto:${formData.value.email}${subject}${body}`
      
    case 'vcard':
      return `BEGIN:VCARD
VERSION:3.0
FN:${formData.value.firstName} ${formData.value.lastName}
N:${formData.value.lastName};${formData.value.firstName};;;
${formData.value.company ? `ORG:${formData.value.company}` : ''}
${formData.value.phone ? `TEL:${formData.value.phone}` : ''}
${formData.value.email ? `EMAIL:${formData.value.email}` : ''}
END:VCARD`
      
    case 'whatsapp':
      const message = formData.value.message ? `?text=${encodeURIComponent(formData.value.message)}` : ''
      return `https://wa.me/${formData.value.phone.replace(/[^0-9]/g, '')}${message}`
      
    default:
      return formData.value.text
  }
}

const handleSubmit = async () => {
  if (!isFormValid.value || isLoading.value) return
  
  isLoading.value = true
  
  try {
    const qrText = generateQRText()
    
    // Call your API here
    const response = await fetch('http://localhost:3000/api/qr/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: qrText,
        color: formData.value.color,
        background: formData.value.background
      })
    })
    
    if (!response.ok) {
      throw new Error('Erreur lors de la génération du QR Code')
    }
    
    const blob = await response.blob()
    const qrCodeUrl = URL.createObjectURL(blob)
    
    emit('qr-generated', {
      url: qrCodeUrl,
      type: props.selectedType,
      data: formData.value
    })
  } catch (error) {
    console.error('Erreur:', error)
    // Handle error - you might want to show a toast or error message
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.form-input {
  @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 placeholder-gray-500;
}

.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center;
}

.btn-secondary {
  @apply bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center;
}

/* Loading animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>