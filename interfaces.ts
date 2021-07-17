interface Game {
  title: string
  description: string
  readonly genre: string
  platform?: string[]
  getSimilars?: (title: string) => void
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

if (ori.getSimilars) {
  ori.getSimilars(ori.title)
}

interface DefinitiveEdition extends Game {
  originalGame: Game
  newContent: string[]
}

const newEdition: DefinitiveEdition = {
  title: 'Ori and the Blind Forest: Definitive Edition',
  description: 'This is the longest version of Ori and the Blind Forest',
  genre: 'Metroidvania',
  platform: ['Xbox', 'Windows', 'Switch'],
  originalGame: ori,
  newContent: ['New areas', 'New abilities', 'more story sequences', 'multiple difficult modes', 'Fast travel between areas']
}
