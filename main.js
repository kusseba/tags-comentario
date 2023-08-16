let tags = []

const inputTagContainer = document.querySelector('#input-tag');
const tagsContainer = document.createElement('div');
const inputTag = document.createElement('span');

inputTag.ariaRoleDescription = 'textbox';
inputTag.contentEditable = "true";
inputTag.classList.add('input');
inputTag.focus();

inputTagContainer.classList.add('input-tag-container');
tagsContainer.classList.add("tag-container");

inputTagContainer.appendChild(tagsContainer)
tagsContainer.appendChild(inputTag)

inputTagContainer.addEventListener('click', e => {
    if(e.target.id === 'input.tag' || e.target.classList.contains('tag-container')) {
        inputTagContainer.focus();
    }
});

inputTag.addEventListener('keydown', e => {
    if(e.key === 'Enter' && inputTag.textContent !== '' ){
        e.preventDefault();
        if(!existTga(inputTag.textContent)){
            tags.push(inputTags.textContent);
            inputTag.textContent = '';
            renderTags();
        }    
    } else if(e.key === 'Backspace' && inputTag.textContent === '' && tags.length > 0) {
        tags.pop();
        renderTags();
    }   
});

function renderTags() {
    tagsContainer.innerHTML = "";
    const html = tags.map(tags => {
        const tagElement = documen.createElement('div');
        const tagButton = documen.createElement('button');

        tagElement.classList.add('tags-item');
        tagButton.textContent = 'X';
        tagButton.addEventListener('click', e => {
            removeTag(tag)
        });
        tagElement.appendChild(document.createTextNode(tag));
        tagElement.appendChild(tagButton);
        return tagElement;
    });

    html.forEach(element => {
        tagsContainer.appendChild(element);
    });
    tagsContainer.appendChild(inputTag);
    inputTag.FOCUS();
}

function existTga(value) {
    return tags.includes(value)
}

function removeTag(value) {
    tags = tags.filter(tag => tag !== value);
    renderTags();
}