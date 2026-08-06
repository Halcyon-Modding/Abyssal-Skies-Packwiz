ServerEvents.recipes(event => {

    const allColors = ['white', 'light_gray', 'gray', 'black', 'brown', 'maroon', 'rose', 'red', 'coral', 'ginger', 'orange', 'tan', 'beige', 'yellow', 'olive', 'amber', 'lime', 'forest', 'green', 'verdant', 'teal', 'cyan', 'aqua', 'mint', 'light_blue', 'blue', 'navy', 'slate', 'indigo', 'purple', 'magenta', 'pink']
    const vanillaColors = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']
    const dyeDepotColors = ['maroon', 'rose', 'coral', 'ginger', 'tan', 'beige', 'olive', 'amber', 'forest', 'verdant', 'teal', 'aqua', 'mint', 'navy', 'slate', 'indigo']

    const removedIds = [
    'minecraft:vesselplate_smelt_recycle',
    'minecraft:strut_smelt_recycle',
    'minecraft:hvac_smelt_recycle',
    'minecraft:vesselplate_blast_recycle',
    'minecraft:strut_blast_recycle',
    'minecraft:hvac_blast_recycle',
    'industrialhellscape:strut',
    'industrialhellscape:vesselplate_from_iron_block',
    'industrialhellscape:vesselplate_from_iron_ingot',
    'industrialhellscape:duct',
    'abyssal_decor:moonsilver_sconce_recipe',
    'abyssal_decor:moonsilver_ingot_recipe',
    'abyssal_decor:seabrass_ingot_recipe',
    'abyssal_decor:deepbronze_ingot_temp_recipe',
    'abyssal_decor:deepbronze_block_smelt',
    //Dyes
    'minecraft:light_blue_dye_from_blue_orchid',
    'minecraft:light_gray_dye_from_azure_bluet',
    'windswept:yellow_dye_from_mimosa',
    'windswept:light_blue_dye_from_nightshade',
    'windswept:blue_dye_from_bluebells',
    'windswept:red_dye_from_red_rose_bush',
    'dye_depot:rose_dye_from_rose_bush',
    'minecraft:orange_dye_from_torchflower',
    'minecraft:orange_dye_from_open_eyeblossom',
    'minecraft:yellow_dye_from_wildflowers',
    'windswept:red_dye_from_wild_ginger',
    'windswept:orange_dye_from_lions_tail',
    'windswept:purple_dye_from_lupine',
    'minecraft:cyan_dye_from_pitcher_plant',
    'verdant:purple_dye_from_anemone',
    'verdant:orange_dye_from_poker',
    'verdant:red_dye_from_salvia',
    'verdant:green_dye_from_saguaro_block',
    'verdant:green_dye_from_saguaro_arm',
    'abyssal_decor:daffodil_dye',
    'abyssal_decor:fever_blossom_dye',
    'windswept:yellow_dye_from_yellow_petals',
    'windswept:red_dye_from_red_rose',
    'windswept_delights:cutting/bluebells',
    'windswept_delights:cutting/nightshade',
    'farmersdelight:cutting/blue_orchid',
    'windswept_delights:cutting/mimosa',
    'farmersdelight:cutting/torchflower',
    'windswept_delights:cutting/red_rose',
    'windswept_delights:cutting/ginger_flower',
    'farmersdelight:cutting/rose_bush',
    ]
    removedIds.forEach(removedId => {
        event.remove({id: removedId})
    })

event.remove({output: [
'supplementaries:sack',
'minecraft:chain',
'minecraft:copper_chain',
'suppsquared:copper_lantern',
'minecraft:sandstone',
'minecraft:red_sandstone',
'quark:soul_sandstone',
'supplementaries:candle_holder',
'waxed:soul_candle_holder',
'suppsquared:gold_candle_holder',
'waxed:gold_soul_candle_holder',
]})

//Colors
allColors.forEach(color => {
event.remove({output: ['supplementaries:flag_'+color+'', 'supplementaries:candle_holder_'+color+'', 'suppsquared:gold_candle_holder_'+color+'']})
})

vanillaColors.forEach(color => {
event.remove({output: [''+color+'_banner', ''+color+'_carpet']})
event.shaped('2x '+color+'_banner', ['B', 'B', 'A'], {A: 'stick', B: 'handcrafted:'+color+'_sheet'})
event.shaped('2x '+color+'_carpet', ['AA'], {A: 'handcrafted:'+color+'_sheet'})
event.shaped('supplementaries:candle_holder_'+color+'', ['ABA', ' A '], {A: 'iron_nugget', B: ''+color+'_candle'})
event.shaped('suppsquared:gold_candle_holder_'+color+'', ['ABA', ' A '], {A: 'gold_nugget', B: ''+color+'_candle'})
})

//Misc Recipes
event.shaped('supplementaries:sack', ['AA', 'BB', 'BB'], {A: 'string', B: 'farmersdelight:canvas'})
event.shaped('supplementaries:sack', ['AA', 'BB'], {A: 'string', B: 'nirvana:hemp_cloth'})
event.shaped('bundle', ['A', 'B'], {A: 'string', B: '#forge:leather'})
event.shaped('bundle', ['A', 'B'], {A: 'string', B: 'nirvana:hemp_cloth'})
event.shaped('bundle', [' A ', 'B B', ' B '], {A: 'string', B: 'farmersdelight:canvas'})
event.shaped('3x farmersdelight:canvas', ['AA', 'AA'], {A: 'supplementaries:flax'})
event.shaped('2x suppsquared:copper_lantern', ['A', 'B', 'A'], {A: 'minecraft:copper_ingot', B: 'minecraft:torch'})
event.shaped('4x abyssal_decor:moonsilver_sconce', ['A A', 'AB ', 'A  '], {A: 'abyssal_decor:moonsilver_ingot', B: 'abyssal_decor:moonsilver_nugget'})
event.shaped('supplementaries:candle_holder', ['ABA', ' A '], {A: 'iron_nugget', B: 'candle'})
event.shaped('suppsquared:gold_candle_holder', ['ABA', ' A '], {A: 'gold_nugget', B: 'candle'})
event.shaped('8x abyssal_decor:cinnamon_leaves', ['AAA', 'ABA', 'AAA'], {A: '#minecraft:leaves', B: 'abyssal_decor:cinnamon_stick'})
event.shaped('8x create:track', ['A A', 'BBB'], {A: 'iron_nugget', B: '#forge:stone'})
event.shaped('8x create:track', ['A A', 'BBB'], {A: 'create:zinc_nugget', B: '#forge:stone'})
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