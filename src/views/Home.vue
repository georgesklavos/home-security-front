<template>
  <!-- Hero section -->
  <DeferredContent>
    <div class="grid grid-nogutter surface-section text-800" id="hero">
      <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span class="block text-6xl font-bold mb-1">Create the screens your</span>
          <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
          <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
          <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
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
      <div class="text-700 text-sm mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
      <div class="grid">
        <div class="col-12 md:col-4 mb-4 px-5" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-desktop text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium">Built for Developers</div>
          <span class="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-lock text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium" id="feature">End-to-End
            Encryption</div>
          <span class="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere
            sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-check-circle text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium">Easy to Use</div>
          <span class="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque
            volutpat ac tincidunt vitae semper.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-globe text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium">Fast & Global Support</div>
          <span class="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum
            tellus.</span>
        </div>
        <div class="col-12 md:col-4 mb-4 px-5" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-github text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium">Open Source</div>
          <span class="text-700 text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec
            adipiscing tristique risus nec feugiat. </span>
        </div>
        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3" id="feature">
          <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
            <i class="pi pi-shield text-4xl text-blue-500"></i>
          </span>
          <div class="text-900 mb-3 font-medium">Trusted Securitty</div>
          <span class="text-700 text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus
            metus aliquam eleifend.</span>
        </div>
      </div>
    </div>
  </DeferredContent>

  <!-- Pricing section -->

  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
    <div class="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Velit numquam eligendi quos.</div>

    <div class="grid">
      <div class="col-12 lg:col-4">
        <div class="p-3 h-full">
          <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
            <div class="text-900 font-medium text-xl mb-2">Basic</div>
            <div class="text-600">Plan description</div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="flex align-items-center">
              <span class="font-bold text-2xl text-900">$9</span>
              <span class="ml-2 font-medium text-600">per month</span>
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <ul class="list-none p-0 m-0 flex-grow-1">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Arcu vitae elementum</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Dui faucibus in ornare</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Morbi tincidunt augue</span>
              </li>
            </ul>
            <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
            <Button label="Buy Now" class="p-3 w-full mt-auto"></Button>
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
              <span class="font-bold text-2xl text-900">$29</span>
              <span class="ml-2 font-medium text-600">per month</span>
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <ul class="list-none p-0 m-0 flex-grow-1">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Arcu vitae elementum</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Dui faucibus in ornare</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Morbi tincidunt augue</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Duis ultricies lacus sed</span>
              </li>
            </ul>
            <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
            <Button label="Buy Now" class="p-3 w-full"></Button>
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
              <span class="font-bold text-2xl text-900">$49</span>
              <span class="ml-2 font-medium text-600">per month</span>
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <ul class="list-none p-0 m-0 flex-grow-1">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Arcu vitae elementum</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Dui faucibus in ornare</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Morbi tincidunt augue</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Duis ultricies lacus sed</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Imperdiet proin</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Nisi scelerisque</span>
              </li>
            </ul>
            <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
            <Button label="Buy Now" class="p-3 w-full p-button-outlined"></Button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Join now section -->

  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
      <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
      <div class="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
      <div class="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam
        eligendi quos.</div>
      <div class="flex justify-content-center">

        <Card style="width: 25rem; margin-bottom: 2em" class="flex justify-content-center">
          <template #title>
            Contacts us
          </template>
          <template #content>
            <div class="grid flex-column">
              <div class="col">
                <div class="grid">
                  <div class="col label">
                    <label>First name:</label>
                  </div>
                  <div class="col">
                    <InputText type="text" v-model="contactData.firstName"></InputText>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="grid">
                  <div class="col label">
                    <label>Last name:</label>
                  </div>
                  <div class="col">
                    <InputText type="text" v-model="contactData.lastName"></InputText>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="grid">
                  <div class="col label">
                    <label>Email:</label>
                  </div>
                  <div class="col">
                    <InputText type="email" v-model="contactData.email"></InputText>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <template #footer>
            <div class="flex justify-content-end">
              <Button label="Contact" style="width: 40%" @click="contact" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      contactData: {
        firstName: "",
        lastName: "",
        email: ""
      }
    }
  },
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
    contact() {

      this.contactData = {};
    }
  }
};
</script>

<style scoped>
#hero {
  overflow-y: hidden;
}
</style>