export  interface TimetableModel {
    id: number;
    title: string;
    description: string;
    groupId: string;
    entries: Array<TimetableEntryModel>;
}
export interface TimetableEntryModel {
    id: number;
    title: string;
    description: string;
    startTime: Date;
    endTime: Date;
}