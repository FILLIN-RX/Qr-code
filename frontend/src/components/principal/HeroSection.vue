<!-- HeroSection.vue -->
<template>
  <section class="bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 text-white min-h-screen flex items-center pt-16">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16">

      <!-- Texte principal -->
      <div class="lg:w-1/2 space-y-8">
        <div class="space-y-4">
          <span class="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
            QrCode Pro
          </span>
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight">
            Générez vos QR codes 
            <span class="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              professionnels
            </span> 
            en 1 clic
          </h1>
        </div>
        
        <p class="text-xl opacity-90 leading-relaxed max-w-lg">
          Personnalisez le style, ajoutez votre logo, suivez les scans avec notre plateforme intuitive.
          <br>
          <span class="font-bold text-yellow-300 text-2xl">Gratuit. Rapide. Illimité.</span>
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <ButtonPro 
            content="Créer un QR Code" 
            colors="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 font-bold text-lg shadow-xl" 
          />
          <ButtonPro 
            content="Voir les fonctionnalités" 
            colors="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30 font-semibold" 
          />
        </div>

        <!-- Stats ou features -->
        <div class="flex items-center space-x-8 pt-8 opacity-80">
          <div class="text-center">
            <div class="text-2xl font-bold text-yellow-300">500K+</div>
            <div class="text-sm">QR Codes créés</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-yellow-300">50+</div>
            <div class="text-sm">Pays</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-yellow-300">99%</div>
            <div class="text-sm">Satisfaction</div>
          </div>
        </div>
      </div>

      <!-- Mockup téléphone avec QR Code -->
      <div class="lg:w-1/2 flex justify-center relative">
        <!-- Effets de background -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl transform scale-150"></div>
        
        <!-- Téléphone -->
        <div class="relative bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-800 w-72 h-[580px] p-6 flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-500">
          
          <!-- Écran du téléphone -->
          <div class="bg-gray-50 rounded-[1.5rem] w-full h-full p-6 flex flex-col items-center justify-center space-y-6">
            
            <!-- En-tête de l'app -->
            <div class="w-full text-center">
              <h3 class="text-gray-800 font-bold text-lg">QrCode Pro</h3>
              <p class="text-gray-500 text-sm">Scannez pour tester</p>
            </div>

            <!-- QR Code SVG intégré -->
            <div class="bg-white p-4 rounded-xl shadow-lg">
              <svg width="180" height="180" viewBox="0 0 180 180" class="rounded-lg">
                <rect width="180" height="180" fill="white"/>
                
                <!-- QR Code pattern simplifié mais plus détaillé -->
                <g fill="black">
                  <!-- Coins de position principaux -->
                  <rect x="10" y="10" width="35" height="35"/>
                  <rect x="135" y="10" width="35" height="35"/>
                  <rect x="10" y="135" width="35" height="35"/>
                  
                  <!-- Centres des coins (blancs) -->
                  <rect x="15" y="15" width="25" height="25" fill="white"/>
                  <rect x="140" y="15" width="25" height="25" fill="white"/>
                  <rect x="15" y="140" width="25" height="25" fill="white"/>
                  
                  <!-- Centres des centres (noirs) -->
                  <rect x="22" y="22" width="11" height="11"/>
                  <rect x="147" y="22" width="11" height="11"/>
                  <rect x="22" y="147" width="11" height="11"/>
                  
                  <!-- Patterns de données simulés -->
                  <rect x="60" y="10" width="5" height="5"/>
                  <rect x="70" y="10" width="5" height="5"/>
                  <rect x="80" y="10" width="5" height="5"/>
                  <rect x="90" y="10" width="5" height="5"/>
                  <rect x="100" y="10" width="5" height="5"/>
                  <rect x="110" y="10" width="5" height="5"/>
                  
                  <rect x="10" y="60" width="5" height="5"/>
                  <rect x="10" y="70" width="5" height="5"/>
                  <rect x="10" y="80" width="5" height="5"/>
                  <rect x="10" y="90" width="5" height="5"/>
                  <rect x="10" y="100" width="5" height="5"/>
                  <rect x="10" y="110" width="5" height="5"/>
                  
                  <!-- Pattern central -->
                  <rect x="80" y="80" width="20" height="20"/>
                  <rect x="85" y="85" width="10" height="10" fill="white"/>
                  <rect x="88" y="88" width="4" height="4"/>
                  
                  <!-- Données aléatoires -->
                  <rect x="60" y="60" width="5" height="5"/>
                  <rect x="70" y="65" width="5" height="5"/>
                  <rect x="110" y="60" width="5" height="5"/>
                  <rect x="120" y="65" width="5" height="5"/>
                  <rect x="60" y="110" width="5" height="5"/>
                  <rect x="70" y="115" width="5" height="5"/>
                  <rect x="110" y="110" width="5" height="5"/>
                  <rect x="120" y="115" width="5" height="5"/>
                  
                  <!-- Plus de détails -->
                  <rect x="55" y="55" width="3" height="3"/>
                  <rect x="125" y="55" width="3" height="3"/>
                  <rect x="55" y="125" width="3" height="3"/>
                  <rect x="125" y="125" width="3" height="3"/>
                </g>
              </svg>
            </div>

            <!-- Call to action -->
            <div class="text-center space-y-2">
              <p class="text-gray-800 font-semibold text-lg">Scannez-moi ! 📱</p>
              <p class="text-gray-500 text-sm">Testez notre technologie</p>
            </div>

            <!-- Indicateurs de fonctionnalités -->
            <div class="flex space-x-4 text-xs text-gray-400">
              <span>✓ HD Quality</span>
              <span>✓ Customizable</span>
              <span>✓ Analytics</span>
            </div>
          </div>
          
          <!-- Notch du téléphone -->
          <div class="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full w-16 h-1"></div>
        </div>
      </div>

    </div>

    <!-- Trusted by section -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center opacity-60">
      <p class="text-sm mb-4">Trusted by more than 100,000 developers worldwide</p>
      <div class="flex items-center space-x-8 text-xs">
        <span class="bg-white/10 px-3 py-1 rounded">Google</span>
        <span class="bg-white/10 px-3 py-1 rounded">Microsoft</span>
        <span class="bg-white/10 px-3 py-1 rounded">Amazon</span>
        <span class="bg-white/10 px-3 py-1 rounded">Meta</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPro from './ButtonPro.vue';
</script>