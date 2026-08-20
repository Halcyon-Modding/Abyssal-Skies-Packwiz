ServerEvents.recipes(event => {
    global.archesName.forEach((material, index) => {
        const id = global.archesId[index];
        event.stonecutting('abyssal_skies:small_'+material+'_arch', id)
    })
})