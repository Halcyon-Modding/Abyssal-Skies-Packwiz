ServerEvents.recipes(event => {
    const vanillaColors = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']

    const removedIds = [
    'minecraft:vesselplate_smelt_recycle',
    'minecraft:strut_smelt_recycle',
    'minecraft:hvac_smelt_recycle',
    'minecraft:vesselplate_blast_recycle',
    'minecraft:strut_blast_recycle',
    'minecraft:hvac_blast_recycle',
    'industrialhellscape:truss',
    'industrialhellscape:vesselplate_from_iron_block',
    'industrialhellscape:vesselplate_from_iron_ingot',
    'industrialhellscape:grate_from_crafting',
    'abyssal_decor:moonsilver_sconce_recipe',
    'abyssal_decor:moonsilver_ingot_recipe',
    'abyssal_decor:seabrass_ingot_recipe',
    'supplementaries:wicker_fence',
    'minecraft:hopper',
    'quark:tweaks/crafting/utility/misc/easy_hopper',
    'minecraft:white_wool_from_string',
    'nirvana:hemp_cloth',
    'botania:mana_infusion/alchemy/wool_deconstruct',
    'create:crushing/wool',
    'create:splashing/gravel',
    'create:splashing/soul_sand',
    'create:crushing/tuff',
    'industrialhellscape:iron_ingot_from_smelting_vesselplate',
    'industrialhellscape:iron_ingot_from_blasting_vesselplate',

    'create:crushing/ochrum',
    'create:crushing/ochrum_recycling',
    'create:crushing/crimsite',
    'create:crushing/crimsite_recycling',
    'create:crushing/asurine',
    'create:crushing/asurine_recycling',
    'create:crushing/veridium',
    'create:crushing/veridium_recycling'
    ]
    removedIds.forEach(removedId => {
        event.remove({id: removedId})
    })

event.remove({output: [
'minecraft:bundle',
'supplementaries:sack',
'suppsquared:copper_lantern',
'minecraft:sandstone',
'minecraft:red_sandstone',
'quark:soul_sandstone',
'supplementaries:candle_holder',
'suppsquared:gold_candle_holder',
'natures_spirit:pink_sandstone',
'quark:backpack',
'satchels:satchel',
'shulker_box',
'bountifulfares:shulker_tiffin',
'magicfeather:magic_feather',
'simpleradio:radiosmither',
'simpleradio:antenna',
'dark_prismarine',
'create:railway_casing',
'create:controls'
]})


//Create Ores
event.custom({ "type": "create:crushing", "ingredients": [ { "item": "create:ochrum" } ], "processing_time": 250, "results": [ { "chance": 0.5, "id": "create:crushed_raw_gold" } ] })
event.custom({ "type": "create:crushing", "ingredients": [ { "item": "create:crimsite" } ], "processing_time": 250, "results": [ { "chance": 0.8, "id": "create:crushed_raw_iron" }, { "chance": 0.8, "id": "create:crushed_raw_iron" } ] })
event.custom({ "type": "create:crushing", "ingredients": [ { "item": "create:asurine" } ], "processing_time": 250, "results": [ { "chance": 0.8, "id": "create:crushed_raw_zinc" }, { "chance": 0.02, "id": "create:crushed_raw_silver" } ] })
event.custom({ "type": "create:crushing", "ingredients": [ { "item": "create:veridium" } ], "processing_time": 250, "results": [ { "chance": 0.9, "id": "create:crushed_raw_copper" }, { "chance": 0.9, "id": "create:crushed_raw_copper" }, { "chance": 0.9, "id": "create:crushed_raw_copper" } ] })

event.custom({ "type": "create:haunting", "ingredients": [ { "item": "minecraft:netherrack" } ], "results": [ { "id": "incision:weatherrack" } ] })
event.shaped('64x incision:carrion', [' A ', 'ABA', ' A '], {A: 'architects_palette:entrails', B: 'malum:living_flesh'})
event.custom({ "type": "architects_palette:warping", "dimension": "minecraft:the_nether", "ingredient": { "item": "minecraft:spider_eye" }, "result": { "count": 1, "id": "incision:congealed_acid" } })
event.shapeless('incision:squintbulb', ['incision:carrion', 'incision:congealed_acid'])
event.shaped('4x incision:hamstring', ['AAA'], {A: 'incision:smear'})
event.shaped('4x incision:blood_stalk', ['A', 'A', 'A'], {A: 'incision:smear'})
event.shaped('4x incision:lashvines', ['AAA'], {A: 'incision:congealed_acid'})
event.shaped('4x incision:conductor_nerve', ['A', 'A', 'A'], {A: 'incision:congealed_acid'})
event.shaped('4x incision:nerve', ['A', 'A'], {A: 'incision:congealed_acid'})
event.shaped('4x incision:incisor_growth', ['A', 'B'], {A: '#c:bones', B: 'incision:smear'})
event.shaped('4x incision:blinking_hamstring', ['B B', 'AAA'], {A: 'incision:smear', B: 'incision:congealed_acid'})
event.shaped('4x incision:carrion_eye', ['ABA', 'ACA', 'ABA'], {A: 'incision:carrion', B: 'malum:living_flesh', C: 'incision:congealed_acid'})
event.shaped('4x incision:molar_carrion', ['ABA', 'ACA', 'ABA'], {A: 'incision:carrion', B: 'malum:living_flesh', C: '#c:bones'})
event.shaped('incision:mooch', [' A ', 'BCB', ' A '], {A: 'malum:living_flesh', B: 'incision:congealed_acid', C: 'malum:sacred_spirit'})

event.custom({ "type": "farmersdelight:cutting", "ingredients": [ { "item": "architects_palette:entrails" } ], "result": [ { "item": { "count": 4, "id": "incision:intestine" } } ], "tool": [ { "type": "farmersdelight:item_ability", "action": "knife_dig" }, { "tag": "c:tools/knife" } ] })

event.custom({ "type": "farmersdelight:cooking", "experience": 1.0, "ingredients": [ { "item": "incision:intestine" } ], "result": { "count": 1, "id": "incision:boiling_tongue" } })

event.smelting('caverns_and_chasms:silver_ingot', 'create:crushed_raw_silver')
event.custom({ "type": "create:splashing", "ingredients": [ { "item": "create:crushed_raw_silver" } ], "results": [ { "count": 9, "id": "caverns_and_chasms:silver_nugget" }, { "chance": 0.5, "id": "hexcasting:amethyst_dust" } ] })

event.shapeless('8x darkerdepths:mossy_grimestone', ['8x darkerdepths:grimestone', 'minecraft:moss_block'])




event.shaped('quark:backpack', ['AAA', 'BCB', 'AAA'], {A: 'leather', B: '#abyssal_skies:binding', C: 'iron_ingot'})
event.shaped('satchels:satchel', ['A A', 'BCB', 'ABA'], {A: '#abyssal_skies:binding', B: 'leather', C: 'gold_ingot'})
event.shaped('shulker_box', ['ABA', 'B B', 'ABA'], {A: 'architects_palette:oracle_block', B: 'caverns_and_chasms:tin_ingot'})
event.custom({ "type": "architects_palette:warping", "dimension": "minecraft:the_nether", "ingredient": { "item": "caverns_and_chasms:bejeweled_apple" }, "result": { "count": 1, "id": "minecraft:chorus_fruit" } })
event.custom({ "type": "architects_palette:warping", "dimension": "minecraft:the_nether", "ingredient": { "item": "caverns_and_chasms:silver_ingot" }, "result": { "count": 16, "id": "abyssal_decor:moonsilver_ingot" } })
event.shaped('bountifulfares:shulker_tiffin', ['A', 'B', 'A'], {A: 'architects_palette:oracle_block', B: 'caverns_and_chasms:tin_ingot'})
event.shaped('magicfeather:magic_feather', ['ABC', 'B B', 'CBC'], {A: 'caverns_and_chasms:turquoise', B: 'malum:cthonic_gold', C: 'malum:cthonic_gold_fragment'})
event.shaped('simpleradio:transceiver', ['A', 'B', 'C'], {A: 'create:transmitter', B: 'create:brass_sheet', C: '#minecraft:planks'})
event.shaped('simpleradio:radio', [' A ', 'BCB'], {A: 'create:transmitter', B: 'create:brass_sheet', C: '#minecraft:planks'})
event.shaped('simpleradio:radiosmither', ['AAA', 'B B'], {A: 'create:brass_sheet', B: '#minecraft:planks'})
event.shaped('simpleradio:speaker', ['ABA', 'A A', 'ACA'], {A: 'create:iron_sheet', B: 'create:transmitter', C: 'create:electron_tube'})
event.shaped('simpleradio:microphone', ['A', 'B', 'C'], {A: 'create:transmitter', B: 'create:electron_tube', C: 'create:iron_sheet'})
event.shaped('simpleradio:transmitter', ['AAA', 'BCB', 'DDD'], {A: 'create:transmitter', B: 'create:electron_tube', C: 'create:precision_mechanism', D: 'create:iron_sheet'})
event.shaped('simpleradio:receiver', ['AAA', 'BCB', 'DED'], {A: 'simpleradio:antenna', B: 'create:electron_tube', C: 'create:precision_mechanism', D: 'create:iron_sheet', E: 'create:sturdy_sheet'})
event.shaped('2x simpleradio:antenna', ['AAA', ' A ', ' B '], {A: 'createaddition:iron_rod', B: 'create:iron_sheet'})
event.shaped('8x dark_prismarine', ['AAA', 'ABA', 'AAA'], {A: 'prismarine', B: 'black_dye'})

event.custom({ "type": "create:item_application", "ingredients": [ { "tag": "c:stripped_logs" }, { "tag": "c:plates/obsidian" } ], "results": [ { "id": "create:railway_casing" } ]})
event.shapeless('create:controls', ['create:railway_casing', 'lever'])
event.shaped('2x quark:soul_bead', [' A ', 'ABA', ' A '], {A: '#malum:aspected_spirits', B: 'caverns_and_chasms:silver_ingot'})
event.custom({ "type": "malum:void_favor", "input": { "item": "minecraft:netherrack" }, "result": { "count": 2, "id": "clinker:brimstone" } })
event.custom({ "type": "malum:void_favor", "input": { "item": "minecraft:andesite" }, "result": { "count": 2, "id": "clinker:calamine" } })
event.custom({ "type": "malum:void_favor", "input": { "item": "minecraft:deepslate" }, "result": { "count": 2, "id": "clinker:capstone" } })
event.custom({ "type": "malum:void_favor", "input": { "item": "caverns_and_chasms:schist" }, "result": { "count": 2, "id": "clinker:shale" } })
event.custom({ "type": "malum:void_favor", "input": { "item": "minecraft:tuff" }, "result": { "count": 2, "id": "clinker:calc" } })

event.shaped('16x industrialhellscape:duct', [' A ', 'ABA', ' A '], {A: '#industrialhellscape:ih_recipe_ingots', B: 'industrialhellscape:inhell_haven_device'})
event.shaped('16x industrialhellscape:truss', ['A A', ' B ', 'A A'], {A: '#industrialhellscape:ih_recipe_ingots', B: 'industrialhellscape:inhell_haven_device'})
event.shapeless('4x industrialhellscape:riveted_vesselplate', ['#industrialhellscape:ih_recipe_ingots', 'industrialhellscape:inhell_haven_device'])

event.shaped('3x supplementaries:wicker_fence', ['ABA', 'ABA'], {A: 'stick', B: '#abyssal_skies:binding'})
event.shapeless('artifacts:aqua_dashers', ['artifacts:flippers'])
event.shapeless('artifacts:flippers', ['artifacts:aqua_dashers'])

event.shaped('hopper', ['A A', 'ABA', ' A '], {A: '#industrialhellscape:ih_recipe_ingots', B: '#c:chests/wooden'})
event.shaped('hopper', ['ABA', 'ABA', ' A '], {A: '#industrialhellscape:ih_recipe_ingots', B: '#minecraft:logs'})

event.shaped('3x nirvana:hemp_cloth', ['AA', 'AA'], {A: 'nirvana:hemp'})
event.shaped('4x white_wool', ['AA', 'AA'], {A: 'string'})
event.shaped('16x white_wool', ['AAA', 'A A', 'AAA'], {A: 'nirvana:hemp_cloth'})

event.custom({ "type": "create:splashing", "ingredients": [ { "item": "minecraft:soul_sand" } ], "results": [ { "chance": 0.125, "count": 4, "id": "minecraft:quartz" } ] })

event.custom({ "type": "farmersdelight:cooking", "experience": 1.0, "ingredients": [ { "item": "botania:manasteel_ingot" } ], "result": { "count": 1, "id": "abyssal_decor:strange_metal_rod" } })
event.custom({ "type": "farmersdelight:cooking", "container": { "count": 1, "id": "quark:clear_shard" }, "experience": 1.0, "ingredients": [ { "item": "nomansland:awkward_residue" }, { "item": "nomansland:resin" }, { "item": "minecraft:sugar" } ], "result": { "count": 1, "id": "industrialhellscape:gas_station_pill" } })

event.custom({ "type": "malum:spirit_focusing", "durabilityCost": 1, "input": { "item": "malum:zephyr_impetus" }, "result": { "count": 2, "id": "minecraft:ghast_tear" }, "spirits": [ { "type": "malum:aerial", "count": 2 }, { "type": "malum:arcane", "count": 2 }, { "type": "malum:infernal", "count": 2 } ], "time": 2700 })
event.custom({ "type": "malum:spirit_focusing", "durabilityCost": 1, "input": { "item": "malum:zephyr_impetus" }, "result": { "count": 1, "id": "minecraft:phantom_membrane"}, "spirits": [ { "type": "malum:aerial", "count": 2 }, { "type": "malum:arcane", "count": 2 }, { "type": "malum:aqueous", "count": 2 } ], "time": 2700 })
event.custom({ "type": "malum:spirit_focusing", "durabilityCost": 1, "input": { "item": "malum:zephyr_impetus" }, "result": { "count": 1, "id": "malum:astral_weave"}, "spirits": [ { "type": "malum:aerial", "count": 2 }, { "type": "malum:arcane", "count": 2 }, { "type": "malum:aqueous", "count": 2 }, { "type": "malum:wicked", "count": 2 } ], "time": 2700 })

event.stonecutting('clinker:shale_pillar', 'clinker:shale')
event.stonecutting('clinker:smooth_shale', 'clinker:shale')
event.stonecutting('clinker:polished_shale', 'clinker:shale')
event.stonecutting('clinker:shale_bricks', 'clinker:shale')
event.stonecutting('clinker:small_shale_bricks', 'clinker:shale')
event.stonecutting('clinker:small_shale_bricks_fence', 'clinker:shale')

event.shapeless('botania:glimmering_livingwood_log', ['botania:livingwood_log', 'glowstone_dust'])


//Colors
vanillaColors.forEach(color => {
event.remove({output: ['supplementaries:candle_holder_'+color+'', 'suppsquared:gold_candle_holder_'+color+'']})
})

vanillaColors.forEach(color => {
event.remove({output: [''+color+'_banner', ''+color+'_carpet']})
event.shaped('2x '+color+'_banner', ['B', 'B', 'A'], {A: 'stick', B: 'handcrafted:'+color+'_sheet'})
event.shaped('2x '+color+'_carpet', ['AA'], {A: 'handcrafted:'+color+'_sheet'})
event.shaped('supplementaries:candle_holder_'+color+'', ['ABA', ' A '], {A: 'iron_nugget', B: ''+color+'_candle'})
event.shaped('suppsquared:gold_candle_holder_'+color+'', ['ABA', ' A '], {A: 'gold_nugget', B: ''+color+'_candle'})
})

//Misc Recipes
event.shaped('supplementaries:sack', ['AA', 'BB', 'BB'], {A: '#abyssal_skies:binding', B: '#abyssal_skies:cloth'})
event.shaped('bundle', ['A', 'B'], {A: '#abyssal_skies:binding', B: '#c:leathers'})
event.shaped('bundle', ['A', 'B'], {A: '#abyssal_skies:binding', B: '#abyssal_skies:cloth'})
event.shaped('3x farmersdelight:canvas', ['AA', 'AA'], {A: 'supplementaries:flax'})
event.shaped('2x suppsquared:copper_lantern', ['A', 'B', 'A'], {A: 'minecraft:copper_ingot', B: 'minecraft:torch'})
event.shaped('4x abyssal_decor:moonsilver_sconce', ['A A', 'AB ', 'A  '], {A: 'abyssal_decor:moonsilver_ingot', B: 'abyssal_decor:moonsilver_nugget'})
event.shaped('supplementaries:candle_holder', ['ABA', ' A '], {A: 'iron_nugget', B: 'candle'})
event.shaped('suppsquared:gold_candle_holder', ['ABA', ' A '], {A: 'gold_nugget', B: 'candle'})
event.shaped('8x abyssal_decor:cinnamon_leaves', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:leaves', B: 'abyssal_decor:cinnamon_stick'})
event.shaped('8x create:track', ['A A', 'BBB'], {A: 'iron_nugget', B: '#c:stones'})
event.shaped('8x create:track', ['A A', 'BBB'], {A: 'create:zinc_nugget', B: '#c:stones'})
event.shapeless('create:sturdy_sheet', ['2x obsidian', 'minecraft:blaze_powder'])
event.shaped('8x minecraft:ink_sac', ['AAA', 'ABA', 'AAA'], {A: 'minecraft:black_dye', B: 'supplementaries:sack'})
event.stonecutting('18x create:copper_shingles', 'minecraft:copper_block')
event.stonecutting('18x create:exposed_copper_shingles', 'minecraft:exposed_copper')
event.stonecutting('18x create:weathered_copper_shingles', 'minecraft:weathered_copper')
event.stonecutting('18x create:oxidized_copper_shingles', 'minecraft:oxidized_copper')
event.stonecutting('18x create:waxed_copper_shingles', 'minecraft:waxed_copper_block')
event.stonecutting('18x create:waxed_exposed_copper_shingles', 'minecraft:waxed_exposed_copper')
event.stonecutting('18x create:waxed_weathered_copper_shingles', 'minecraft:waxed_weathered_copper')
event.stonecutting('18x create:waxed_oxidized_copper_shingles', 'minecraft:waxed_oxidized_copper')
event.stonecutting('18x create:copper_tiles', 'minecraft:copper_block')
event.stonecutting('18x create:exposed_copper_tiles', 'minecraft:exposed_copper')
event.stonecutting('18x create:weathered_copper_tiles', 'minecraft:weathered_copper')
event.stonecutting('18x create:oxidized_copper_tiles', 'minecraft:oxidized_copper')
event.stonecutting('18x create:waxed_copper_tiles', 'minecraft:waxed_copper_block')
event.stonecutting('18x create:waxed_exposed_copper_tiles', 'minecraft:waxed_exposed_copper')
event.stonecutting('18x create:waxed_weathered_copper_tiles', 'minecraft:waxed_weathered_copper')
event.stonecutting('18x create:waxed_oxidized_copper_tiles', 'minecraft:waxed_oxidized_copper')
event.shapeless('2x atmospheric:red_arid_sand', ['sand', 'red_sand'])
event.shapeless('3x natures_spirit:pink_sand', ['2x sand', 'red_sand'])
event.shapeless('4x atmospheric:arid_sand', ['3x sand', 'red_sand'])

function twoByTwo(inputItem, resultItem, resultAmount) {
		event.shaped(Item.of(resultItem,resultAmount), ['AA', 'AA'], {A: inputItem})
	}

    twoByTwo('sand', 'sandstone', 4)
	twoByTwo('red_sand', 'red_sandstone', 4)
	twoByTwo('atmospheric:arid_sand', 'atmospheric:arid_sandstone', 4)
    twoByTwo('atmospheric:red_arid_sand', 'atmospheric:red_arid_sandstone', 4)
	twoByTwo('soul_sand', 'quark:soul_sandstone', 4)
    twoByTwo('natures_spirit:pink_sand', 'natures_spirit:pink_sandstone', 4)
})