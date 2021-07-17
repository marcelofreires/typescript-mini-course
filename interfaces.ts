interface Game {
  title: string
  description: string
  readonly genre: string
  platform?: string[]
  getSimilars: (title: string) => void
}

const ori: Game = {
  title: "Ori and the Blind Forest",
  description: "Iss a beautiful and hard game",
  genre: 'Metroidvania',
  platform: ['Xbox', 'Windows'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Hollow Knight, Ori and the Will of the Wisps, Dead Cells, Celeste`)
  },
}

console.log(ori.title)
console.log(ori.genre)
// ori.genre = 'New genre' // Cannot assign to 'genre' because it is a read-only property.ts(2540)

ori.getSimilars(ori.title)
