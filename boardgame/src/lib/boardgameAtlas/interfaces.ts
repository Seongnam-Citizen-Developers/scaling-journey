export interface category {
  id: string
}

export interface game {
  id: string
  name: string
  min_players: number
  max_players: number
  min_playtime: number
  max_playtime: number
  thumb_url: string
  image_url: string
  categories: category[]
  tags: string[]
  average_user_rating: number
  average_learning_complexity: number
  average_strategy_complexity: number
}