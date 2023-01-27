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
export interface ITodoItem {
  value: string
  done: boolean
  id: string
  handleSetDone: (id: string) => void
  handleRemove: (id: string) => void
}

export interface ITodoBlock {
  label: string
  text: string
  img: string
}

export interface ITodoComponent {
  handleAdd: (todo: ITodo, setInputValue: (state: string) => void) => void
  handleRemove: (id: string) => void
  handleSetDone: (id: string) => void
  todoList: ITodo[]
  color: string
}

export interface ITabs {
  elements: IElement[]
}

export interface IElement {
  element: React.ReactElement
  label: string
}

export interface IColors {
  state: string
  server: string
  blockchain: string
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error'
