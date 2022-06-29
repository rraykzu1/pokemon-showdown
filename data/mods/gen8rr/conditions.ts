export const Conditions: {[k: string]: ModdedConditionData} = {
	frz: {
		inherit: true,
		onResidualOrder: 10,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 16);
		},
	},
};
