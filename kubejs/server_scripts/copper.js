const copperBlocks = [
'minecraft:chiseled_copper', 
'minecraft:copper_grate', 
'minecraft:cut_copper', 
'caverns_and_chasms:copper_bricks', 
'caverns_and_chasms:chiseled_copper_bricks', 
'minecraft:copper_door', 
'minecraft:copper_trapdoor', 
'caverns_and_chasms:copper_bars', 
'caverns_and_chasms:copper_bars_sliding_door', 
'caverns_and_chasms:copper_chain', 
'minecraft:copper_bulb', 
'architects_palette:copper_nub', 
'caverns_and_chasms:copper_lantern', 
'caverns_and_chasms:copper_rail', 
'blockbox:copper_bars', 
'blockbox:copper_bars_sliding_door', 
'blockbox:copper_pillar', 
'create:copper_shingles', 
'create:copper_tiles', 
'minecraft:cut_copper_slab', 
'minecraft:cut_copper_stairs', 
'caverns_and_chasms:copper_brick_slab', 
'caverns_and_chasms:copper_brick_stairs', 
'caverns_and_chasms:copper_brick_wall', 
'create:copper_shingle_slab', 
'create:copper_shingle_stairs', 
'create:copper_tile_slab', 
'create:copper_tile_stairs', 
'caverns_and_chasms:copper_ingot', 
'caverns_and_chasms:floodlight'
]

function oxideApplication(block, replacement) {
    BlockEvents.rightClicked(block, event => {
        let {block, player, item} = event
        if(item == 'abyssal_skies:copper_oxide'){
            const properties = block.properties
            let handUsed = player.mainHandItem == 'abyssal_skies:copper_oxide' ? 'MAIN_HAND' : 'OFF_HAND'
            if (!event.player.isCreative()) {
            event.item.count --
            }
            event.block.set(replacement, properties)
            event.player.swing(handUsed, true)
            event.player.playNotifySound("caverns_and_chasms:block.flint_block.brush", "blocks", 1, 1)
            event.player.playNotifySound("minecraft:block.copper.place", "blocks", 1, 1)
            event.level.spawnParticles('minecraft:scrape', true, event.block.pos.x + 0.5, event.block.pos.y + 0.5, event.block.pos.z + 0.5, 0.4, 0.4, 0.4, 20, 0.3)
            event.cancel();
        }
    })
    ServerEvents.recipes(event => {
    event.shapeless(replacement, [block, 'abyssal_skies:copper_oxide'])
    })
}

function oxideStrip(block, replacement) {
    BlockEvents.rightClicked(block, event => {
    if(event.player.getMainHandItem().hasTag("minecraft:axes") && !event.player.isCreative()) {
        event.block.popItemFromFace('abyssal_skies:copper_oxide', event.facing)
        const properties = event.block.properties
        event.block.set(replacement, properties)
        event.cancel()
    }
    })
}

oxideApplication('minecraft:copper_block', 'minecraft:exposed_copper')
oxideApplication('minecraft:exposed_copper', 'minecraft:weathered_copper')
oxideApplication('minecraft:weathered_copper', 'minecraft:oxidized_copper')

oxideApplication('minecraft:waxed_copper_block', 'minecraft:waxed_exposed_copper')
oxideApplication('minecraft:waxed_exposed_copper', 'minecraft:waxed_weathered_copper')
oxideApplication('minecraft:waxed_weathered_copper', 'minecraft:waxed_oxidized_copper')

oxideStrip('minecraft:exposed_copper')
oxideStrip('minecraft:weathered_copper')
oxideStrip('minecraft:oxidized_copper')

copperBlocks.forEach((copper) => {

    const waxed = copper.replace(':', ':waxed_')

    const waxed_exposed = waxed.replace('waxed_', 'waxed_exposed_')
    const waxed_weathered = waxed.replace('waxed_', 'waxed_weathered_')
    const waxed_oxidized = waxed.replace('waxed_', 'waxed_oxidized_')

    const exposed = copper.replace(':', ':exposed_')
    const weathered = copper.replace(':', ':weathered_')
    const oxidized = copper.replace(':', ':oxidized_')

oxideApplication(waxed, waxed_exposed)
oxideApplication(waxed_exposed, waxed_weathered)
oxideApplication(waxed_weathered, waxed_oxidized)

oxideApplication(copper, exposed)
oxideApplication(exposed, weathered)
oxideApplication(weathered, oxidized)

oxideStrip(oxidized, weathered)
oxideStrip(weathered, exposed)
oxideStrip(exposed, copper)

})