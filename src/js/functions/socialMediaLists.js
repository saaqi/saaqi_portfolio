import socialLinks from '../../data/socialLinks.json'
const socialMediaLists = (selectorID, btn) => {
  const socialList = socialLinks.map(sl => {
    const {
      name = '',
      url = '',
      title = '',
      icon = ''
    } = sl

    const output =
    `<li>
      <a href="${url}" class="${name} ${btn ? `btn btn-icon btn-secondary rounded-circle` : ``}" title="${title}" target="_blank" rel="nofollow">
        <i class="bx ${icon} ${btn ? '' : `link-info`} ${icon} ${btn ? 'fs-6' : `fs-4`}"></i>
      </a>
    </li>`

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  if (parentSelector) parentSelector.innerHTML = socialList.join("")
}
export default socialMediaLists