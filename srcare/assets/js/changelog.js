$(function () {
  // Generate Dynamic Log File.

  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "Updated: Theme translation file & documentation."
    if ($dynamic_log.length) {
      data.forEach((element) => {
        var outputHtml = "<div>"

        outputHtml += `<p class="log_date">` + element[0] + `</p>`

        if (element[1].length > 0) {
          // console.log(element[1])

          outputHtml += `<ul class="square-list">`

          element[1].forEach((log) => {
            outputHtml += `<li>` + log + `</li>`
          })

          outputHtml += `<li>` + commonLogText + `</li>`
          outputHtml += `</ul>`
        }

        outputHtml += "</div>"

        $dynamic_log.before(outputHtml)
      })
    } else {
      alert("#dynamic_log is missing. Example: srcare doc")
    }
  }

  var changeLogData = [
    ["2023, August 21 - v 1.3.3", ["Updated: WPBakery Page Builder to 7.0", "Fixed: Translation issue of 404 page.", "Updated: Theme compatibility with the latest WordPress."]],
    ["2023, June 18 - v 1.3.2", ["Updated: WPBakery Page Builder to 6.13.0", "Updated: WooCommerce product list page add to cart button.", "Updated: Theme compatibility with the latest WordPress."]],
    ["2022, December 18 - v 1.3.1", ["Updated: WooCommerce Product Search Page.", "Updated: Theme compatibility with the latest WordPress."]],
    ["2022, October 17 - v 1.3.0", ["Updated: WPBakery Page Builder to 6.10.0", "Fixed: Theme options panel menu position issue."]],
  ]

  generateDynamicLog(changeLogData)

  // Update Version and Last Update Info

  function updateMetaInfo(metaData) {
    const $lastUpdate = $(".update"),
      $ver = $(".ver")

    if ($lastUpdate.length) {
      $ver.html("").html(metaData[0])
      $lastUpdate.html("").html(metaData[1])
    } else {
      alert(".update is missing. Example: srcare doc")
    }
  }

  var metaData = ["1.3.3", "21/08/2023"]

  updateMetaInfo(metaData)
})