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

export interface IContact {
  link: string
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  title: string
}

export interface ITodo {
  value: string
  done: boolean
  id: string
}
