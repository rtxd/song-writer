const notes = {
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    minors: ['Am', 'Bm', 'Cm', 'Dm', 'Em', 'Fm', 'Gm'],
    flat: '♭',
    sharp: '#',
}

export default function getNote(note, pitch = null, noteType = 'major') {
    let noteString = notes.letters.find((o) => o === note)
    //add pitch
    if (pitch) {
        if (pitch === 'sharp') noteString = noteString + '#'
        else noteString = noteString + '♭'
    }
    //add minor or keep it major
    if (noteType === 'minor') noteString = noteString + 'm'
    return noteString
}
