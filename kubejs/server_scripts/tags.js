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