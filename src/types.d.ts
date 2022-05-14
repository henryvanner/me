interface DataSlice {
  label: string,
  value: string
}

interface TimelineEvent {
  icon: any,
  data?: ReadonlyArray<DataSlice>,
  date: moment.MomentInput,
  dateFormat?: string,
  title: string
}

interface Skill {
  id: string,
  name: string,
  icon: any
}
