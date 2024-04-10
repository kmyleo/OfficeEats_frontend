<template>
    <footer class="footer-background">
      <v-container>
        <v-row justify="space-between">
  
          <v-col cols="12" md="3">
            <v-card class="footer-card">
              <v-card-text>
                
                <h5 class="footer-heading">Explore OfficeEats</h5>
                <p>Explore a wide range of office-friendly meals and snacks. Perfect for meetings, late-night work sessions, or just a healthier office environment. OfficeEats offers convenience without compromise.</p>
                <!-- <div class="app-links">
                  <img src="~/assets/images/app-store.png" alt="Download on the App Store">
                  <img src="~/assets/images/google-play.png" alt="Download on Google Play">
                </div> -->
              </v-card-text>
            </v-card>
          </v-col>
  
          <v-col cols="12" md="3">
            <v-card class="footer-card">
              <v-card-text>
                <h5 class="footer-heading">About OfficeEats</h5>
                <nuxt-link to="/careers" class="footer-link">Careers</nuxt-link>
                <nuxt-link to="/stores" class="footer-link">Our Stores</nuxt-link>
                <nuxt-link to="/cares" class="footer-link">Our Cares</nuxt-link>
                <nuxt-link to="/terms-conditions" class="footer-link">Terms & Conditions</nuxt-link>
                <nuxt-link to="/privacy-policy" class="footer-link">Privacy Policy</nuxt-link>
              </v-card-text>
            </v-card>
          </v-col>
  
          <v-col cols="12" md="3">
            <v-card class="footer-card">
              <v-card-text>
                <h5 class="footer-heading">Customer Care</h5>
                <nuxt-link to="/help-center" class="footer-link">Help Center</nuxt-link>
                <nuxt-link to="/how-to-buy" class="footer-link">How to Buy</nuxt-link>
                <nuxt-link to="/track-order" class="footer-link">Track Your Order</nuxt-link>
                <nuxt-link to="/corporate-bulk-purchasing" class="footer-link">Corporate & Bulk Purchasing</nuxt-link>
                <nuxt-link to="/returns-refunds" class="footer-link">Returns & Refunds</nuxt-link>
              </v-card-text>
            </v-card>
          </v-col>
  
          <v-col cols="12" md="3">
            <v-card class="footer-card">
              <v-card-text>
                <h5 class="footer-heading">Contact Us</h5>
                <p>Email: support@officeeats.com</p>
                <p>Phone: +1 234 567 890</p>
                <!-- Social Media Icons -->
                <!-- Use v-btn and v-icon components for icons if using Vuetify -->
              </v-card-text>
            </v-card>
          </v-col>
  
        </v-row>
      </v-container>
    </footer>
  </template>
  
  <script>
  export default {
    // If you need any JavaScript, it would go here
  }
  </script>
  
  <style lang="scss">
  .footer-background {
    background-color: #f6f6f6; // Adjusted to the color from your image
    padding: 2rem 0;
    color: #ffffff;
  }
  
  .footer-card {
    background-color: #333333; // Darker card background color
    border-radius: 0; // Cards in your image don't seem to have border radius
  }
  
  .footer-heading {
    margin-bottom: 1rem;
  }
  
  .footer-link {
    display: block;
    color: #ffffff;
    margin-bottom: 0.5rem;
  
    &:hover {
      color: #000000;
      text-decoration: none;
    }
  }
  
  .app-links img {
    height: 40px;
    margin-right: 10px;
    vertical-align: middle;
  }
  
  // You can add styles for your social media icons here
  </style>
  
