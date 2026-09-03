ServerEvents.tags('item',
     event => {
    
    event.get('minecraft:axes')
    .add('malum:soul_stained_steel_axe')

    event.get('forge:cobblestone')
    .add('natures_spirit:cobbled_travertine')

    event.get('quark:stone_tool_materials')
    .add('natures_spirit:cobbled_travertine')
    .add('natures_spirit:travertine')

    event.get('minecraft:stone_tool_materials')
    .add('natures_spirit:cobbled_travertine')

    event.get('forge:stone')
    .add('natures_spirit:travertine')

    event.removeAll('brazier:range_indicator')
    event.get('brazier:range_indicator')
        .add('malum:spectral_optic')
    
    event.removeAll('irons_spellbooks:lightning_focus')
    event.get('irons_spellbooks:lightning_focus')
        .add('ae2:charged_certus_quartz_crystal')

    event.get('irons_spellbooks:lootable_focus')
        .add('minecraft:blaze_rod')
		
	event.get('c:nuggets')
        .add('abyssal_decor:seabrass_nugget', 'architects_palette:nether_brass_nugget', 'abyssal_decor:bellmetal_nugget', 'abyssal_decor:deepbronze_nugget', 'abyssal_decor:moonsilver_nugget', 'createbigcannons:nethersteel_nugget', 'createbigcannons:cast_iron_nugget', 'createbigcannons:bronze_scrap', 'createbigcannons:steel_scrap')
		
	event.get('c:ingots')
        .add('createbigcannons:steel_ingot', 'createbigcannons:bronze_ingot', 'createbigcannons:cast_iron_ingot', 'abyssal_decor:deepbronze_ingot', 'abyssal_decor:seabrass_ingot', 'abyssal_decor:bellmetal_ingot', 'abyssal_decor:moonsilver_ingot', 'createbigcannons:nethersteel_ingot')

        event.get('connectiblechains:hangable_items')
    .add([
        'architects_palette:nether_brass_lantern', 
        'quark:paper_lantern',
        'quark:paper_lantern_sakura',
        'natures_spirit:white_paper_lantern',
        'natures_spirit:light_gray_paper_lantern',
        'natures_spirit:gray_paper_lantern',
        'natures_spirit:black_paper_lantern',
        'natures_spirit:brown_paper_lantern',
        'natures_spirit:red_paper_lantern',
        'natures_spirit:orange_paper_lantern',
        'natures_spirit:yellow_paper_lantern',
        'natures_spirit:lime_paper_lantern',
        'natures_spirit:green_paper_lantern',
        'natures_spirit:cyan_paper_lantern',
        'natures_spirit:light_blue_paper_lantern',
        'natures_spirit:blue_paper_lantern',
        'natures_spirit:purple_paper_lantern',
        'natures_spirit:magenta_paper_lantern',
        'natures_spirit:pink_paper_lantern',
        'bountifulfares:feldspar_lantern',
        'suppsquared:copper_lantern',
        'suppsquared:crimson_lantern',
        'caverns_and_chasms:cupric_lantern',
        'caverns_and_chasms:copper_lantern',
        'caverns_and_chasms:exposed_copper_lantern',
        'caverns_and_chasms:weathered_copper_lantern',
        'caverns_and_chasms:oxidized_copper_lantern',
        'caverns_and_chasms:waxed_copper_lantern',
        'caverns_and_chasms:waxed_exposed_copper_lantern',
        'caverns_and_chasms:waxed_weathered_copper_lantern',
        'caverns_and_chasms:waxed_oxidized_copper_lantern',
        'upgrade_aquatic:tooth_lantern',
        'xkdeco:paper_lantern',
        'xkdeco:red_lantern',
        'xkdeco:festival_lantern',
        'natures_spirit:paper_lantern',
        'dustydecorations:paper_lantern',
        'dustydecorations:creeper_paper_lantern',
        'dustydecorations:sakura_paper_lantern',
        'dustydecorations:warden_paper_lantern',
        'dustydecorations:villager_paper_lantern',
        'dustydecorations:pillager_paper_lantern',
        'dustydecorations:panda_paper_lantern',
        'dustydecorations:taiga_paper_lantern',
        'dustydecorations:orchid_paper_lantern',
        'dustydecorations:chicken_jockey_paper_lantern',
        'yuushya:oriental_lantern',
        'yuushya:goth_lantern',
        'cluttered:hoppin_park_lantern',
        'cluttered:sea_gem_lantern',
        'xkdeco:covered_lamp',
        'xkdeco:stone_lamp',
        'xkdeco:deepslate_lamp',
        'xkdeco:blackstone_lamp',
        'abyssal_decor:street_lamp',
        '#supplementaries:candle_holders',
        'suppsquared:brass_lantern',
        'caverns_and_chasms:brazier',
        'caverns_and_chasms:soul_brazier',
        'caverns_and_chasms:cupric_brazier',
        'supplementaries:fire_pit'
        
    ])

    event.get('abyssal_skies:cloth')
    .add(['farmersdelight:canvas', 'nirvana:hemp_cloth'])

    event.get('abyssal_skies:binding')
    .add(['supplementaries:rope', 'farmersdelight:rope', 'darkerdepths:rope', 'minecraft:string'])

    event.get('c:milk')
    .add('bountifulfares:coconut_milk_bottle')

    event.get('industrialhellscape:ih_recipe_ingots')
    .add(['copper_ingot', 'create:zinc_ingot'])

})


ServerEvents.tags('block',
     event => {
        event.get('minecraft:logs')
            .add('malum:runewood_log')
            .add('malum:exposed_runewood_log')
            .add('malum:soulwood_log')
            .add('malum:exposed_soulwood_log')
			.add('natures_spirit:alluaudia')

        event.get('drizzleproof:static_blocks')
        .add('nomansland:wooden_scaffolding')

        event.get('kubejs:bars')
        .add(['minecraft:iron_bars',
                'supplementaries:gold_bars',
                'caverns_and_chasms:tin_bars',
                'quark:gold_bars',
                'caverns_and_chasms:golden_bars',
                'caverns_and_chasms:silver_bars',
                'caverns_and_chasms:copper_bars',
                'caverns_and_chasms:exposed_copper_bars',
                'caverns_and_chasms:weathered_copper_bars',
                'caverns_and_chasms:oxidized_copper_bars',
                'caverns_and_chasms:waxed_copper_bars',
                'caverns_and_chasms:waxed_exposed_copper_bars',
                'caverns_and_chasms:waxed_weathered_copper_bars',
                'caverns_and_chasms:waxed_oxidized_copper_bars',
                'architects_palette:sunmetal_bars',
                'architects_palette:entwine_bars',
                'xkdeco:hollow_steel_bars',
                'incision:tarnished_bars',
                'places:iron_grate_bars',
                'places:metal_fence',
                'places:aluminium_grate_bars',
                'places:industrial_bars',
                'places:industrial_grate_bars',
                'places:rusty_bars',
                'places:rusty_grate_bars',
                'createdeco:andesite_bars_overlay',
                'createdeco:andesite_bars',
                'createdeco:brass_bars_overlay',
                'createdeco:brass_bars',
                'createdeco:iron_bars_overlay',
                'createdeco:copper_bars_overlay',
                'createdeco:copper_bars',
                'createdeco:industrial_iron_bars_overlay',
                'createdeco:industrial_iron_bars',
                'createdeco:zinc_bars_overlay',
                'createdeco:zinc_bars',
                'abyssal_decor:pearly_bars_solo',
                'abyssal_decor:stone_bars',
                'abyssal_decor:ornate_iron_bars',
                'abyssal_decor:dull_iron_bars',
                'abyssal_decor:ornate_dull_iron_bars',
                'abyssal_decor:moonsilver_bars_solo',
                'abyssal_decor:gold_bars',
                'abyssal_decor:blood_coral_bars_solo',
                'abyssal_decor:seabrass_bars',
                'abyssal_decor:ornate_seabrass_bars',
                'abyssal_decor:ornate_deepbronze_bars',
                'abyssal_decor:black_pearl_bars_solo',
                'abyssal_decor:bellmetal_bars_solo',
                'create:andesite_bars',
                'create:brass_bars',
                'create:copper_bars',
                '#abyssal_decor:pearly_bars_tag',
                '#abyssal_decor:stone_bars_tag',
                '#abyssal_decor:dull_iron_bars_tag',
                '#abyssal_decor:moonsilver_bars_tag',
                '#abyssal_decor:gold_bars_tag',
                '#abyssal_decor:blood_coral_bars_tag',
                '#abyssal_decor:seabrass_bars',
                '#abyssal_decor:black_pearl_bars_tag',
                '#abyssal_decor:bellmetal_bars_tag',
                'abyssal_decor:barb_barrier_base',
                'abyssal_decor:rope_barrier_base',
                'abyssal_decor:velvet_barrier_base',
                'abyssal_decor:iron_barrier_base',
                'abyssal_decor:barb_barrier_top',
                'abyssal_decor:rope_barrier_top',
                'abyssal_decor:velvet_barrier_top',
                'abyssal_decor:iron_barrier_top'
            ])

        event.get('connectiblechains:chain_connectible')
        .add('supplementaries:stick')
        .add('#kubejs:bars')

        event.get('minecraft:dirt')
        .add(['minecraft:sand', 'minecraft:red_sand', 'natures_spirit:pink_sand', 'atmospheric:arid_sand', 'atmospheric:red_arid_sand', '#minecraft:terracotta'])

        event.get('abyssal_skies:burlap')
        .add(['nirvana:hemp_burlap', 'nirvana:white_hemp_burlap', 'nirvana:light_gray_hemp_burlap', 'nirvana:gray_hemp_burlap', 'nirvana:black_hemp_burlap', 'nirvana:brown_hemp_burlap', 'nirvana:red_hemp_burlap', 'nirvana:orange_hemp_burlap', 'nirvana:yellow_hemp_burlap', 'nirvana:lime_hemp_burlap', 'nirvana:green_hemp_burlap', 'nirvana:cyan_hemp_burlap', 'nirvana:light_blue_hemp_burlap', 'nirvana:blue_hemp_burlap', 'nirvana:purple_hemp_burlap', 'nirvana:magenta_hemp_burlap', 'nirvana:pink_hemp_burlap', 'nirvana:woven_burlap', 'nirvana:white_woven_burlap', 'nirvana:light_gray_woven_burlap', 'nirvana:gray_woven_burlap', 'nirvana:black_woven_burlap', 'nirvana:brown_woven_burlap', 'nirvana:red_woven_burlap', 'nirvana:orange_woven_burlap', 'nirvana:yellow_woven_burlap', 'nirvana:lime_woven_burlap', 'nirvana:green_woven_burlap', 'nirvana:cyan_woven_burlap', 'nirvana:light_blue_woven_burlap', 'nirvana:blue_woven_burlap', 'nirvana:purple_woven_burlap', 'nirvana:magenta_woven_burlap', 'nirvana:pink_woven_burlap'])

        event.get('aeronautics:airtight')
        .add(['#abyssal_skies:burlap'])

        event.get('sable:super_light')
        .add(['#abyssal_skies:burlap'])

        event.get('simulated:non_movable')
        .add(['/molten_vents:.*/'])

        event.get('minecraft:mineable/pickaxe')
        .add(['/bits_n_bobs:.*_tiles/', '/bits_n_bobs:.*_tile_slab/', '/bits_n_bobs:.*_tile_stairs/'])
 })

 ServerEvents.tags('function',
     event => {
        event.get('minecraft:tick')
        .add('abyssal_skies:tick')

     })