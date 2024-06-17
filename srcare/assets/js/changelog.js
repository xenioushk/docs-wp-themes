$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Updated:": "<b>Updated:</b>",
      "Fixed:": "<b>Fixed:</b>",
      "Removed:": "<b>Removed:</b>",
    }

    return string.replace(/Updated:|Fixed:|Removed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>Updated:</b> Theme compatibility with the latest WordPress, translation file, & documentation."
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
  var metaData = ["1.4.1", "17/06/2024"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2024, June 17 - v 1.4.1", ["Updated: WPBakery Page Builder to 7.7", "Updated: Senior Care Theme WP Bakery Page Builder Addons to 1.3.2"]],
    ["2024, April 23 - v 1.4.0", ["Updated: WPBakery Page Builder to 7.6", "Updated: WooCommerce single product template."]],
    ["2024, March 15 - v 1.3.9", ["Updated: WPBakery Page Builder to 7.5"]],
    ["2024, February 20 - v 1.3.8", ["Updated: WPBakery Page Builder to 7.4"]],
    ["2024, January 07 - v 1.3.7", ["Updated: Senior Care Theme WP Bakery Page Builder Addons to 1.3.1"]],
    ["2023, December 17 - v 1.3.6", ["Fixed: Minor bugs"]],
    ["2023, December 15 - v 1.3.5", ["Updated: Senior Care Theme WP Bakery Page Builder Addons to 1.3.0", "Updated: WPBakery Page Builder to 7.3"]],
    ["2023, September 12 - v 1.3.4", ["Updated: Senior Care Theme WP Bakery Page Builder Addons to 1.2.9", "Fixed: Translation issue of 404 page."]],
    ["2023, August 21 - v 1.3.3", ["Updated: WPBakery Page Builder to 7.0", "Fixed: Translation issue of 404 page."]],
    ["2023, June 18 - v 1.3.2", ["Updated: WPBakery Page Builder to 6.13.0", "Updated: WooCommerce product list page add to cart button."]],
    ["2022, December 18 - v 1.3.1", ["Updated: WooCommerce Product Search Page."]],
    ["2022, October 17 - v 1.3.0", ["Updated: WPBakery Page Builder to 6.10.0", "Fixed: Theme options panel menu position issue."]],
  ]
  generateDynamicLog(changeLogData)
})
