ServerEvents.recipes(event => {
    const vanillaColors = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']

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
    'abyssal_decor:deepbronze_block_smelt'
    ]
    removedIds.forEach(removedId => {
        event.remove({id: removedId})
    })

event.remove({output: [
'supplementaries:sack',
'minecraft:chain',
'suppsquared:copper_lantern',
'minecraft:sandstone',
'minecraft:red_sandstone',
'quark:soul_sandstone',
'supplementaries:candle_holder',
'suppsquared:gold_candle_holder',
'natures_spirit:pink_sandstone'
]})

//Colors
allColors.forEach(color => {
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