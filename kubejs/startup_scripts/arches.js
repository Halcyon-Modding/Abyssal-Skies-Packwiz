StartupEvents.registry("block", (event) => {
    global.archesName.forEach(material => {
        event.create('abyssal_skies:small_'+material+'_arch', 'cardinal').opaque(false).fullBlock(false).box(0, 4, 0, 2, 16, 16, true).box(0, 16, 0, 16, 14, 16, true).box(14, 4, 0, 16, 16, 16, true).transparent(true).notSolid().stoneSoundType().hardness(2).resistance(1).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
        event.create('abyssal_skies:'+material+'_arch', 'cardinal').opaque(false).fullBlock(false).box(16, 0, 14, 0, 16, 16, true).box(0, 16, 0, 16, 12, 16, true).transparent(true).notSolid().stoneSoundType().hardness(2).resistance(1).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
        event.create('abyssal_skies:large_'+material+'_arch', 'cardinal').opaque(false).fullBlock(false).box(16, 0, 14, 0, 16, 16, true).box(0, 16, 0, 16, 12, 16, true).transparent(true).notSolid().stoneSoundType().hardness(2).resistance(1).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
    })
})
