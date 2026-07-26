//bosses drop iron's ink

LootJS.lootTables(event => {
    event.getLootTable("irons_spellbooks:entities/fire_boss").createPool(pool => {
        pool.addEntry(LootEntry.reference("irons_spellbooks:magic_items/reward_ink")).rolls(4)
    })
})