interface DataSlice {
  label: string,
  value: string
}

interface TimelineEvent {
  avatarImg: string,
  data?: ReadonlyArray<DataSlice>,
  date: moment.MomentInput,
  dateFormat?: string,
  title: string
}

interface Skill {
  id: string,
  name: string,
  spriteIndex: number
}
