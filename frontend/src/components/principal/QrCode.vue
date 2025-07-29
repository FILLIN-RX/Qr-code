<template>
  <div class="container">
    <h1>Générateur de QR Code</h1>

    <form @submit.prevent="genererQR">
      <input v-model="text" type="text" placeholder="Texte ou URL" required />
      <input v-model="color" type="color" />
      <input v-model="background" type="color" />

      <button type="submit">Générer</button>
    </form>

    <div v-if="qrCode">
      <h2>QR Code généré :</h2>
      <img :src="qrCode" alt="QR Code" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
const color = ref('#000000')
const background = ref('#ffffff')
const qrCode = ref(null)

async function genererQR() {
  try {
    const res = await fetch('http://localhost:3000/api/qr/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: text.value,
        color: color.value,
        background: background.value
      })
    })

    const contentType = res.headers.get('Content-Type')

    if (contentType === 'image/png') {
      const blob = await res.blob()
      qrCode.value = URL.createObjectURL(blob)
    } else {
      const data = await res.json()
      alert(data.error || 'Erreur')
    }
  } catch (err) {
    console.error(err)
    alert('Erreur de connexion à l’API.')
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
}

input[type="text"] {
  width: 80%;
  padding: 0.5rem;
  margin: 1rem 0;
}

input[type="color"] {
  margin: 0 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  margin-top: 1rem;
}

img {
  margin-top: 1rem;
  max-width: 100%;
}
</style>
