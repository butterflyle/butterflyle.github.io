const root = document.documentElement //保存一份对根节点的引用，
const themeBtns = document.querySelectorAll('.theme > button')
themeBtns.forEach(btn => {
    btn.addEventListener('click', handleThemeUpdate)
}) //保存一份对按钮的引用

function handleThemeUpdate(e) {
    switch (e.target.value) {
        case 'dark':
            root.style.setProperty('--bg', 'black')
            root.style.setProperty('--bg-text', 'white')
            break
        case 'calm':
            root.style.setProperty('--bg', '#b3e5fc')
            root.style.setProperty('--bg-text', '#37474e')
            break
        case 'light':
            root.style.setProperty('--bg', 'white')
            rppt.style.setProperty('--bg-text', 'black')
    }
}
