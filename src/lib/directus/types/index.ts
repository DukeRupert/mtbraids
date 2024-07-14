import type { Block_Hero } from "./block_hero"
import type { Block_Card_Group } from "./block_card_group"

export interface Schema {
    shcoc_page: Page[]
}

export interface Page {
  id: string
  status: string
  sort: null | string
  user_created: null | string
  date_created: null | string
  user_updated: null | string
  date_updated: null | string
  title: string
  slug: string
  seo: string
  blocks: Block[]
}

export type Block = 
  Block_Hero |
  Block_Card_Group


