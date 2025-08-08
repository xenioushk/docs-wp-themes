$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Added:": "<b>🚀 Added:</b>",
      "Updated:": "<b>🔥 Updated:</b>",
      "Fixed:": "<b>✅ Fixed:</b>",
      "Removed:": "<b>❌ Removed:</b>",
    }

    return string.replace(/Added:|Updated:|Fixed:|Removed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>🔥 Updated:</b> Compatible with the latest WordPress version, includes translations and docs."
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
  var metaData = ["1.4.2", "08/08/2025"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2025, August 08 - v 1.4.2", ["Updated: WPBakery Page Builder to 8.6.1"]],
    ["2025, June 25 - v 1.4.1", ["Updated: WPBakery Page Builder to 8.5", "Updated: Reddrop Buddies WPBakery Page Builder Addons to 1.2.6"]],
    ["2025, April 25 - v 1.4.0", ["Updated: WPBakery Page Builder to 8.4.1", "Fixed: Translation notice for WP 6.8"]],
    ["2024, December 07 - v 1.3.9", ["Fixed: Translation notice for WP 6.7.1", "Updated: WPBakery Page Builder to 8.0.1", "Updated: Reddrop Buddies WPBakery Page Builder Addons to 1.2.4", "Fixed: Causes carousel display issue."]],
    ["2024, August 29 - v 1.3.8", ["Updated: WPBakery Page Builder to 7.9"]],
    ["2024, June 22 - v 1.3.7", ["Updated: WPBakery Page Builder to 7.7", "Updated: Reddrop Buddies WPBakery Page Builder Addons to 1.2.3", "Fixed: WooCommerce product page duplicate h1 tags.", "Fixed: WooCommerce shop page breadcrumb issue."]],
    ["2024, April 23 - v 1.3.6", ["Updated: WPBakery Page Builder to 7.6", "Updated: WooCommerce single product template."]],
    ["2024, March 15 - v 1.3.5", ["Updated: WPBakery Page Builder to 7.5"]],
    ["2023, December 15 - v 1.3.4", ["Updated: Reddrop Buddies WPBakery Page Builder Addons to 1.2.2", "Updated: WPBakery Page Builder to 7.3", "Updated: Theme compatibility with the latest WordPress."]],
    ["2023, October 12 - v 1.3.3", ["Updated: WPBakery Page Builder to 7.0", "Updated: Reddrop Buddies WPBakery Page Builder Addons to 1.2.1"]],
  ]
  generateDynamicLog(changeLogData)
})
