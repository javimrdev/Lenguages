class SlotMachine {
    coins: number;
    roulettes: number[];

    constructor() {
        this.coins = 0;
        this.roulettes = [0, 0, 0];
    }

    play(): void {
        this.coins += 1;
        this.roulettes = [takeRouletteValue(), takeRouletteValue(), takeRouletteValue()];

        if(this.roulettes[0] === this.roulettes[1] && this.roulettes[0] === this.roulettes[2]){
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.roulettes = [0, 0, 0];
            this.coins = 0;
        }else{
            console.log("Good luck next time!!");
        }
    }
}

const takeRouletteValue = () => {
    return Math.floor(((Math.random() * 10) % 7) + 1);
}

const machine = new SlotMachine();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();
machine.play();