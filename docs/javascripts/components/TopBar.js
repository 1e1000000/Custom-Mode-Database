Vue.component("top-bar", {
    props: {
        version: String
    },
    template: `
    <header>
        <menu-button @toggle-menu="$emit('menu')"></menu-button>
        <div class="title">
            2048 Power Compendium Custom Mode Database
        </div>
        <div class="about">
            <span class="version">{{version}}</span>
            <span class="link">
                 | <a target="_blank" href="changelog.html" class="link">Changelog</a>
                 | <a target="_blank" href="https://github.com/1e1000000/2048-Power-Compendium-Custom-Mode-Database/" class="link">Github</a>
            </span>
        </div>
    </header>
    `
});
