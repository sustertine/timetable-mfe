<script setup lang="ts">

import type {TimetableModel} from "@/components/timetables/model/timetable.model";
import Timetable from "@/components/timetables/Timetable.vue";

const exampleTimetable: TimetableModel = {
  id: 1,
  title: 'Example Timetable',
  description: 'This is an example timetable.',
  groupId: 'group1',
  entries: [
    {
      id: 1,
      title: 'Math Class',
      description: 'Calculus 101',
      startTime: new Date(2024, 4, 13, 7, 0),
      endTime: new Date(2024, 4, 13, 9, 0),
    },
    {
      id: 6,
      title: 'IIS',
      description: 'SISTEM',
      startTime: new Date(2024, 4, 13, 8, 0),
      endTime: new Date(2024, 4, 13, 10, 0),
    },
    {
      id: 2,
      title: 'Joe Class',
      description: 'Biden',
      startTime: new Date(2024, 4, 14, 8, 0),
      endTime: new Date(2024, 4, 14, 10, 0),
    },
    {
      id: 3,
      title: 'Barrack Class',
      description: 'Obamna',
      startTime: new Date(2024, 4, 15, 9, 0),
      endTime: new Date(2024, 4, 15, 11, 0),
    },
    {
      id: 4,
      title: 'PIKP',
      description: 'Inteligenca',
      startTime: new Date(2024, 4, 16, 11, 0),
      endTime: new Date(2024, 4, 16, 13, 0),
    },
    {
      id: 5,
      title: 'IIS',
      description: 'SISTEM',
      startTime: new Date(2024, 4, 17, 12, 0),
      endTime: new Date(2024, 4, 17, 14, 0),
    },
  ],
}
</script>

<template>
  <Timetable :timetable="exampleTimetable" />
</template>

<style scoped>

</style>