StartupEvents.modifyCreativeTab('ae2:facades', event => {
	// Adds example item after redstone
	//event.addAfter('minecraft:redstone', 'kubejs:example_item')
	// Removes redstone from this tab's display, but leaves it visible when using search
	//event.removeFromParent('minecraft:redstone')
	// Removes redstone from this tab's search stacks
	// (note that this does NOT remove it from search entirely if another tab still has the item in its search stacks)
	//event.removeFromSearch('minecraft:redstone')



	// Fully removes ae2 Cable facades from both this tab's display and search stacks
	event.remove('ae2:facade')

console.info('Abyssal Skies KubeJS Script - AE2 Creative Tab Entries Removal Activated')
})

