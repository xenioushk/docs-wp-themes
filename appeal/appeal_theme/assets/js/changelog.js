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
  var metaData = ["1.2.6", "28/08/2024"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2024, August 28 - v 1.2.6", ["Updated: WPBakery Page Builder to 7.9"]],
    ["2024, August 17 - v 1.2.5", ["Fixed: Theme responsive issues", "Updated: WPBakery Page Builder to 7.8", "Updated: Petitions Manager Plugin to 1.1.4"]],
    ["2024, March 15 - v 1.2.4", ["Updated: WPBakery Page Builder to 7.5", "Updated: Petitions Manager Plugin to 1.1.2"]],
    ["2023, December 21 - v 1.2.3", ["Updated: WPBakery Page Builder to 7.3", "Updated: Petitions Manager Plugin to 1.1.1"]],
    ["2023, November 02 - v 1.2.2", ["Updated: WPBakery Page Builder to 7.1"]],
  ]
  generateDynamicLog(changeLogData)
})
