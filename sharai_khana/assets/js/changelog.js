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
  var metaData = ["1.3.5", "19/10/2023"]
  updateMetaInfo(metaData)

  // Just add a new row.
  // @sample: ["2023, July, 13 - v 1.3.6", ["Updated: BWl Knowledge Base Manager Plugin to 1.4.5", "Fixed: Translation issue of 404 page.", "Updated: Theme compatibility with the latest WordPress."]],
  var changeLogData = [
    // Add a new row below this comment.
    ["2023, October 19 - v 1.3.5", ["Updated: WPBakery Page Builder 7.1", "Updated: Sharai Khana Theme WP Bakery Page Builder Addons to 1.2.8", "Fixed: Translation issue.", "Updated: Theme compatibility with the latest WordPress."]],
    ["2023, September 13 - v 1.3.4", ["Updated: Sharai Khana Theme WP Bakery Page Builder Addons to 1.2.7", "Fixed: Translation issue.", "Updated: Theme compatibility with the latest WordPress."]],
  ]
  generateDynamicLog(changeLogData)
})
