export const Moves: {[k: string]: ModdedMoveData} = {
	direclaw: {
		num: 850,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Dire Claw",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Poison",
	},
	psyshieldbash: {
		num: 851,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Psyshield Bash",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
			if (move.secondary && move.secondary.boosts) {
				if (pokemon.getStat('def', false, true) > pokemon.getStat('spd', false, true)) {
					move.secondary.boosts.def = 1;
				} else {
					move.secondary.boosts.spd = 1;
				}
			}
		},
		secondary: {
			chance: 30,
			boosts: null,
		},
		target: "normal",
		type: "Psychic",
	},
	stoneaxe: {
		num: 852,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Stone Axe",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		onBasePower(basePower, source, target, move) {
			if (['sandstorm'].includes(this.field.effectiveWeather())) {
				return this.chainModify(1.2);
			}
		},
		secondary: {
			chance: 10,
			volatileStatus: "flinch",
		},
		target: "normal",
		type: "Rock",
	},
	ragingfury: {
		num: 853,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		name: "Raging Fury",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Fire",
	},
	wavecrash: {
		num: 853,
		accuracy: 90,
		basePower: 75,
		category: "Physical",
		name: "Wave Crash",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		self: {
			boosts: {
				spe: 1,
			},
		},
		target: "normal",
		type: "Water",
	},
	chloroblast: {
		num: 854,
		accuracy: 90,
		basePower: 145,
		category: "Special",
		pp: 5,
		name: "Chloroblast",
		flags: {protect: 1, mirror: 1},
		priority: 0,
		type: "Grass",
		target: "normal",
		self: {
			boosts: {spe: -2},
		},
		onModifyMove(move, pokemon, target) {
			if (['sunnyday', 'desolateland'].includes(this.field.effectiveWeather())) {
				move.secondaries = [];
				move.secondaries.push({
					chance: 100,
					status: 'brn',
				});
			}
		},
	},
	mountaingale: {
		num: 855,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Mountain Gale",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ice",
	},
	victorydance: {
		num: 856,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Victory Dance",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		boosts: {
			atk: 1,
			def: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Grass",
	},
	headlongrush: {
		num: 857,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Headlong Rush",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Ground",
	},
	barbbarrage: {
		num: 858,
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			if (target.status || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
		name: "Barb Barrage",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		secondary: {
			chance: 30,
			status: "psn",
		},
		target: "normal",
		type: "Poison",
		ignoreImmunity: true,
	},
	esperwing: {
		num: 859,
		accuracy: 95,
		basePower: 75,
		category: "Special",
		name: "Esper Wing",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		drain: [3, 4],
		secondary: {
			status: "flinch",
			chance: 10,
		},
		target: "any",
		type: "Psychic",
	},
	bittermalice: {
		num: 860,
		accuracy: 100,
		basePower: 30,
		category: "Special",
		name: "Bitter Malice",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: {
			chance: 20,
			status: 'psn',
		},
		target: "normal",
		type: "Ghost",
		basePowerCallback(pokemon, target, move) {
			if (target.status || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
	},
	shelter: {
		num: 861,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Shelter",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			def: 2,
			accuracy: 2,
		},
		secondary: null,
		target: "self",
		type: "Steel",
	},
	triplearrows: {
		num: 862,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Triple Arrows",
		pp: 10,
		priority: 1,
		multihit: 3,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	infernalparade: {
		num: 863,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		overrideDefensiveStat: 'def',
		name: "Infernal Parade",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	ceaselessedge: {
		num: 864,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "Ceaseless Edge",
		pp: 10,
		priority: 0,
		critRatio: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	springtidestorm: {
		num: 865,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		name: "Springtide Storm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTry(source) {
			if (source.species.baseSpecies === 'Enamorus') {
				return;
			}
			this.attrLastMove('[still]');
			this.add('-fail', source, 'move: Springtide Storm');
			this.hint("Only Enamorus can use this move.");
			return null;
		},
		onModifyMove(move, pokemon, source) {
			move.secondaries = [];
			if (source && source.species.name === 'Enamorus-Therian') {
				move.secondaries.push({
					chance: 50,
					self: {
						boosts: {
							spa: 1,
						},
					},
				});
			} else {
				move.secondaries.push({
					chance: 50,
					self: {
						boosts: {
							def: -1,
						},
					},
				});
			}
		},
		target: "normal",
		type: "Fairy",
	},
	bleakwingstorm: {
		num: 866,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		name: "Bleakwing Storm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: "confusion",
		},
		target: "normal",
		type: "Flying",
	},
	wildboltstorm: {
		num: 867,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		name: "Wildbolt Storm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: "par",
		},
		target: "normal",
		type: "Electric",
	},
	sandsearstorm: {
		num: 868,
		accuracy: 90,
		basePower: 100,
		category: "Special",
		name: "Sandsear Storm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			status: "brn",
		},
		target: "normal",
		type: "Ground",
	},
	lunarblessing: {
		num: 869,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Lunar Blessing",
		pp: 10,
		priority: 0,
		flags: {heal: 1, bypasssub: 1, allyanim: 1},
		onHit(pokemon) {
			const success = !!this.heal(this.modify(pokemon.maxhp, 0.25));
			return pokemon.cureStatus() || success;
		},
		secondary: null,
		target: "allies",
		type: "Psychic",
	},
	takeheart: {
		num: 870,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Take Heart",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onTryMove(pokemon, target, move) {
			if (pokemon.side.faintedLastTurn) {
				this.field.setWeather("raindance");
				move.secondaries = [];
				move.secondaries.push({
					chance: 100,
					self: {
						boosts: {
							spa: 1,
							spd: 1,
						},
					},
				});
			} else {
				return false;
			}
		},
		secondary: null,
		target: "self",
		type: "Water",
	},
	mysticalpower: {
		num: 871,
		accuracy: 90,
		basePower: 70,
		category: "Special",
		name: "Mystical Power",
		pp: 15,
		priority: 0,
		flags: {mirror: 1, protect: 1},
		onModifyMove(move, pokemon) {
			move.secondaries = [];
			const offense = pokemon.getStat("atk", true, false) + pokemon.getStat("spa", true, false);
			const defense = pokemon.getStat("def", true, false) + pokemon.getStat("spd", true, false);
			if (defense > offense) {
				move.secondaries.push({
					chance: 100,
					self: {
						boosts: {
							def: 1,
							spd: 1,
						},
					},
				});
			} else {
				move.secondaries.push({
					chance: 100,
					self: {
						boosts: {
							atk: 1,
							spa: 1,
						},
					},
				});
			}
		},
		type: "Psychic",
		target: "normal",
	},
};
