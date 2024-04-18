<script setup lang="ts">
import Navbar from "@/components/navigation/Navbar.vue";
import SideNav from "@/components/navigation/SideNav.vue";
import {Separator} from "@/components/ui/separator";

</script>

<template>
  <div class="flex flex-col h-screen">
    <div>
      <Navbar/>
      <Separator/>
    </div>

    <div class="flex-grow flex">
      <div class="w-64">
        <SideNav/>
      </div>

      <Separator orientation="vertical"/>

      <div class="flex-grow p-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
