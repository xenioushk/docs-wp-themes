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
    const commonLogText = "<b>Updated:</b> Theme compatibility with the latest WordPress, translation file & documentation."
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
    ["2025, January 05 - v 1.3.1", ["Updated: WPBakery Page Builder to 8.1", "Updated: Slider Revolution to 6.7.25", "Updated: Ultimate Addons for WPBakery Page Builder to 3.19.25"]],
    ["2024, August 29 - v 1.3.0", ["Updated: WPBakery Page Builder to 7.9", "Updated: Slider Revolution to 6.7.18", "Updated: Ultimate Addons for WPBakery Page Builder to 3.19.22"]],
    ["2023, December 17 - v 1.2.9", ["Updated: WPBakery Page Builder to 7.3", "Updated: Slider Revolution to 6.6.19", "Updated: Causes Manager 1.0.2", "Updated: Ultimate Addons for WPBakery Page Builder to 3.19.19", "Fixed: Causes Manager warning for PHP 8 Version.", "Updated: Blog layout and sidebar.", "Updated: Theme demo.xml file."]],
    ["2023, November 02 - v 1.2.8", ["Updated: WPBakery Page Builder to 7.1"]],
  ]
  generateDynamicLog(changeLogData)
})
