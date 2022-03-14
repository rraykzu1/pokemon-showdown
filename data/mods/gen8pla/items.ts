export const Items: {[k: string]: ModdedItemData} = {
	eviolite: {
		inherit: true,
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (pokemon.baseSpecies.nfe ||
				pokemon.baseSpecies.baseSpecies === "Ursaring" ||
				pokemon.baseSpecies.baseSpecies === "Stantler") {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (pokemon.baseSpecies.nfe ||
				pokemon.baseSpecies.baseSpecies === "Ursaring" ||
				pokemon.baseSpecies.baseSpecies === "Stantler") {
				return this.chainModify(1.5);
			}
		},
	},
};
