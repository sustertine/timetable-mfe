<script setup lang="ts">
import {computed} from 'vue'
import {TimetableModel} from '@/components/timetables/model/timetable.model.ts'
import {Table, TableBody, TableHeader, TableRow, TableCell} from '@/components/ui/table';
import {Card} from "@/components/ui/card";
import TimetableEntry from "@/components/timetables/TimetableEntry.vue";
import {Day} from '@/components/timetables/model/day.enum';
import TimetableEntryPlaceholder from "@/components/timetables/TimetableEntryPlaceholder.vue";

const props = defineProps<{
  timetable: TimetableModel
}>()

let sortedEntries = props.timetable.entries.sort((a, b) => (b.endTime.getTime() - b.startTime.getTime()) - (a.endTime.getTime() - a.startTime.getTime()));

const days = [Day.MONDAY, Day.TUESDAY, Day.WEDNESDAY, Day.THURSDAY, Day.FRIDAY];
const minHour = sortedEntries.reduce((acc, curr) => curr.startTime.getHours() < acc ? curr.startTime.getHours() : acc, 24);
const maxHour = sortedEntries.reduce((acc, curr) => curr.endTime.getHours() > acc ? curr.endTime.getHours() : acc, 0);

const timeSlots = Array.from({length: maxHour - minHour + 1}, (_, i) => minHour + i);

</script>

<template>
  <Card>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell></TableCell>
          <TableCell v-for="day in days" :key="day">{{ day }}</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="(hour, index) in timeSlots" :key="hour">
          <TableCell class="font-bold">{{ hour }}:00</TableCell>
          <TableCell v-for="day in days" :key="day">
            <div class="flex flex-row">
              <TimetableEntry
                  v-for="entry in sortedEntries.filter(curr => curr.startTime.getDay() === days.indexOf(day) + 1 && curr.startTime.getHours() <= hour && curr.endTime.getHours() > hour)"
                  :timetable-entry="entry" :key="entry.id"
              />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
</template>