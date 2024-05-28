<script setup lang="ts">
import {Button} from '@/components/ui/button';
import {Icon} from "@iconify/vue";
</script>

<template>
  <div class="flex flex-col w-64 h-full p-3">
    <Button variant="secondary" class="flex items-center p-4 mb-4">
      <Icon icon="bi:calendar-plus" class="w-6 h-6 mr-2"/>
      <span>Join group</span>
    </Button>
    <Button class="flex items-center p-3 mb-3">
     <Icon icon="bi:calendar2" class="w-6 h-6 mr-2"/>
      <span>SIPIA</span>
    </Button>
    <Button class="flex items-center p-4 mb-3">
      <Icon icon="bi:calendar2" class="w-6 h-6 mr-2"/>
      <span>UPP</span>
    </Button>
    <Button class="flex items-center p-4 mb-3">
      <Icon icon="bi:calendar2" class="w-6 h-6 mr-2"/>
      <span>IS</span>
    </Button>
  </div>
</template>