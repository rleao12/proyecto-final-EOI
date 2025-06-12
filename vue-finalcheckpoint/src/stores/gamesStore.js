import { defineStore } from "pinia"
import { supabase } from '@/lib/supabase'

export const useGamesStore = defineStore('gamesStore', {
  state: () => {
    return {
      games: []
    }
  },
  actions: {
    async loadGames(){
      const { data, error } = await supabase
      .from('games_data')
      .select()
      .order('game_priority', {ascending: false})
      this.games = data.map((game) => {
         return {
          id: game.id,
          gameName: game.title,
          gameCategory: game.game_category,
          metacriticScore: game.metacritic_score,
          dedicationHours: game.dedication_hours,
          completedAt: game.completed_at,
          gamePriority: game.game_priority,
          completed: game.completed
        }
      })
    },
    async createGame(gameData) {
      const { data, error } = await supabase
      .from('games_data')
      .insert([
        gameData
      ])
      .select()
      this.loadGames()
    },
    async editGame(id, gameData) {
      const { data, error } = await supabase
      .from('games_data')
      .update(gameData)
      .eq('id', id)
      .select()
      this.loadGames()
    },
    async markAsCompleted(id) {
      const { data, error } = await supabase
        .from('games_data')
        .update({
          completed: true,
          completed_at: new Date().toISOString()
        })
        .eq('id', id)
        .select();
      this.loadGames();
    },
    async removeGame(id) {
      const { data, error } = await supabase
        .from('games_data')
        .delete()
        .eq('id', id);
      this.loadGames();
    }
  }
})