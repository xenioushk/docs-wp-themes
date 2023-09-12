$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Updated:": "<b>Updated:</b>",
      "Fixed:": "<b>Fixed:</b>",
    }

    return string.replace(/Updated:|Fixed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>Updated:</b> Theme translation file & documentation."
    if ($dynamic_log.length) {
      data.forEach((element) => {
        var outputHtml = "<div>"

        outputHtml += `<p class="log_date">` + element[0] + `</p>`

        if (element[1].length > 0) {
          // console.log(element[1])

          outputHtml += `<ul class="square-list">`

          element[1].forEach((log) => {
            outputHtml += `<li>` + updatesLogTag(log) + `</li>`
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

  // Change only the version and date
  var metaData = ["1.3.3", "21/08/2023"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2023, August 21 - v 1.3.3", ["Updated: WPBakery Page Builder to 7.0", "Fixed: Translation issue of 404 page.", "Updated: Theme compatibility with the latest WordPress."]],
    ["2023, June 18 - v 1.3.2", ["Updated: WPBakery Page Builder to 6.13.0", "Updated: WooCommerce product list page add to cart button.", "Updated: Theme compatibility with the latest WordPress."]],
    ["2022, December 18 - v 1.3.1", ["Updated: WooCommerce Product Search Page.", "Updated: Theme compatibility with the latest WordPress."]],
    ["2022, October 17 - v 1.3.0", ["Updated: WPBakery Page Builder to 6.10.0", "Fixed: Theme options panel menu position issue."]],
  ]
  generateDynamicLog(changeLogData)
})
