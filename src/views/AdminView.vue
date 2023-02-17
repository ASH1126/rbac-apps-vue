<script setup>
import Header from "./../components/admin/Header.vue"
import SideMenu from "../components/admin/SideMenu.vue"
import Footer from "../components/admin/Footer.vue"
</script>

<template>
  <div class="main-wrapper">
    <Header />
    <SideMenu />
    <div class="main-content">
      <section class="section">
        <div class="section-header">
          <h1>Blank Page</h1>
        </div>

        <div class="section-body">
        </div>
      </section>
      <!-- <router-view /> -->
    </div>
    <Footer />
  </div>
</template>
