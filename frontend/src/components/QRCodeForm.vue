<!-- QRCodeForm.vue -->
<template>
  <div class="p-6 bg-white rounded-xl shadow-md max-w-lg mx-auto">
    <h2 class="text-2xl font-bold mb-4">Remplissez les informations</h2>

    <form @submit.prevent="submitForm">
      <!-- URL -->
      <div v-if="type.id === 'url'">
        <label class="block font-medium mb-1">Lien URL</label>
        <input v-model="formData.url" type="url" placeholder="https://exemple.com" class="input" required />
      </div>

      <!-- Wi-Fi -->
      <div v-else-if="type.id === 'wifi'">
        <label class="block font-medium mb-1">Nom du réseau (SSID)</label>
        <input v-model="formData.ssid" type="text" class="input" required />

        <label class="block font-medium mt-2 mb-1">Mot de passe</label>
        <input v-model="formData.password" type="text" class="input" />

        <label class="block font-medium mt-2 mb-1">Sécurité</label>
        <select v-model="formData.security" class="input">
          <option>WPA</option>
          <option>WEP</option>
          <option>None</option>
        </select>
      </div>

      <!-- Email -->
      <div v-else-if="type.id === 'email'">
        <label class="block font-medium mb-1">Adresse email</label>
        <input v-model="formData.email" type="email" class="input" required />

        <label class="block font-medium mt-2 mb-1">Sujet</label>
        <input v-model="formData.subject" type="text" class="input" />

        <label class="block font-medium mt-2 mb-1">Message</label>
        <textarea v-model="formData.message" class="input"></textarea>
      </div>

      <!-- Autres types... -->

      <!-- Couleur & fond -->
      <div class="mt-4 flex gap-4">
        <div>
          <label class="block font-medium mb-1">Couleur</label>
          <input v-model="formData.color" type="color" />
        </div>
        <div>
          <label class="block font-medium mb-1">Fond</label>
          <input v-model="formData.background" type="color" />
        </div>
      </div>

      <!-- Bouton -->
      <button type="submit" class="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Générer QR Code
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  type: { type: Object, required: true }
})

const emit = defineEmits(['next'])

const formData = ref({
  url: '',
  ssid: '',
  password: '',
  security: 'WPA',
  email: '',
  subject: '',
  message: '',
  color: '#000000',
  background: '#ffffff'
})

async function submitForm() {
  // Préparer les données selon le type
  let text = ''

  if (props.type.id === 'url') {
    text = formData.value.url
  }
  else if (props.type.id === 'wifi') {
    text = `WIFI:S:${formData.value.ssid};T:${formData.value.security};P:${formData.value.password};;`
  }
  else if (props.type.id === 'email') {
    text = `mailto:${formData.value.email}?subject=${formData.value.subject}&body=${formData.value.message}`
  }

  // Appeler ton API backend
  const res = await fetch('http://localhost:3000/api/qr/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text,
      color: formData.value.color,
      background: formData.value.background
    })
  })

  const blob = await res.blob()
  const qrCodeUrl = URL.createObjectURL(blob)

  emit('next', qrCodeUrl) // Passe au step 3
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 0.375rem;
}
</style>
