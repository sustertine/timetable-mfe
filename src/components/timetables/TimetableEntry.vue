<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {Card, CardContent} from "@/components/ui/card";
import {TimetableEntryModel} from "model/timetable.model.ts";
import {Separator} from "@/components/ui/separator";
import Table from "@/components/ui/table/Table.vue";
import TableBody from "@/components/ui/table/TableBody.vue";
import TableRow from "@/components/ui/table/TableRow.vue";
import TableCell from "@/components/ui/table/TableCell.vue";
import CardHeader from "@/components/ui/card/CardHeader.vue";
import CardTitle from "@/components/ui/card/CardTitle.vue";
import CardDescription from "@/components/ui/card/CardDescription.vue";

const props = defineProps<{
  timetableEntry: TimetableEntryModel
}>()


const dateToString = (date: Date) => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Card class="p-2 mx-1 w-1/3">
          <CardDescription class="text-center">
            {{ props.timetableEntry.title }}
          </CardDescription>
      </Card>
    </PopoverTrigger>
    <PopoverContent>
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">
            {{ props.timetableEntry.title }}
          </h4>
          <p class="text-sm text-muted-foreground">
            {{ props.timetableEntry.description }}
          </p>
        </div>
      </div>
      <Separator/>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Start Time</TableCell>
            <TableCell>{{ dateToString(props.timetableEntry.startTime) }}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>End Time</TableCell>
            <TableCell>{{ dateToString(props.timetableEntry.endTime) }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </PopoverContent>
  </Popover>
</template>
