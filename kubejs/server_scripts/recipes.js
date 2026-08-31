ServerEvents.recipes(event => {
	
	// Recipes that required mechanical crafters NO LONGER DO! :D
    event.remove({output: ['createaddition:alternator']})
    event.shaped('createaddition:alternator', ['ABA', 'BCB', 'DBD'], {A: 'create:iron_sheet', B: 'createaddition:copper_spool', C: 'createaddition:iron_rod', D: 'create:andesite_alloy'})
	event.remove({output: ['createbigcannons:fluid_shell']})
    event.shaped('createbigcannons:fluid_shell', [' A ', 'ABA', ' C '], {A: 'minecraft:iron_ingot', B: 'create:fluid_pipe', C: '#minecraft:planks'})
	event.remove({output: ['create:extendo_grip']})
    event.shaped('create:extendo_grip', ['ABA', 'ACA', 'ADA'], {A: 'minecraft:stick', B: 'create:brass_ingot', C: 'create:precision_mechanism', D: 'create:brass_hand'})
	event.remove({output: ['simulated:docking_connector']})
    event.shaped('simulated:docking_connector', ['ABA', 'CDC', 'EFE'], {A: 'create:iron_sheet', B: 'create:chute', C: 'minecraft:piston', D: 'create:brass_casing', E: 'create:brass_sheet', F: 'create:electron_tube'})
	event.remove({output: ['createbigcannons:he_shell']})
    event.shaped('createbigcannons:he_shell', ['AAA', 'ABA', ' C '], {A: 'minecraft:iron_ingot', B: 'createbigcannons:packed_guncotton', C: '#minecraft:planks'})
	event.remove({output: ['createaddition:electric_motor']})
    event.shaped('createaddition:electric_motor', ['ABA', 'BCB', 'ADA'], {A: 'create:brass_sheet', B: 'createaddition:copper_spool', C: 'createaddition:iron_rod', D: 'createaddition:capacitor'})
	event.remove({output: ['create:crushing_wheel']})
    event.shaped('2x create:crushing_wheel', ['ABA', 'BCB', 'ABA'], {A: 'create:andesite_alloy', B: '#minecraft:planks', C: 'create:andesite_alloy_block'})
	event.remove({output: ['simulated:linked_typewriter']})
    event.shaped('simulated:linked_typewriter', ['AAA', 'ABA', 'CDC'], {A: 'minecraft:oak_button', B: 'create:transmitter', C: 'create:golden_sheet', D: 'create:precision_mechanism'})
	event.remove({output: ['createbigcannons:shrapnel_shell']})
    event.shaped('createbigcannons:shrapnel_shell', ['AAA', 'ABA', ' C '], {A: 'minecraft:iron_ingot', B: 'createbigcannons:shot_balls', C: '#minecraft:planks'})
	event.remove({output: ['createbigcannons:ap_shell']})
    event.shaped('createbigcannons:ap_shell', ['ABA', 'ACA', ' D '], {A: 'minecraft:iron_ingot', B: 'createbigcannons:cast_iron_ingot', C: 'createbigcannons:packed_guncotton', D: '#minecraft:planks'})
	event.remove({output: ['create:potato_cannon']})
    event.shaped('create:potato_cannon', ['A  ', 'BCC', 'DD '], {A: 'create:andesite_alloy', B: 'create:precision_mechanism', C: 'create:fluid_pipe', D: '#c:ingots/copper'})
	event.remove({output: ['create:wand_of_symmetry']})
    event.shaped('create:wand_of_symmetry', ['AAA', 'BCD', ' E '], {A: '#c:glass_blocks', B: 'create:precision_mechanism', C: '#c:ender_pearls', D: 'create:brass_ingot', E: '#c:obsidians'})
	event.remove({output: ['createdieselgenerators:chemical_sprayer']})
    event.shaped('createdieselgenerators:chemical_sprayer', ['AA ', 'BCD', 'E  '], {A: 'createdieselgenerators:kelp_handle', B: 'create:precision_mechanism', C: 'minecraft:dried_kelp', D: 'create:fluid_pipe', E: 'minecraft:copper_block'})
	event.remove({output: ['simulated:plunger_launcher']})
    event.shaped('simulated:plunger_launcher', ['A B', 'CDE', 'A B'], {A: 'minecraft:copper_ingot', B: 'minecraft:slime_ball', C: 'create:precision_mechanism', D: 'create:fluid_pipe', E: 'simulated:rope_coupling'})
	event.remove({output: ['aeronautics:mounted_potato_cannon']})
    event.shaped('aeronautics:mounted_potato_cannon', ['AB ', 'CDE', 'AB '], {A: 'create:copper_sheet', B: 'minecraft:redstone', C: 'minecraft:dried_kelp_block', D: 'create:cogwheel', E: 'create:fluid_pipe'})
	event.remove({output: ['createdieselgenerators:pumpjack_crank']})
    event.shaped('createdieselgenerators:pumpjack_crank', ['ABA', 'CAC', 'DCD'], {A: 'create:shaft', B: 'create:iron_sheet', C: 'create:zinc_ingot', D: 'create:andesite_alloy'})
	event.remove({output: ['createaddition:tesla_coil']})
    event.shaped('createaddition:tesla_coil', ['AAA', 'BCB', 'DED'], {A: 'createaddition:copper_spool', B: 'createaddition:capacitor', C: 'create:brass_casing', D: 'create:brass_sheet', E: 'create:electron_tube'})
    event.shaped('etched:blank_music_disc', [' A ','ABA',' A '], {A: 'blocksabound:tar', B: 'minecraft:paper'})

    event.remove({type: "create:washing", input: 'minecraft:gravel'})
    event.remove({type: "create:washing", input: 'minecraft:red_sand'})
    event.remove({type: "create:washing", input: 'minecraft:soul_sand'})
	
	//Malum + Nether quartz pairing
	event.replaceInput({input: 'minecraft:quartz'},
	'minecraft:quartz',
	Ingredient.of('#c:gems/quartz')
	)
	
	//Removing ring of mana weaving due to known crash
	event.remove({output: ['malum:ring_of_manaweaving']})
	
	//Ammonite Recipes
	event.shaped('8x abyssal_decor:ammonite', ['AAA','ABA','AAA'], {A: 'minecraft:stone', B: 'abyssal_decor:clam_empty_closed'})
    event.shaped('8x abyssal_decor:ammonite', ['AAA','ABA','AAA'], {A: 'minecraft:stone', B: 'abyssal_decor:starfish'})
	
	// Brass Changes
	event.custom({ "type": "create:splashing", "ingredients": [ { "item": "create:brass_ingot" } ], "results": [ { "count": 8, "id": "abyssal_decor:seabrass_ingot" } ] })

     // Brew recipe
     let brew = event.recipes.irons_spellbooks.alchemist_cauldron_brew
     brew(
        [Fluid.of("irons_spellbooks:common_ink", 500)],            // result fluids
        "#irons_spellbooks:lootable_focus",        // reagent input
        Fluid.of("water", 1000)              // base fluid
    )
    brew(
        [Fluid.of("irons_spellbooks:uncommon_ink", 500)],            // result fluids
        "minecraft:glow_ink_sac",        // reagent input
        Fluid.of("irons_spellbooks:common_ink", 1000)              // base fluid
    )
    brew(
        [Fluid.of("irons_spellbooks:rare_ink", 500)],            // result fluids
        "minecraft:diamond",        //placeholder
        Fluid.of("irons_spellbooks:uncommon_ink", 1000)              // base fluid
    )
    
})