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
};
