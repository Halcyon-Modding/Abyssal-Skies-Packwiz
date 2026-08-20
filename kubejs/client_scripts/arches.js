ClientEvents.generateAssets("after_mods", (event) => {
    global.archesName.forEach((material, index) => {
        const texture = global.archesTexture[index];
        event.json("abyssal_skies:models/block/small_"+material+"_arch.json", { "parent": "arch_mc:custom/arch_1x1", "textures": { "all": ""+texture, "particle": ""+texture }, "render_type": "solid" })
        event.json("abyssal_skies:models/block/"+material+"_arch.json", { "parent": "arch_mc:custom/arch_2x2", "textures": { "all": ""+texture, "particle": ""+texture }, "render_type": "solid" })
        event.json("abyssal_skies:models/block/large_"+material+"_arch.json", { "parent": "arch_mc:custom/arch", "textures": { "all": ""+texture, "particle": ""+texture }, "render_type": "solid" })

    })
})