export const Items: {[k: string]: ModdedItemData} = {
	adamantorb: {
		name: "Adamant Orb",
		spritenum: 4,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && pokemon.baseSpecies.name === 'Dialga') {
				this.queue.insertChoice({choice: 'runPrimal', pokemon: pokemon});
			}
		},
		onPrimal(pokemon) {
			pokemon.formeChange('Dialga-Primal', this.effect, true);
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Dialga') return false;
			return true;
		},
		itemUser: ["Dialga"],
		num: 135,
		gen: 4,
		desc: "If held by a Dialga, this item triggers its Primal Reversion in battle.",
	},
	reapercloth: {
		name: "Reaper Cloth",
		spritenum: 385,
		fling: {
			basePower: 10,
		},
		onModifyMove(move, pokemon, target) {
			if (pokemon.baseSpecies.baseSpecies === "Dusknoir") {
				move.accuracy = true;
			}
		},
		itemUser: ["Dusknoir"],
		num: 325,
		gen: 4,
	},

	// rr items
	leekstick: {
		name: "Leek Stick",
		fling: {
			basePower: 60,
		},
		spritenum: 475,
		onModifyCritRatio(critRatio, user) {
			if (this.toID(user.baseSpecies.baseSpecies) === 'farfetchd') {
				return critRatio + 1;
			}
		},
		onModifySpe(spe, user) {
			if (this.toID(user.baseSpecies.baseSpecies) === 'farfetchd') {
				return this.chainModify(1.5);
		    }
		},
		itemUser: ["Farfetch\u2019d"],
		num: 259,
		gen: 8,
		desc: "If held by a Farfetch’d, its critical hit ratio is raised by 1 stage and it gets a 1.5x speed boost.",
		shortDesc: "If held by a Farfetch’d, +1 critical hit ratio and 1.5x speed.",
	},
	machampite: {
		name: "Machampite",
		spritenum: 578,
		megaStone: "Machamp-Mega",
		megaEvolves: "Machamp",
		itemUser: ["Machamp"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 956,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Machamp, this item allows it to Mega Evolve in battle.",
	},
	butterfreenite: {
		name: "Butterfreenite",
		spritenum: 592,
		megaStone: "Butterfree-Mega",
		megaEvolves: "Butterfree",
		itemUser: ["Butterfree"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 955,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Butterfree, this item allows it to Mega Evolve in battle.",
	},
	garbodorite: {
		name: "Garbodorite",
		spritenum: 614,
		megaStone: "Garbodor-Mega",
		megaEvolves: "Garbodor",
		itemUser: ["Garbodor"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 957,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Garbodor, this item allows it to Mega Evolve in battle.",
	},
	kinglerite: {
		name: "Kinglerite",
		spritenum: 583,
		megaStone: "Kingler-Mega",
		megaEvolves: "Kingler",
		itemUser: ["Kingler"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 958,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Kingler, this item allows it to Mega Evolve in battle.",
	},
	snorlaxite: {
		name: "Snorlaxite",
		spritenum: 616,
		megaStone: "Snorlax-Mega",
		megaEvolves: "Snorlax",
		itemUser: ["Snorlax"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 959,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Snorlax, this item allows it to Mega Evolve in battle.",
	},
	laprasite: {
		name: "Laprasite",
		spritenum: 612,
		megaStone: "Lapras-Mega",
		megaEvolves: "Lapras",
		itemUser: ["Lapras"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 960,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Lapras, this item allows it to Mega Evolve in battle.",
	},
	drednawite: {
		name: "Drednawite",
		spritenum: 575,
		megaStone: "Drednaw-Mega",
		megaEvolves: "Drednaw",
		itemUser: ["Drednaw"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 961,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Drednaw, this item allows it to Mega Evolve in battle.",
	},
	coalossalite: {
		name: "Coalossalite",
		spritenum: 591,
		megaStone: "Coalossal-Mega",
		megaEvolves: "Coalossal",
		itemUser: ["Coalossal"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 962,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Coalossal, this item allows it to Mega Evolve in battle.",
	},
	orbeetlite: {
		name: "Orbeetlite",
		spritenum: 587,
		megaStone: "Orbeetle-Mega",
		megaEvolves: "Orbeetle",
		itemUser: ["Orbeetle"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 962,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Orbeetle, this item allows it to Mega Evolve in battle.",
	},
	toxtricite: {
		name: "Toxtricite",
		spritenum: 582,
		megaStone: "Toxtricity-Mega",
		megaEvolves: "Toxtricity",
		itemUser: ["Toxtricity"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 963,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Toxtricity, this item allows it to Mega Evolve in battle.",
	},
	toxtricitelowkey: {
		name: "Toxtricite Low Key",
		spritenum: 582,
		megaStone: "Toxtricity-Low-Key-Mega",
		megaEvolves: "Toxtricity-Low-Key",
		itemUser: ["Toxtricity-Low-Key"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 971,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Toxtricity-Low-Key, this item allows it to Mega Evolve in battle.",
	},
	duraludonite: {
		name: "Duraludonite",
		spritenum: 577,
		megaStone: "Duraludon-Mega",
		megaEvolves: "Duraludon",
		itemUser: ["Duraludon"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 964,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Duraludon, this item allows it to Mega Evolve in battle.",
	},
	copperajahnite: {
		name: "Copperajahnite",
		spritenum: 605,
		megaStone: "Copperajah-Mega",
		megaEvolves: "Copperajah",
		itemUser: ["Copperajah"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 965,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Copperajah, this item allows it to Mega Evolve in battle.",
	},
	centiskorchite: {
		name: "Centiskorchite",
		spritenum: 586,
		megaStone: "Centiskorch-Mega",
		megaEvolves: "Centiskorch",
		itemUser: ["Centiskorch"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 966,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Centiskorch, this item allows it to Mega Evolve in battle.",
	},
	sandacondanite: {
		name: "Sandacondanite",
		spritenum: 626,
		megaStone: "Sandaconda-Mega",
		megaEvolves: "Sandaconda",
		itemUser: ["Sandaconda"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 967,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Sandaconda, this item allows it to Mega Evolve in battle.",
	},
	flapplenite: {
		name: "Flapplenite",
		spritenum: 608,
		megaStone: "Flapple-Mega",
		megaEvolves: "Flapple",
		itemUser: ["Flapple"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 968,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Flapple, this item allows it to Mega Evolve in battle.",
	},
	appletunite: {
		name: "Appletunite",
		spritenum: 608,
		megaStone: "Appletun-Mega",
		megaEvolves: "Appletun",
		itemUser: ["Appletun"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 969,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Appletun, this item allows it to Mega Evolve in battle.",
	},
	alcremienite: {
		name: "Alcremienite",
		spritenum: 620,
		megaStone: "Alcremie-Mega",
		megaEvolves: "Alcremie",
		itemUser: ["Alcremie"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: 970,
		gen: 6,
		isNonstandard: "Past",
		desc: "If held by a Alcremie, this item allows it to Mega Evolve in battle.",
	},
}