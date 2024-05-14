function customRender(customElement, maincontainer){
    const docElement = document.createElement(customElement.type)
    docElement.innerHTML = customElement.children
    for (const prop in customElement.props) {
        docElement.setAttribute(prop, customElement.props[prop])
    }
    maincontainer.appendChild(docElement)
}

const maincontainer = document.querySelector('#root')
const customElement = {
    type: 'a',
    children: 'Google',
    props: { href: 'https://google.com', target: '_blank'}
}
customRender(customElement, maincontainer)


