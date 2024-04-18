<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ThemeSwitch from "@/components/settings/ThemeSwitch.vue";
import RegisterButton from "timetable-users-mfe/RegisterButton";
import LoginButton from "timetable-users-mfe/LoginButton";
import LogoutButton from "timetable-users-mfe/LogoutButton";
import {ref} from "vue";

let loggedIn = ref(true);
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList class="flex p-3 justify-between">
      <NavigationMenuItem>
        <NavigationMenuLink>
          <router-link to="/" :class="navigationMenuTriggerStyle()">Home</router-link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>
          <router-link to="/timetables" :class="navigationMenuTriggerStyle()">Timetables</router-link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink :class="navigationMenuTriggerStyle()">
          <router-link to="/groups">Groups</router-link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem v-if="!loggedIn">
        <RegisterButton />
      </NavigationMenuItem>
      <NavigationMenuItem v-if="loggedIn">
        <router-link :to="`/users/1`">
          <Avatar>
            <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </router-link>
      </NavigationMenuItem>
      <NavigationMenuItem v-if="!loggedIn">
        <LoginButton />
      </NavigationMenuItem>
      <NavigationMenuItem v-if="loggedIn">
        <LogoutButton />
      </NavigationMenuItem>
      <NavigationMenuItem>
        <ThemeSwitch/>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>