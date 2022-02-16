const notes = {
    majors: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    minors: ['Am', 'Bm', 'Cm', 'Dm', 'Em', 'Fm', 'Gm'],
    flat: '♭',
    sharp: '#',
}

export function getNote(note, noteType, pitch) {
    let noteAsText = ''
    noteType === 'Major'
        ? noteAsText.concat(notes.majors.find(note))
        : noteAsText.concat(notes.minors.find(note))
    if (pitch === 'sharp') noteAsText.concat(notes.sharp)
    return noteAsText
}
