ServerEvents.recipes(event => {
    //Logic Chip
        event.remove({ output: 'ae2:logic_processor' })
        event.shapeless(
            Item.of('ae2:logic_processor', 2),[
                        'create:brass_nugget',
                        '2x create:golden_sheet',
                        '2x minecraft:redstone'])
    //Cards
        //Basic Card
        event.remove({ output: 'ae2:basic_card' })
        event.shapeless(
            Item.of('ae2:basic_card', 4),[
                        'ae2:logic_processor',
                        '2x minecraft:iron_ingot',
                        '2x minecraft:redstone'])
    //Starter Certus
        event.shapeless(
            Item.of('ae2:damaged_budding_quartz', 1),[
                        '4x minecraft:quartz_block',
                        '1x hexcasting:dye_colorizer_light_blue'])
    //Skystone
        event.shapeless(
            Item.of('ae2:sky_stone_block', 16),[
                        '4x minecraft:obsidian',
                        '1x ae2:charged_certus_quartz_crystal'])
        //Redstone Card
        event.remove({ output: 'ae2:redstone_card' })
        event.stonecutting('ae2:redstone_card', '#forge:ae_card')
        //Capacity Card
        event.remove({ output: 'ae2:capacity_card' })
        event.stonecutting('ae2:capacity_card', '#forge:ae_card')
        //Void Card
        event.remove({ output: 'ae2:void_card' })
        event.stonecutting('ae2:void_card', '#forge:ae_card')
        //Fuzzy Card
        event.remove({ output: 'ae2:fuzzy_card' })
        event.stonecutting('ae2:fuzzy_card', '#forge:ae_card')
        //Speed Card
        event.remove({ output: 'ae2:speed_card' })
        event.stonecutting('ae2:speed_card', '#forge:ae_card')
        //Inverter Card
        event.remove({ output: 'ae2:inverter_card' })
        event.stonecutting('ae2:inverter_card', '#forge:ae_card')
        //Crafting Card
        event.remove({ output: 'ae2:crafting_card' })
        event.stonecutting('ae2:crafting_card', '#forge:ae_card')
        //Equal Distribution Card
        event.remove({ output: 'ae2:equal_distribution_card' })
        event.stonecutting('ae2:equal_distribution_card', '#forge:ae_card')
        //Energy Card
        event.remove({ output: 'ae2:energy_card' })
        event.stonecutting('ae2:energy_card', '#forge:ae_card')
        //Magnet Card
        event.remove({ output: 'ae2wtlib:magnet_card' })
        event.stonecutting('ae2wtlib:magnet_card', '#forge:ae_card')

    //Network Blocks
        //Controller
        event.remove({ output: 'ae2:controller' })
        event.stonecutting('ae2:controller', 'create:brass_casing')
        //Drive
        event.remove({ output: 'ae2:drive' })
        event.stonecutting('ae2:drive', 'create:brass_casing')
        //ME Chest
        event.remove({ output: 'ae2:chest' })
        event.stonecutting('ae2:chest', 'create:brass_casing')
        //Interface
        event.remove({ output: 'ae2:interface' })
        event.stonecutting('ae2:interface', 'create:andesite_casing')
        //IO Port
        event.remove({ output: 'ae2:io_port' })
        event.stonecutting('ae2:io_port', 'create:brass_casing')
        //Condenser
        event.remove({ output: 'ae2:condenser' })
        event.stonecutting('ae2:condenser', 'create:brass_casing')
        //Energy Acceptor
        event.remove({ output: 'ae2:energy_acceptor' })
        event.stonecutting('ae2:energy_acceptor', 'create:andesite_casing')
        //Resonator
        event.remove({ output: 'ae2:crystal_resonance_generator' })
        event.stonecutting('ae2:crystal_resonance_generator', 'create:andesite_casing')
        //Vibration
        event.remove({ output: 'ae2:vibration_chamber' })
        event.stonecutting('ae2:vibration_chamber', 'create:andesite_casing')
        //Growth Accelerator
        event.remove({ output: 'ae2:growth_accelerator' })
        event.stonecutting('ae2:growth_accelerator', 'create:brass_casing')
        //Crafting Unit
        event.remove({ output: 'ae2:crafting_unit' })
        event.stonecutting('ae2:crafting_unit', 'create:brass_casing')
        //Crafting Accelerator
        event.remove({ output: 'ae2:crafting_accelerator' })
        event.shapeless(
            Item.of('ae2:crafting_accelerator'),[
                        'ae2:logic_processor',
                        'ae2:crafting_unit'])
        //Assembler
        event.remove({ output: 'ae2:molecular_assembler' })
        event.shapeless(
            Item.of('ae2:molecular_assembler'),[
                        'create:mechanical_crafter',
                        'ae2:crafting_card'])
        //Pattern Provider
        event.shapeless(
            Item.of('ae2:pattern_provider'),[
                        'ae2:interface',
                        'ae2:crafting_card'])
        //Energy Cell
        event.remove({ output: 'ae2:energy_cell' })
        event.stonecutting('ae2:energy_cell', 'create:brass_casing')
        //Dense Energy Cell
        event.remove({ output: 'ae2:dense_energy_cell' })
        event.shapeless(
            Item.of('ae2:dense_energy_cell'),[
                        '8x ae2:energy_cell'])
        //Inscriber
        event.remove({ output: 'ae2:inscriber' })
        event.stonecutting('ae2:inscriber', 'create:andesite_casing')
        //Inscriber Name Press
        event.stonecutting('ae2:name_press', 'create:iron_sheet')
        //Workbench
        event.remove({ output: 'ae2:cell_workbench' })
        event.stonecutting('ae2:cell_workbench', 'create:brass_casing')
        //Charger
        event.remove({ output: 'ae2:charger' })
        event.stonecutting('ae2:charger', 'create:andesite_casing')
        //Spatial Port
        event.remove({ output: 'ae2:spatial_io_port' })
        event.stonecutting('ae2:spatial_io_port', 'create:brass_casing')
        //Pylon
        event.remove({ output: 'ae2:spatial_io_port' })
        event.shapeless(
            Item.of('64x ae2:spatial_pylon'),[
                        'aeronautics:levitite_blend_bucket',
                        'ae2:spatial_io_port'
                    ])
        //Link
        event.remove({ output: 'ae2:quantum_link' })
        event.shapeless(
            Item.of('2x ae2:quantum_link'),[
                        'aeronautics:levitite_blend_bucket',
                        'ae2:singularity'
                    ])
        //Ring
        event.remove({ output: 'ae2:quantum_ring' })
        event.shapeless(
            Item.of('16x ae2:quantum_ring'),[
                        'aeronautics:levitite_blend_bucket',
                        'ae2:dense_energy_cell'
                    ])
        
    //Network Panels
        //Default Panel
        event.remove({ output: 'ae2:semi_dark_monitor' })
        event.stonecutting('ae2:semi_dark_monitor', 'minecraft:glowstone')
        //Bright Panel
        event.remove({ output: 'ae2:monitor' })
        event.stonecutting('ae2:monitor', '#forge:ae_panels')
        //Dark Panel
        event.remove({ output: 'ae2:dark_monitor' })
        event.stonecutting('ae2:dark_monitor', '#forge:ae_panels')
        //Pattern
        event.remove({ output: 'ae2:pattern_encoding_terminal' })
        event.stonecutting('ae2:pattern_encoding_terminal', '#forge:ae_panels')
        //Crafting
        event.remove({ output: 'ae2:crafting_terminal' })
        event.stonecutting('ae2:crafting_terminal', '#forge:ae_panels')
        //Storage
        event.remove({ output: 'ae2:storage_monitor' })
        event.stonecutting('ae2:storage_monitor', '#forge:ae_panels')
        //Conversion
        event.remove({ output: 'ae2:conversion_monitor' })
        event.stonecutting('ae2:conversion_monitor', '#forge:ae_panels')
        //Pattern Access
        event.remove({ output: 'ae2:pattern_access_terminal' })
        event.stonecutting('ae2:pattern_access_terminal', '#forge:ae_panels')
                
    //Network IO
        //Level
        event.remove({ output: 'ae2:level_emitter' })
        event.stonecutting('16x ae2:level_emitter', 'ae2:interface')
        //Energy
        event.remove({ output: 'ae2:energy_level_emitter' })
        event.stonecutting('16x ae2:energy_level_emitter', 'ae2:interface')
        //Storage
        event.remove({ output: 'ae2:energy_level_emitter' })
        event.stonecutting('ae2:storage_bus', 'ae2:interface')
        //Export
        event.remove({ output: 'ae2:energy_level_emitter' })
        event.stonecutting('4x ae2:export_bus', 'ae2:interface')
        //Import
        event.remove({ output: 'ae2:energy_level_emitter' })
        event.stonecutting('4x ae2:import_bus', 'ae2:interface')
        //Annihilation
        event.remove({ output: 'ae2:energy_level_emitter' })
        event.stonecutting('2x ae2:annihilation_plane', 'ae2:interface')
        //Formation
        event.remove({ output: 'ae2:energy_level_emitter' })
        event.stonecutting('2x ae2:formation_plane', 'ae2:interface')
        //P2P
        event.remove({ output: 'ae2:me_p2p_tunnel' })
        event.stonecutting('2x ae2:me_p2p_tunnel', 'ae2:interface')
        //Wireless Terminal
        event.remove({ output: 'ae2wtlib:wireless_universal_terminal' })
        event.shapeless(
            Item.of('ae2wtlib:wireless_universal_terminal'),[
                        'ae2:dense_energy_cell',
                        'ae2:crafting_terminal',
                        'aeronautics:levitite_blend_bucket'
                    ])
        //Wireless Access
        event.remove({ output: 'ae2:wireless_access_point' })
        event.stonecutting('ae2:wireless_access_point', 'create:brass_casing')
        //Wireless Booster
        event.remove({ output: 'ae2:wireless_booster' })
        event.stonecutting('16x ae2:wireless_booster', 'botania:corporea_spark')
        //Quantum Booster
        event.remove({ output: 'ae2wtlib:quantum_bridge_card' })
        event.stonecutting('ae2wtlib:quantum_bridge_card', 'ae2:singularity')
    
    //Tools
        //Entropy
        event.remove({ output: 'ae2:entropy_manipulator' })
        event.stonecutting('ae2:entropy_manipulator', 'industrialhellscape:inhell_haven_device')
        event.stonecutting('ae2:entropy_manipulator', '#forge:ae_tools')
        //Charge
        event.remove({ output: 'ae2:charged_staff' })
        event.stonecutting('ae2:charged_staff', 'industrialhellscape:inhell_haven_device')
        event.stonecutting('ae2:charged_staff', '#forge:ae_tools')
        //Color
        event.remove({ output: 'ae2:color_applicator' })
        event.stonecutting('ae2:color_applicator', 'industrialhellscape:inhell_haven_device')
        event.stonecutting('ae2:color_applicator', '#forge:ae_tools')
        //Cannon
        event.remove({ output: 'ae2:matter_cannon' })
        event.stonecutting('ae2:matter_cannon', 'industrialhellscape:inhell_haven_device')
        event.stonecutting('ae2:matter_cannon', '#forge:ae_tools')
        //Network
        event.remove({ output: 'ae2:network_tool' })
        event.stonecutting('ae2:network_tool', 'industrialhellscape:inhell_haven_device')
        event.stonecutting('ae2:network_tool', '#forge:ae_tools')
        //Memory
        event.remove({ output: 'ae2:memory_card' })
        event.stonecutting('ae2:memory_card', 'industrialhellscape:inhell_haven_device')
        event.stonecutting('ae2:memory_card', '#forge:ae_tools')
        //Compass
        event.remove({ output: 'ae2:meteorite_compass' })
        event.stonecutting('ae2:meteorite_compass', 'industrialhellscape:inhell_haven_device')
        event.stonecutting('ae2:meteorite_compass', '#forge:ae_tools')
        
    //Network
        //Fluix Cable
        event.remove({ output: 'ae2:fluix_glass_cable' })
        event.shapeless(
            Item.of('ae2:fluix_glass_cable', 32),[
                        'ae2:quartz_fiber',
                        '2x ae2:fluix_crystal'])
        //Covered Cable
        event.remove({ output: 'ae2:fluix_covered_cable' })
        event.stonecutting('ae2:fluix_covered_cable', '#forge:ae_cable')
        //Toggle Bus
        event.remove({ output: 'ae2:toggle_bus' })
        event.stonecutting('ae2:toggle_bus', '#forge:ae_cable')
        //Inverse Toggle Bus
        event.remove({ output: 'ae2:inverted_toggle_bus' })
        event.stonecutting('ae2:inverted_toggle_bus', '#forge:ae_cable')

    //Storage Items
        //1k component
        event.remove({ output: 'ae2:cell_component_1k' })
        event.shapeless(
            Item.of('ae2:cell_component_1k', 2),[
                        'ae2:logic_processor',
                        '2x ae2:certus_quartz_dust'])
        //4k component
        event.remove({ output: 'ae2:cell_component_4k' })
        event.shapeless(
            Item.of('ae2:cell_component_4k', 2),[
                        '2x ae2:cell_component_1k',
                        '2x ae2:charged_certus_quartz_crystal'])
        //16k component
        event.remove({ output: 'ae2:cell_component_16k' })
        event.shapeless(
            Item.of('ae2:cell_component_16k', 2),[
                        '2x ae2:cell_component_4k',
                        '2x ae2:fluix_crystal'])
        //64k component
        event.remove({ output: 'ae2:cell_component_64k' })
        event.shapeless(
            Item.of('ae2:cell_component_64k', 2),[
                        '2x ae2:cell_component_16k',
                        '2x ae2:fluix_pearl'])
        //256k component
        event.remove({ output: 'ae2:cell_component_256k' })
        event.shapeless(
            Item.of('ae2:cell_component_256k', 2),[
                        '2x ae2:cell_component_64k',
                        '2x botania:mana_pearl'])
        //128^3 Spatial
        event.remove({ output: 'ae2:spatial_cell_component_128' })
        event.shapeless(
            Item.of('ae2:spatial_cell_component_128'),[
                        '2x ae2:cell_component_64k',
                        'aeronautics:levitite_blend_bucket'])
})