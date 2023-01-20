export interface ISwitch {
  onChange: (e: boolean) => void
}
export interface IContentItem {
  text: string
  imgWidth: number
  imgHeight: number
  textFirst: boolean
  src: string[]
}

export interface ISkillsItem {
  data: string[]
  title: string
}

export interface IComboProvider {
  children: React.ReactNode
}
