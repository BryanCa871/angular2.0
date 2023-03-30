import { Player } from "../playerClass/player"

export class Board {
    Player?: Player;
    tiles: Object[] = [];

    constructor(value: Object = {}){
        Object.assign(this, value);
    }
}
