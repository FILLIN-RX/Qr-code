<template>
  <section
    class="bg-blue-500 text-white h-screen items-center flex justify-center to to-blue-100"
  >
    <div class="py-10 px-4 max-w-7xl mx-auto flex  flex-col md:flex-row items-center gap-12">
      <div class="md:w-1/2">
        <h1
          class="text-4xl md:text-5xl font-bold  leading-tight mb-6"
        >
          Générez vos QR codes professionnels en 1 clic
        </h1>
        <p class="text-xl  mb-8">
          Personnalisez le style, ajoutez votre logo, suivez les scans.<br />
          <span class="font-semibold">Gratuit. Rapide. Illimité.</span>
        </p>
       <button-pro content="creer un"/>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <div class="">
          <img
            src="/src/assets/qrImage.jpeg"
            alt="Exemple de QR code personnalisé"
            class="w-50 h-50 rounded-xl shadow-2xl border-4"
          />
          <div class="absolute -inset-4 bg-blue-100 rounded-2xl -z-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPro from './ButtonPro.vue';
</script>
