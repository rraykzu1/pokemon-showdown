export const Conditions: {[k: string]: ModdedConditionData} = {
	frostbite: {
		onResidualOrder: 10,
		onResidual(pokemon) {
			let dmgmod = 16;
			if (this.field.getWeather().id === "hail") dmgmod = 8;
			if (pokemon.hasAbility("thickfat")) dmgmod = 32; 
			this.damage(pokemon.baseMaxhp / dmgmod);
		},
	},
	hail: {
		inherit: true,
		onModifyMove(move) {
			if (!move.secondaries) return;
			for (const secondary of move.secondaries) {
				if ((move.category !== 'Status') && (secondary.status === 'frz') && secondary.chance) {
					secondary.chance = secondary.chance * 2;
				}
			}
		}
	},
	gem: {
		duration: 1,
		affectsFainted: true,
		onBasePower(basePower, user, target, move) {
			this.debug('Gem Boost');
			return this.chainModify(1.5);
		},
	},
};
