interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}


// console.log('Song: ', audioPlayer.song);
// console.log('Duration: ', audioPlayer.songDuration);
// console.log('Author: ', audioPlayer.details.author);

const song = 'New Song';

// const { 
//     song:anotherSong, 
//     songDuration:duration, 
//     details:{ author } 
// } = audioPlayer;

const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details

// details > author

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
// const trunks = dbz[3] || 'No hay personaje'
// const [ p1, p2, trunks]: string[] = ['Goku', 'Vegeta', 'Trunks']
// const [ , , trunks]: string[] = ['Goku', 'Vegeta']
// const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegeta']
const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks']

// console.error('Personaje 3:', dbz[2]);
console.error('Personaje 3:', trunks);

export {}