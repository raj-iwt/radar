
window.onload = function () {
  if (!window.location.href.includes('sheetId')) {
    let sheetId = document.getElementById('sheetId')
    // console.log(config.sheetUri)
    // sheetId.value = config.sheetUri
    // document.getElementById('submit').click()
    fetch('./config.json')
    .then(data => {
      console.log(data)
      data.json()
      .then(config => {
        console.log(config)
        console.log(config.sheetUri)
        sheetId.value = config.sheetUri
        document.getElementById('submit').click()
      })
    })
  }
}
