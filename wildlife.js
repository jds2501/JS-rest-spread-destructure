/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function animalSightings(...animalNames) {
	for (const animalName of animalNames) {
		console.log(animalName);
	}
}


/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const protectedAreas = [...forestHabitats, ...savannahHabitats];

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updatedRhinoStatus = {
	...rhinoStatus,
	population: 1000,
	habitat: "Forest"
}

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * The genetics property only applies to dupeLionProfile since a shallow copy creates a new object copy at the top level, so the original lionProfile is unaffected.
 */
const dupeLionProfile = {
	...lionProfile,
	genetics: "Good"
};

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * A shallow copy only applies to the top level, so dupeEcosystemHealth gets a copy of a reference to the same foodSupply in ecosystemHealth. That means changing it with dupeEcosystemHealth affects the same spot in memory that ecosystemHealth references.
 */
const dupeEcosystemHealth = {
	...ecosystemHealth
};
dupeEcosystemHealth.foodSupply.herbivores = "Endangered";

