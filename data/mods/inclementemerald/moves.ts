export const Moves: {[k: string]: ModdedMoveData} = {
	solarbeam: {
		inherit: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (attacker.hasAbility('Chloroplast') || ['sunnyday', 'desolateland'].includes(attacker.effectiveWeather())) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		onBasePower(basePower, pokemon, target) {
			if (!pokemon.hasAbility('Chloroplast') &&
				['raindance', 'primordialsea', 'sandstorm', 'hail'].includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	solarblade: {
		inherit: true,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, blade: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (attacker.hasAbility('Chloroplast') || ['sunnyday', 'desolateland'].includes(attacker.effectiveWeather())) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		onBasePower(basePower, pokemon, target) {
			if (!pokemon.hasAbility('Chloroplast') &&
				['raindance', 'primordialsea', 'sandstorm', 'hail'].includes(pokemon.effectiveWeather())) {
				this.debug('weakened by weather');
				return this.chainModify(0.5);
			}
		},
	},
	growth: {
		inherit: true,
		onModifyMove(move, pokemon) {
			if (pokemon.hasAbility('Chloroplast') || ['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				move.boosts = {atk: 2, spa: 2};
			}
		},
	},
	synthesis: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			if (pokemon.hasAbility('Chloroplast')) {
				factor = 0.667;
			} else {
				switch (pokemon.effectiveWeather()) {
				case 'sunnyday':
				case 'desolateland':
					factor = 0.667;
					break;
				case 'raindance':
				case 'primordialsea':
				case 'sandstorm':
				case 'hail':
					factor = 0.25;
					break;
				}
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
	},
	moonlight: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			if (pokemon.hasAbility('Chloroplast')) {
				factor = 0.667;
			} else {
				switch (pokemon.effectiveWeather()) {
				case 'sunnyday':
				case 'desolateland':
					factor = 0.667;
					break;
				case 'raindance':
				case 'primordialsea':
				case 'sandstorm':
				case 'hail':
					factor = 0.25;
					break;
				}
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
	},
	morningsun: {
		inherit: true,
		onHit(pokemon) {
			let factor = 0.5;
			if (pokemon.hasAbility('Chloroplast')) {
				factor = 0.667;
			} else {
				switch (pokemon.effectiveWeather()) {
				case 'sunnyday':
				case 'desolateland':
					factor = 0.667;
					break;
				case 'raindance':
				case 'primordialsea':
				case 'sandstorm':
				case 'hail':
					factor = 0.25;
					break;
				}
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
	},
	fly: {
		inherit: true,
		accuracy: 100,
	},
	cut: {
		inherit: true,
		type: 'Steel',
		basePower: 60,
		critRatio: 2,
		accuracy: 100,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	rocksmash: {
		inherit: true,
		basePower: 50,
		secondary: {
			chance: 100,
		},
	},
	strength: {
		inherit: true,
		type: 'Rock',
		basePower: 100,
		self: {
			boosts: {
				spd: -1,
				def: -1,
			},
		},
	},
	wingattack: {
		inherit: true,
		basePower: 80,
		pp: 20,
	},
	submission: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
		pp: 15,
	},
	chatter: {
		inherit: true,
		basePower: 90,
		pp: 15,
	},
	tailslap: {
		inherit: true,
		accuracy: 100,
	},
	shadowpunch: {
		inherit: true,
		basePower: 80,
	},
	waterpulse: {
		inherit: true,
		basePower: 80,
	},
	armthrust: {
		inherit: true,
		basePower: 25,
	},
	spikecannon: {
		inherit: true,
		basePower: 25,
		type: 'Water',
		accuracy: 90,
	},
	absorb: {
		inherit: true,
		basePower: 35,
	},
	megadrain: {
		inherit: true,
		basePower: 60,
	},
	forcepalm: {
		inherit: true,
		pp: 15,
	},
	mudbomb: {
		inherit: true,
		pp: 15,
		accuracy: 90,
	},
	mysticalfire: {
		inherit: true,
		basePower: 85,
	},
	paraboliccharge: {
		inherit: true,
		basePower: 90,
		pp: 10,
		drain: [1, 4],
	},
	drainingkiss: {
		inherit: true,
		basePower: 75,
		drain: [1, 2],
	},
	drillpeck: {
		inherit: true,
		critRatio: 2,
	},
	spiritshackle: {
		inherit: true,
		basePower: 90,
	},
	darkestlariat: {
		inherit: true,
		basePower: 95,
	},
	sparklingaria: {
		inherit: true,
		basePower: 100,
	},
	freezedry: {
		inherit: true,
		basePower: 95,
		pp: 15,
	},
	toxicthread: {
		inherit: true,
		boosts: {
			spe: -3,
		},
	},
	twineedle: {
		inherit: true,
		basePower: 45,
		secondary: {
			chance: 30,
		},
	},
	geargrind: {
		inherit: true,
		accuracy: 100,
	},
	triplekick: {
		inherit: true,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
	},
	steelwing: {
		inherit: true,
		basePower: 90,
		pp: 15,
		secondary: {
			chance: 20,
		},
	},
	powergem: {
		inherit: true,
		basePower: 90,
		pp: 15,
	},
	needlearm: {
		inherit: true,
		basePower: 90,
	},
	crosspoison: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
		basePower: 90,
		pp: 15,
	},
	rockclimb: {
		inherit: true,
		type: 'Rock',
	},
	disarmingvoice: {
		inherit: true,
		basePower: 60,
	},
	octazooka: {
		inherit: true,
		basePower: 85,
	},
	shelltrap: {
		inherit: true,
		pp: 10,
	},
	darkvoid: {
		inherit: true,
		accuracy: 80,
	},
	cometpunch: {
		inherit: true,
		accuracy: 100,
		basePower: 25,
	},
	xscissor: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
		critRatio: 2,
	},
	glaciate: {
		inherit: true,
		basePower: 80,
	},
	boneclub: {
		inherit: true,
		accuracy: 90,
		secondary: {
			chance: 30,
		},
		pp: 15,
	},
	bonerush: {
		inherit: true,
		basePower: 15,
		priority: 1,
	},
	bonemerang: {
		inherit: true,
		ignoreImmunity: {'Ground': true},
	},
	lusterpurge: {
		inherit: true,
		basePower: 95,
	},
	mistball: {
		inherit: true,
		basePower: 95,
	},
	relicsong: {
		inherit: true,
		basePower: 85,
	},
	// flag changes
	slash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	falseswipe: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	furycutter: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	leafblade: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	nightslash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	airslash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	sacredsword: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	razorshell: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	breakingswipe: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	behemothblade: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	aerialace: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1, blade: 1},
	},
	psychocut: {
		inherit: true,
		flags: {protect: 1, mirror: 1, blade: 1},
	},
	secretsword: {
		inherit: true,
		flags: {protect: 1, mirror: 1, blade: 1},
	},
	meteorassault: {
		inherit: true,
		flags: {protect: 1, recharge: 1, mirror: 1, blade: 1},
	},
};
