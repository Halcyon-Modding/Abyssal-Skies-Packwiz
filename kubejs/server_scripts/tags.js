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
})


ServerEvents.tags('block',
     event => {
        event.get('minecraft:logs')
            .add('malum:runewood_log')
            .add('malum:exposed_runewood_log')
            .add('malum:soulwood_log')
            .add('malum:exposed_soulwood_log')
			.add('natures_spirit:alluaudia')
 })