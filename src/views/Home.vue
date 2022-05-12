<template>
  <!-- Hero section -->
  <DeferredContent>
    <div class="grid grid-nogutter surface-section text-800" id="hero">
      <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span class="block text-6xl font-bold mb-1">SKV alarm pro</span>
          <div class="text-6xl text-primary font-bold mb-3">You deserve to fill safe</div>
          <p class="mt-0 mb-4 text-700 line-height-3">The SKV alarm pro is a plug and play home alarm device to help you secure any environment</p>
        </section>
      </div>
      <div class="col-12 md:col-6 overflow-hidden fadeinright animation-duration-1000 animation-iteration-1">
        <img src="images/test.png" alt="Image" class="md:ml-auto block md:h-full"
          style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
      </div>
    </div>
  </DeferredContent>

  <!-- Features section -->

  <DeferredContent @load="loadFeatures">

    <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
      <div class="mb-3 font-bold text-2xl">
        <span class="text-900">One Product, </span>
        <span class="text-blue-600">Many Solutions</span>
      </div>
      <div class="grid">
        <div class="col-12 md:col-4 mb-4 px-5" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-desktop text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium">Built for everyone</div>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-lock text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium" id="feature">Password secured</div>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-check-circle text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium">Easy to Use</div>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-globe text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium">Fast & Global Support</div>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-github text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium">Open Source</div>
        </div>
        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-shield text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium">Trusted Securitty</div>
        </div>
      </div>
    </div>
  </DeferredContent>

  <!-- Pricing section -->

  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>

    <div class="grid">
      <div class="col-12 lg:col-4">
        <div class="p-3 h-full">
          <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
            <div class="text-900 font-medium text-xl mb-2">Basic</div>
            <div class="text-600">Plan description</div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="flex align-items-center">
              <span class="font-bold text-2xl text-900">$30</span>
              <span class="ml-2 font-medium text-600">one time payment</span>
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <ul class="list-none p-0 m-0 flex-grow-1">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>1 alarm device</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>24/7 support</span>
              </li>
            </ul>
            <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
            <a href="#contact" class="p-3 w-full mt-auto p-button p-component" style="place-content:center" >Buy Now</a>
          </div>
        </div>
      </div>

      <div class="col-12 lg:col-4">
        <div class="p-3 h-full">
          <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
            <div class="text-900 font-medium text-xl mb-2">Premium</div>
            <div class="text-600">Plan description</div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="flex align-items-center">
              <span class="font-bold text-2xl text-900">$40</span>
              <span class="ml-2 font-medium text-600">per month</span>
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <ul class="list-none p-0 m-0 flex-grow-1">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Up to 3 devices</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Unlimited connected users</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>24/7 suppport</span>
              </li>
            </ul>
            <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
           <a href="#contact" class="p-3 w-full mt-auto p-button p-component" style="place-content:center" >Buy Now</a>
          </div>
        </div>
      </div>

      <div class="col-12 lg:col-4">
        <div class="p-3 h-full">
          <div class="shadow-2 p-3 flex flex-column surface-card" style="border-radius: 6px">
            <div class="text-900 font-medium text-xl mb-2">Enterprise</div>
            <div class="text-600">Plan description</div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="flex align-items-center">
              <span class="font-bold text-2xl text-900">$60</span>
              <span class="ml-2 font-medium text-600">per month</span>
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <ul class="list-none p-0 m-0 flex-grow-1">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Up to 10 devices</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Unlimited connected devices</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>24/7 support</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Technical support at your premises</span>
              </li>
            </ul>
            <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
            <a href="#contact" class="p-3 w-full mt-auto p-button p-component" style="place-content:center" >Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Join now section -->

  <div id="contact" class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
      <div class="text-900 font-bold text-5xl mb-3">Join our community</div>
      <div class="text-700 text-2xl mb-5">You can join us by mailing our support to: <a href="mailto:skv.teamproject@gmail.com">skv.teamproject@gmail.com</a></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  methods: {
    loadFeatures() {
      //scalein animation-duration-1000 animation-iteration-1

      this.$nextTick(() => {
        const features = document.querySelectorAll('#feature');

        features.forEach(el => {
          el.classList.add('scalein', 'animation-duration-1000', 'animation-iteration-1');
        })
      });
    },
  }
};
</script>

<style scoped>
#hero {
  overflow-y: hidden;
}
</style>