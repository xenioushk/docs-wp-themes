$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Added:": "<b>🚀 Added:</b>",
      "Updated:": "<b>🔥 Updated:</b>",
      "Fixed:": "<b>✅ Fixed:</b>",
    }

    return string.replace(/Added:|Updated:|Fixed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>🔥 Updated:</b> Theme compatibility with the latest WordPress, translation file & documentation."
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
  var metaData = ["1.3.1", "05/01/2025"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2025, January 05 - v 1.3.1", ["Updated: WPBakery Page Builder to 8.1", "Updated: Wizard WPBakery Page Builder Addons to 1.2.5"]],
    ["2024, August 28 - v 1.3.0", ["Updated: WPBakery Page Builder to 7.9", "Updated: WooCommerce template files."]],
    ["2024, March 15 - v 1.2.9", ["Updated: WPBakery Page Builder to 7.5"]],
    ["2023, December 21 - v 1.2.8", ["Updated: WPBakery Page Builder to 7.3", "Updated: Wizard WPBakery Page Builder Addons to 1.2.4"]],
    ["2023, November 02 - v 1.2.7", ["Updated: WPBakery Page Builder to 7.1"]],
  ]
  generateDynamicLog(changeLogData)
})
