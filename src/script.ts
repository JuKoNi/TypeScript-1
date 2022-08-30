console.log('Hello world');

interface DinosaurData {
    dinosaur: string;
    legs: number;
    dangerous: boolean;

}

const data: DinosaurData[] = [
    {
        dinosaur: 'T-rex',
        legs: 2,
        dangerous: true,
    },
    {
        dinosaur: 'Triceratops',
        legs: 2,
        dangerous: true,
    }
]

data.forEach(dino => {
    console.log(dino.dinosaur)
})
