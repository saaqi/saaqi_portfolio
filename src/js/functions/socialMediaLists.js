import socialLinks from '../../data/socialLinks.json'
const socialMediaLists = (selectorID, btn, color) => {
  const socialList = socialLinks.map(sl => {
    const {
      name = '',
      url = '',
      title = '',
      icon = ''
    } = sl

    const output =
    `<li>
      <a href="${url}" class="${name} ${btn ? `btn btn-icon btn-secondary rounded-circle` : ``}" title="${title}" target="_blank" rel="nofollow noopener">
        <svg class="icon ${icon} ${btn ? 'fs-6' : `fs-4`}" style="--icon-fill: ${btn ? 'var(--bs-btn-hover-color)' : `${color}`}">
          <use xlink:href="#${icon}"></use>
        </svg>
      </a>
    </li>`

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  parentSelector && (parentSelector.innerHTML = socialList.join(""))
}
export default socialMediaLists