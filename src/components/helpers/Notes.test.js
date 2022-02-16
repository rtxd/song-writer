import getNote from './Notes'

test('gets note A sharp', () => {
    expect(getNote('A', 'sharp')).toBe('A#')
})

test('gets note B sharp minor', () => {
    expect(getNote('B', 'flat', 'minor')).toBe('B♭m')
})

test('gets note C sharp', () => {
    expect(getNote('C', 'sharp', 'major')).toBe('C#')
})

test('gets note D flat', () => {
    expect(getNote('D', 'flat')).toBe('D♭')
})
