interface Game {
  title: string
  description: string
  genre: string
  platform: string[]
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

ori.getSimilars(ori.title)
